#!/usr/bin/env node
/**
 * Creates Stripe products, prices and Payment Links for prints, from prints.csv.
 * Writes the results to print-links.json (live) or print-links.test.json (test / dry-run).
 *
 * Digital prints redirect to their download_url (from prints.csv) after payment.
 * That URL is only ever sent to Stripe. The json files store a hash of it, never the URL,
 * because the site bundles those files and anything in them is public.
 *
 * Usage (from the repo root):
 *   node --env-file=.env.stripe scripts/create-print-links.mjs --dry-run
 *   node --env-file=.env.stripe scripts/create-print-links.mjs
 *   node --env-file=.env.stripe scripts/create-print-links.mjs --live
 *
 * Env (.env.stripe, never committed):
 *   STRIPE_SECRET_KEY   restricted key: write on Products, Prices, Payment Links, Shipping rates
 *   SHIPPING_FLAT_USD   one flat shipping rate for every physical print (CA + US)
 *   DATA_DIR            optional, folder holding prints.csv and the json files
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import Stripe from 'stripe';

const DATA_DIR = process.env.DATA_DIR ?? 'src/pages/Shop/components'; // <- folder next to ArtWork.tsx
const CURRENCY = 'usd';
const SHIP_TO = ['CA', 'US'];

const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');
const allowLive = args.has('--live');

const die = (msg) => { console.error(`\n✖ ${msg}\n`); process.exit(1); };
const hash = (s) => crypto.createHash('sha256').update(s).digest('hex').slice(0, 16);

/* ---------- Mode and safety ---------- */
const key = process.env.STRIPE_SECRET_KEY ?? '';
const isTest = /^(sk|rk)_test_/.test(key);
const isLive = /^(sk|rk)_live_/.test(key);

if (!dryRun) {
    if (!key) die('STRIPE_SECRET_KEY is not set. Use --dry-run to preview without a key.');
    if (!isTest && !isLive) die('STRIPE_SECRET_KEY must start with sk_/rk_ test_ or live_.');
    if (isLive && !allowLive) die('Live key detected. Re-run with --live if you really mean it.');
}
const useLiveFile = isLive && !dryRun;
const csvPath = path.join(DATA_DIR, 'prints.csv');
const outPath = path.join(DATA_DIR, useLiveFile ? 'print-links.json' : 'print-links.test.json');

console.log(`Mode: ${dryRun ? 'DRY RUN (no Stripe calls)' : useLiveFile ? 'LIVE' : 'TEST'}`);
console.log(`Reading ${csvPath}\nWriting ${outPath}\n`);

