# Print prices and Stripe links

Prints (physical and digital) are sold through static Stripe Payment Links, in USD.
Originals are NOT handled here: they go through the enquiry form, and the artist creates a one-off link by hand.

## Files

| File | Who edits it | Purpose |
|---|---|---|
| `prints.csv` | Client / site manager | One row per artwork: `id, physical_price, digital_price, download_url, title`. Blank price = no print of that kind. |
| `scripts/create-print-links.mjs` | Nobody (run it) | Reads the CSV, creates Stripe products, prices and links. |
| `print-links.json` | Script only | Live prices and buy URLs. The site reads this. |
| `print-links.test.json` | Script only | Test-mode output. Only used by the site in dev (`npm run dev`). |
| `.env.stripe` | Site manager | Stripe key and shipping rate. Gitignored. Never named `.env`, never `VITE_`-prefixed. |

Never edit the json files by hand. Keep the `id` column as is; `title` is a label for humans.

## Digital downloads

Each digital print needs a `download_url` (a Google Drive link set to "Anyone with the link: Viewer").
After payment, Stripe redirects the buyer to that URL. The URL is sent only to Stripe. The json files
store a hash of it, never the URL, because the site bundles those files and anything in them is public.

For an instant download use `https://drive.google.com/uc?export=download&id=FILE_ID`. The normal share link opens a preview page instead.

Changing a `download_url` and re-running updates the existing link in place. The buy URL stays the same.

## Change or add a price

1. Edit the number in `prints.csv` (whole dollars or decimals, no currency symbol).
2. Run the script (below).
3. Commit `print-links.json` and `prints.csv`, then redeploy.

Stripe prices cannot be edited after creation, so the script creates a new price and link, deactivates the old link, and archives the old price. Anyone holding the old link can no longer pay.

## Remove a print

Blank the cell in `prints.csv` and re-run. The old link is deactivated and the button disappears.

## Run it

Needs Node 20.6+ and `npm i -D stripe`. Run from the repo root.

`.env.stripe`:
```
STRIPE_SECRET_KEY=sk_test_...
SHIPPING_FLAT_USD=15
```

```bash
# Preview only, no Stripe calls
node --env-file=.env.stripe scripts/create-print-links.mjs --dry-run

# Test mode (writes print-links.test.json)
node --env-file=.env.stripe scripts/create-print-links.mjs

# Live (writes print-links.json); use a rk_live_/sk_live_ key and the real shipping amount
node --env-file=.env.stripe scripts/create-print-links.mjs --live
```

Use a Stripe **restricted key** with write access to Products, Prices, Payment Links and Shipping rates only.

## Settings that apply to every link

- Currency: USD. Stripe converts to CAD at payout and charges a conversion fee.
- Physical prints: shipping address collected, Canada and US only, one flat rate (`SHIPPING_FLAT_USD`). Changing the flat rate regenerates every physical link on the next run.
- Digital prints: redirect to the row's `download_url` after payment.

## Before going live

1. Clear test data: remove the placeholder prices and example download links from `prints.csv`, and reset `print-links.test.json` to `{ "shippingRate": null, "prints": {} }`.
2. Get real prices, real Drive links and the flat shipping amount from the client.
3. Run once in test mode with the real data, click through one physical and one digital checkout with test card 4242 4242 4242 4242, then run with `--live`.