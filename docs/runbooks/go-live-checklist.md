# Go-live checklist

Run once, in order, when the shop opens to the public. Do not skip the test-mode rehearsal.

| | |
|---|---|
| **Who can do it** | The person launching the site: needs the repo on their computer, Stripe dashboard access on the client's account, the Formspree login, and the hosting login. |
| **Time** | 2-3 hours, plus the client's answers if anything is still outstanding. |

Related: [OPEN-ITEMS](../OPEN-ITEMS.md), [rotate-stripe-key](rotate-stripe-key.md), [hand-over-formspree](hand-over-formspree.md), [PRICING.md](../../PRICING.md), README → Deploy.

## Before you start

Everything below must be in hand. If any are missing, stop and resolve them via [OPEN-ITEMS](../OPEN-ITEMS.md).

- [ ] Real print prices, per artwork and per variant (USD).
- [ ] The flat shipping amount for physical prints (USD, Canada + US).
- [ ] A Google Drive download link for every digital print, shared as "Anyone with the link: Viewer", in the form `https://drive.google.com/uc?export=download&id=FILE_ID`.
- [ ] The client's email address for enquiries.
- [ ] The hosting decision (Hostinger upload or Cloudflare Pages) and a login for it.
- [ ] Every other item in OPEN-ITEMS is either answered or consciously left as is.
- [ ] The repo is **private**. `prints.csv` holds the real Drive download URLs, so anyone who can read the repo can read them.

## Steps

### 1. Clear the test data

- [ ] In `prints.csv`, remove every placeholder price ($40 / $10) and example Drive URL (currently `ancestral-link`, `digital-current`, `dahomey-twins`). Keep all rows and ids.
- [ ] Reset `print-links.test.json` to exactly:
  ```json
  { "shippingRate": null, "prints": {} }
  ```
- [ ] Confirm `print-links.json` is also `{ "shippingRate": null, "prints": {} }` (it should already be empty).

### 2. Enter the real data

- [ ] Fill the real prices and download links into `prints.csv`. Rules are in [change-print-price](change-print-price.md): plain text editor only, numbers only, never edit `id`.
- [ ] The 2018 series (`hustln`, `talkn`, `sniffn`, `kissn`, `blown`, `touchn`, `hangn`, `topn`, `plown`, `poundn`, `flowerin`) has no price cells filled. These stay display-only.
- [ ] Every `id` you filled matches an `id` in `ArtWork.tsx` exactly. A mistyped id is silently ignored.

### 3. Test-mode rehearsal (restricted test key)

- [ ] Create a **restricted test key** with the exact permissions in [rotate-stripe-key](rotate-stripe-key.md) (section A, test mode). Put it in `.env.stripe` with the real `SHIPPING_FLAT_USD`.
- [ ] Run:
  ```bash
  node --env-file=.env.stripe scripts/create-print-links.mjs
  ```
  First lines must say `Mode: TEST` and `Writing ... print-links.test.json`. A permissions error here means the key checklist needs fixing; fix it before going on.
- [ ] Start the site with `npm run dev` (test links only show under dev).
- [ ] Physical checkout: open a print with a physical price, click Buy, pay with card `4242 4242 4242 4242` (any future expiry, any CVC). Check the page asks for a shipping address, offers **only Canada and the US**, and charges the flat shipping amount.
- [ ] Digital checkout: do the same with a digital print. After payment you must land on the Drive download, and the file must actually download.
- [ ] Enquiry form: submit one enquiry on an available original and confirm it arrives (Formspree inbox or the email set up in [hand-over-formspree](hand-over-formspree.md)).
- [ ] Reset `print-links.test.json` to `{ "shippingRate": null, "prints": {} }` again. It is bundled into the build, so it must not carry rehearsal data into the commit.

### 4. Go live with the Stripe key

- [ ] In Stripe, switch to **live mode** and create a **restricted live key** with the identical permissions ([rotate-stripe-key](rotate-stripe-key.md), section A, steps 8). Replace the key line in `.env.stripe` with the `rk_live_...` key.
- [ ] Run:
  ```bash
  node --env-file=.env.stripe scripts/create-print-links.mjs --live
  ```
  First lines must say `Mode: LIVE` and `Writing ... print-links.json`.