/* ---------- CSV ---------- */
function readRows() {
    if (!fs.existsSync(csvPath)) die(`Cannot find ${csvPath}. Check DATA_DIR.`);
    const text = fs.readFileSync(csvPath, 'utf8').replace(/^\uFEFF/, '');
    const lines = text.split(/\r?\n/).filter((l) => l.trim());
    const header = lines.shift().split(',').map((h) => h.trim());
    if (header.slice(0, 4).join() !== 'id,physical_price,digital_price,download_url') {
        die('prints.csv header must start with: id,physical_price,digital_price,download_url');
    }
    const seen = new Set();
    return lines.map((line, i) => {
        const [id, physical, digital, downloadUrl, ...rest] = line.split(',');
        const rowId = id.trim();
        if (!rowId) die(`prints.csv line ${i + 2}: missing id`);
        if (seen.has(rowId)) die(`prints.csv: duplicate id "${rowId}"`);
        seen.add(rowId);

        const row = {
            id: rowId,
            title: rest.join(',').trim() || rowId,
            physical: toCents(physical, rowId),
            digital: toCents(digital, rowId),
            downloadUrl: (downloadUrl ?? '').trim(),
        };
        if (row.digital) {
            if (!row.downloadUrl) die(`prints.csv: "${rowId}" has a digital price but no download_url`);
            if (!/^https:\/\//.test(row.downloadUrl)) die(`prints.csv: download_url for "${rowId}" must start with https://`);
        }
        return row;
    });
}

function toCents(raw, id) {
    const v = (raw ?? '').trim().replace(/^\$/, '');
    if (!v) return null;
    const n = Number(v);
    if (!Number.isFinite(n) || n <= 0) die(`prints.csv: bad price "${raw}" for "${id}"`);
    return Math.round(n * 100);
}

/* ---------- State ---------- */
const state = fs.existsSync(outPath)
    ? JSON.parse(fs.readFileSync(outPath, 'utf8'))
    : { shippingRate: null, prints: {} };
state.prints ??= {};
const save = () => fs.writeFileSync(outPath, JSON.stringify(state, null, 2) + '\n');

const rows = readRows();
const stripe = dryRun ? null : new Stripe(key);
const usd = (c) => `$${(c / 100).toFixed(2)}`;

/* ---------- Shipping rate (one flat rate for all physical prints) ---------- */
async function ensureShippingRate() {
    if (!rows.some((r) => r.physical)) return null;
    const dollars = Number(process.env.SHIPPING_FLAT_USD);
    if (!Number.isFinite(dollars) || dollars < 0) die('Set SHIPPING_FLAT_USD (e.g. 15) for physical prints.');
    const cents = Math.round(dollars * 100);
    if (state.shippingRate?.cents === cents) return state.shippingRate;
    console.log(`+ shipping rate ${usd(cents)} flat (CA + US)`);
    if (dryRun) return { id: '(dry-run)', cents };
    const r = await stripe.shippingRates.create({
        display_name: 'Shipping (Canada & US)',
        type: 'fixed_amount',
        fixed_amount: { amount: cents, currency: CURRENCY },
    });
    state.shippingRate = { id: r.id, cents };
    save();
    return state.shippingRate;
}

/* ---------- Retire an old link + price ---------- */
async function retire(entry, label) {
    console.log(`- retire ${label}`);
    if (dryRun) return;
    try { await stripe.paymentLinks.update(entry.linkId, { active: false }); }
    catch (e) { console.warn(`  ! could not deactivate link ${entry.linkId}: ${e.message}`); }
    try { await stripe.prices.update(entry.priceId, { active: false }); }
    catch (e) { console.warn(`  ! could not archive price ${entry.priceId}: ${e.message}`); }
}

/* ---------- Main ---------- */
const rate = await ensureShippingRate();
let created = 0, kept = 0, retired = 0, updated = 0;

for (const row of rows) {
    for (const variant of ['physical', 'digital']) {
        const cents = row[variant];
        const prev = state.prints[row.id]?.[variant];
        const label = `${row.id} (${variant})`;
        const redirectUrl = variant === 'digital' ? row.downloadUrl : undefined;
        const redirectHash = redirectUrl ? hash(redirectUrl) : undefined;

        if (!cents) {
            if (prev) {
                await retire(prev, label);
                retired++;
                if (!dryRun) {
                    delete state.prints[row.id][variant];
                    if (!Object.keys(state.prints[row.id]).length) delete state.prints[row.id];
                    save();
                }
            }
            continue;
        }

        const sameCore = prev
            && prev.cents === cents
            && (variant !== 'physical' || prev.shippingRateId === rate.id);

        // Only the download link changed: update the existing Stripe link in place (same buy URL)
        if (sameCore && variant === 'digital' && prev.redirectHash !== redirectHash) {
            console.log(`~ ${label} download link changed (updating in place)`);
            updated++;
            if (dryRun) continue;
            await stripe.paymentLinks.update(prev.linkId, {
                after_completion: { type: 'redirect', redirect: { url: redirectUrl } },
            });
            prev.redirectHash = redirectHash;
            delete prev.redirect; // older versions stored the plain URL here
            save();
            continue;
        }

        if (sameCore) { kept++; continue; }

        console.log(`+ ${label} ${usd(cents)}${prev ? ' (replaces older link)' : ''}`);
        created++;
        if (dryRun) continue;

        const productId = prev?.productId ?? (await stripe.products.create({
            name: `${row.title} — ${variant === 'physical' ? 'Physical print' : 'Digital print'}`,
            metadata: { artworkId: row.id, variant },
        })).id;
        const price = await stripe.prices.create({ product: productId, unit_amount: cents, currency: CURRENCY });
        const link = await stripe.paymentLinks.create({
            line_items: [{ price: price.id, quantity: 1 }],
            metadata: { artworkId: row.id, variant },
            ...(variant === 'physical' && {
                shipping_address_collection: { allowed_countries: SHIP_TO },
                shipping_options: [{ shipping_rate: rate.id }],
            }),
            ...(redirectUrl && { after_completion: { type: 'redirect', redirect: { url: redirectUrl } } }),
        });

        if (prev) await retire(prev, `${label} old link`);

        state.prints[row.id] ??= {};
        state.prints[row.id][variant] = {
            price: cents / 100,
            url: link.url,
            cents,
            productId,
            priceId: price.id,
            linkId: link.id,
            ...(variant === 'physical' && { shippingRateId: rate.id }),
            ...(redirectHash && { redirectHash }),
        };
        save();
    }
}

console.log(`\nDone. created ${created}, updated ${updated}, unchanged ${kept}, retired ${retired}.`);
if (dryRun) console.log('Dry run: nothing was sent to Stripe and no file was written.');
