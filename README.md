# Dr. Metolo Foyet site: Shop, manager README

For the person maintaining this site. Not a developer? Read `docs/CLIENT-GUIDE.md` instead.

The Shop page sells **prints** through Stripe Payment Links and takes **enquiries** for original artworks through a form. There is no backend, by design. Everything is a static site plus two third-party services (Stripe and Formspree).

## Quick links

| I want to... | Go to |
|---|---|
| Change a print price | `docs/runbooks/change-print-price.md` |
| Add a new artwork | `docs/runbooks/add-new-artwork.md` |
| Mark an original sold | `docs/runbooks/mark-original-sold.md` |
| Rotate or create the Stripe key | `docs/runbooks/rotate-stripe-key.md` |
| Change who receives enquiries | `docs/runbooks/hand-over-formspree.md` |
| Launch the shop for real | `docs/runbooks/go-live-checklist.md` |
| See what is still undecided | `docs/OPEN-ITEMS.md` |
| See known bugs and traps | `docs/KNOWN-ISSUES.md` |
| See ideas for later | `docs/FUTURE-IMPROVEMENTS.md` |
| Script details | `PRICING.md` |

## Stack and requirements

React 19, TypeScript, Tailwind 4, Vite 8, react-router-dom 7. Package manager: npm.

**Node 22.12 or newer.** Vite 8 needs 20.19+ or 22.12+, and `vite-imagetools` needs 22+. The Stripe script needs 20.6+ for `--env-file`, so 22 covers everything.

There are no automated tests. Check changes with `npm run build` and a manual click-through.

## Setup

```bash
git clone <repo-url>
cd <repo-folder>
npm install
```

Create a file named `.env` in the repo root:

```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

Create `.env.stripe` **only** if you will run the print-links script (see `docs/runbooks/rotate-stripe-key.md` for creating the key):

```
STRIPE_SECRET_KEY=rk_test_...
SHIPPING_FLAT_USD=15
```

Both files are gitignored. Never commit them.

### Environment variables

| Variable | File | Used by | Notes |
|---|---|---|---|
| `VITE_FORMSPREE_ENDPOINT` | `.env` | Enquiry form | Read **at build time** and visible in the built site. Changing it needs a rebuild and redeploy. |
| `STRIPE_SECRET_KEY` | `.env.stripe` | `scripts/create-print-links.mjs` only | Secret. Restricted key. Never prefix with `VITE_` (that would publish it). |
| `SHIPPING_FLAT_USD` | `.env.stripe` | Same script | One flat shipping rate for every physical print. |
| `DATA_DIR` | `.env.stripe` (optional) | Same script | Folder holding `prints.csv` and the JSON files. Default is `src/pages/Shop/components`. |

## Run, build, preview

```bash
npm run dev       # local dev server. Also shows TEST print links (see below)
npm run build     # type-check, then production build into dist/
npm run preview   # serve dist/ locally to check the production build
npm run lint
```

Test-mode print links appear **only** under `npm run dev`. A production build reads `print-links.json` (live) only.

## Where things live

All shop code is in `src/pages/Shop/components/` unless noted.

| File | What it does |
|---|---|
| `ArtWork.tsx` | **Single source of truth.** Every artwork (`baseList`), the display helpers, and the merge of the print link JSON. Year tabs and Featured are derived from this data. |
| `Artactions.tsx` | Decides which buttons an artwork gets (Enquire, Make an offer, Buy physical, Buy digital). |
| `AllArtworks.tsx`, `Featured.tsx`, `ArtworkDetail.tsx` | Display. No data of their own. |
| `EnquiryPage.tsx` | Enquiry form for originals. Posts to Formspree, shows a thank-you in place. |
| `prints.csv` | The only file the client edits for prices. |
| `print-links.json` | Live Stripe links. Written by the script. Never edit by hand. |
| `print-links.test.json` | Test-mode links. Written by the script. Never edit by hand. |
| `artworks/` | Image files. |
| `../../../App.tsx` | Routes: `/shop`, `/shop/:artworkId`, `/enquire/:artworkId`. |
| `scripts/create-print-links.mjs` (repo root) | Creates Stripe products, prices and links from `prints.csv`. |

### How it works

- Each artwork has `original.status`: `available`, `sold`, `gifted`, `not-for-sale`, `make-offer` or `unlisted`. Optional `original.price`. Optional `print.physical` and `print.digital`, filled automatically from the JSON files.
- **Originals are never bought directly.** The button goes to `/enquire/:id`. The artist replies, creates a one-off Stripe Payment Link by hand in her dashboard, and emails it. When an original sells, someone edits `original.status` in `ArtWork.tsx` and redeploys.
- **Prints** are static Stripe Payment Links in USD, one per variant. Physical prints collect a shipping address (Canada and US only) with one flat rate. Digital prints redirect to a Google Drive download link after payment.
- **The artwork `id` is the URL, the CSV key and the Stripe metadata.** Do not rename an `id` once it has links or has been shared.

## Deploy

**Hosting is not decided.** The site is plain static files, so any static host works. Pick one (see `docs/OPEN-ITEMS.md`) and follow its path below. Vercel's free Hobby tier is non-commercial, so it is not suitable for a shop without a paid plan.

Every host needs the same four things:

1. Build command: `npm run build`
2. Output folder: `dist/`
3. A fallback so any unknown path serves `index.html` (the site uses client-side routing, so `/shop/ancestral-link` must not 404)
4. `VITE_FORMSPREE_ENDPOINT` present **when the build runs**

### Path A: Hostinger (existing hosting, no extra cost)

First confirm the plan type. This works on regular web hosting with a File Manager or FTP access. A website-builder plan cannot serve a custom build; if that is what she has, use Path B.

1. Make sure `.env` exists locally with the real endpoint.
2. Add a `public/.htaccess` file (Vite copies `public/` into `dist/`) with:

   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

3. Run `npm run build`.
4. Upload the **contents** of `dist/` (not the folder itself) to `public_html/`, replacing the old files.
5. Open the site, then open a deep link such as `/shop/ancestral-link` directly. If it 404s, the `.htaccess` did not upload (hidden file) or rewrites are off.

Every content change means build and upload again. Hostinger does not build the site for you.

### Path B: Cloudflare Pages (free for commercial use, auto-deploys)

1. Create a Cloudflare Pages project from the GitHub repo.
2. Build command `npm run build`, output directory `dist`.
3. Environment variables: `VITE_FORMSPREE_ENDPOINT`, and `NODE_VERSION` set to `22`.
4. Add the custom domain and follow Cloudflare's DNS instructions. The domain can stay registered at Hostinger, but a root domain normally needs its DNS served by Cloudflare. The setup screen walks through it.
5. From then on, every push to the main branch rebuilds and deploys.

Pages serves `index.html` for unknown routes when the project has no `404.html`, so no extra routing file is needed. `vercel.json` in the repo is unused on this path.

### If you ever use Vercel

`vercel.json` already contains the fallback rewrite. Use a paid plan, set `VITE_FORMSPREE_ENDPOINT` in project settings, and keep Node at 22.

## Before launch

Test data is still in the repo and the live link file is empty. Do not launch until `docs/runbooks/go-live-checklist.md` is complete.

## Secrets: rules

- `.env` and `.env.stripe` are gitignored. Keep them that way.
- Only restricted Stripe keys. Never paste a key into a chat, an email, or any file in the repo.
- `prints.csv` contains the Google Drive download URLs for digital prints. Anyone who can read the repo can download those files without paying. Keep the repo private.