- [ ] The last line's `created` count equals the number of print prices you entered (a physical and a digital price on the same artwork count as 2). `retired` is 0.
- [ ] `print-links.json` now has an entry for each of those ids, and `print-links.test.json` is still empty.
- [ ] Commit `prints.csv` and `print-links.json`.

### 5. Retire development keys and files

- [ ] In Stripe → Developers → API keys, **roll or expire the Stripe-generated test key** that was used during development (and delete the restricted test key from the rehearsal if no one will run test mode again).
- [ ] Delete the developer's own `.env.stripe` from their computer, unless that person is the ongoing site manager. A new `.env.stripe` is created by whoever runs the script next.
- [ ] Confirm no `.env.stripe` or `.env` file is in the repo or its history (`git log --all -- .env.stripe .env` prints nothing).

### 6. Formspree

- [ ] Add the client's email as the form's email address. Steps: [hand-over-formspree](hand-over-formspree.md).
- [ ] Turn on **Restrict to Domain** for the production domain, after the domain is final.
- [ ] Check the free-plan submission limit is acceptable, and whether Restrict to Domain is available on this plan.

### 7. Deploy

- [ ] Follow README → Deploy for the chosen hosting path.
- [ ] `VITE_FORMSPREE_ENDPOINT` is set **in the build** (it is baked in at build time; setting it later changes nothing until the next build).
- [ ] Hostinger path only: `public/.htaccess` with the SPA rewrite block from the README is in place before building, and the contents of `dist/` (not the folder itself) are uploaded.
- [ ] Optional check that no key leaked into the build: `grep -r "rk_live\|sk_live\|sk_test\|rk_test" dist` prints nothing.

### 8. Check the live site

- [ ] Open a deep link **directly** in a fresh browser tab (not by clicking through), for example `/shop/ancestral-link` and `/enquire/ancestral-link`. Both must load. A 404 means the SPA fallback is missing (see If it goes wrong).
- [ ] Refresh the page on a deep link. It must reload, not 404.
- [ ] Click a physical Buy button, then a digital Buy button. The Stripe pages show the right artwork and price, and show no test-mode marking. Close them without paying.
- [ ] Open a 2018-series artwork: no price, no buttons.
- [ ] A sold original shows its SOLD badge; an available original has an Enquire button; Whimsy shows Make an offer.
- [ ] Submit one real enquiry from the live site. It arrives in the client's inbox.
- [ ] Hand the client [CLIENT-GUIDE](../CLIENT-GUIDE.md).

## You're done when

- [ ] Steps 1-8 are all ticked.
- [ ] `print-links.json` is committed and deployed with real links; `print-links.test.json` is empty.
- [ ] Only the client's restricted live key exists for the print script, and the development test key is gone.
- [ ] A real enquiry from the live site reached the client.

## If it goes wrong

| What you see | What it means / what to do |
|---|---|
| Permissions error in the rehearsal | The restricted key is missing a permission. Add it (the error names it) and re-run. Fix the checklist in [rotate-stripe-key](rotate-stripe-key.md) if it was wrong. |
| Shipping address page offers other countries | The link was not created by this script version. Re-check you ran the current script; do not hand-edit links in Stripe. |
| Digital buyer lands on a Drive preview page, not a download | The URL is a normal share link. Use the `uc?export=download&id=...` form, then re-run: the link updates in place. |
| Drive shows a "can't scan for viruses" or quota page | Large file or too many downloads. Use a smaller file, or move the file; see [KNOWN-ISSUES](../KNOWN-ISSUES.md). |
| `created` count does not match your prices | A blank cell, a mistyped id, or a stray row. Fix `prints.csv` and re-run; finished items show as `unchanged`. |
| Live site shows test links or no Buy buttons | `print-links.json` was not committed or not deployed, or you edited the test file by mistake. |
| Deep links give 404 | Hostinger: `.htaccess` missing or the wrong folder. Cloudflare Pages: SPA fallback not active. See README → Deploy. |
| Enquiry form shows "Something went wrong" | `VITE_FORMSPREE_ENDPOINT` was not set at build time, or Restrict to Domain does not match the live domain. Fix, rebuild, redeploy. |
| `.env.stripe` shows up in the Changes list | Stop. Do not commit. See [one-time-setup](one-time-setup.md). |