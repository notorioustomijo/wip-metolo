# Known issues

Findings from the developer's review before handover. They are documented, not fixed. Nothing here blocks launch unless marked **before launch**.

**Verified** means the behaviour is visible in the code in this repo. **Reported** means it came from the review pass and was not re-checked when this page was written: confirm before relying on it.

## Build and deployment

| # | Issue | Impact | What to know | Status |
|---|---|---|---|---|
| 1 | Image filenames contain spaces, apostrophes, brackets, accents (`Dākunaito`, `Plavuša`, `Pêcheurs`-style names) and the `▪` character, e.g. `Ichi_WC_Available ▪ Ichi One (Japanese).webp`. | A build may work on one machine and fail or miss images on another (Linux, Cloudflare, Hostinger), usually from case or Unicode-normalisation differences. | Build locally with `npm run build` and open the result before uploading. Use safe filenames for new images ([add-new-artwork](runbooks/add-new-artwork.md)). Renaming old files means updating the imports in `ArtWork.tsx`. | Verified (filenames); failure mode unconfirmed |
| 2 | The component file is `Artactions.tsx` (lower-case "a"), but the component, comments and docs call it `ArtActions`. | On case-sensitive systems (Linux hosts), an import written as `ArtActions` will not find `Artactions.tsx`. | If a build fails with a module-not-found error naming this file, make the import path match the file name's exact case. | Verified (file name vs. component name); import paths in other files not re-checked |
| 3 | `ArtworkDetail.tsx` imports with mixed paths (`'../components/ArtWork'` and `'./ArtWork'`). | Works only while the files stay where they are. Moving files breaks one of them. | Keep the folder layout as is. | Reported |
| 4 | `index.html` preloads files that may not exist. | Browser console warnings, a little wasted loading. | Cosmetic. | Reported |
| 5 | `tailwind.config.ts` has a content glob that Tailwind 4 ignores. | None today. Confusing for future editors. | Tailwind 4 reads styles from the Vite plugin. | Reported |
| 6 | `print-links.test.json` is imported by `ArtWork.tsx` unconditionally, so it ships in the production bundle even though it is only used in development. | If it holds test data, that data is public. | Keep it reset to `{ "shippingRate": null, "prints": {} }` before every build ([go-live-checklist](runbooks/go-live-checklist.md)). | Verified |
| 7 | Stripe object IDs (price, link, product) are written into `print-links.json`, which is bundled with the site. | Public, but not usable without a key. | Never put anything secret in these files. | Verified |

## Print pipeline

| # | Issue | Impact | What to know | Status |
|---|---|---|---|---|
| 8 | **`--dry-run` always reads and writes the test file** (`print-links.test.json`), never `print-links.json`. | After launch the test file is empty, so a dry run reports every print as "created". It is not a preview of a live change. | Do not use dry run for routine changes. [change-print-price](runbooks/change-print-price.md) goes straight to `--live`. | Verified |
| 9 | There is no check that an `id` in `prints.csv` exists in `ArtWork.tsx`. | A mistyped id still creates Stripe links, but the site ignores them, so no Buy button appears. | Copy ids from the existing rows. If a button is missing, compare the two ids. | Verified |
| 10 | `prints.csv` is read by splitting each line on commas. | Saving in Excel or Google Sheets can add quotes or use semicolons or decimal commas (as in French-Canadian settings), which breaks columns. Commas inside the price or URL columns break the row. A comma inside the *title* is tolerated, but the runbooks say to avoid it. | Edit with a plain text editor or the GitHub web editor. | Verified |
| 11 | `prints.csv` holds the real Drive download URLs in plain text. The hash protection only covers the JSON files. | Anyone who can read the repo can read the download links. | Keep the repository private. | Verified |
| 12 | Drive links in the `uc?export=download` form can show a large-file warning page or hit download-quota limits, and a Drive link works for anyone who has it. | A buyer may be sent to a warning page instead of an instant download. A shared link can be reshared. | Use smaller files; test every link in the rehearsal. | Reported (Drive behaviour) |
| 13 | The restricted key's permission list (Products, Prices, Payment Links, Shipping rates: write) has not been checked against a real restricted key. The development key was Stripe's default sandbox key. | A first run may fail on a missing permission. | The test-mode rehearsal in [go-live-checklist](runbooks/go-live-checklist.md) proves the list; [rotate-stripe-key](runbooks/rotate-stripe-key.md) holds the checklist. | Verified (not tested) |
| 14 | A run with no changes makes no Stripe calls. | A newly rotated key cannot be proved to work by re-running; the next real change is the first proof. | See [rotate-stripe-key](runbooks/rotate-stripe-key.md). | Verified |
| 15 | When a price changes, the script's summary counts it as `created` and shows `retired 0`, even though the old link is retired. | Confusing when reading the summary. | [change-print-price](runbooks/change-print-price.md) lists the expected counts. | Verified |
| 16 | All prices are in USD. Stripe converts to CAD at payout and charges a conversion fee. | The client receives slightly less than the sticker price. | Stated so no one is surprised by payouts. | Verified |
| 17 | Changing `SHIPPING_FLAT_USD` regenerates every physical link at the next run. | All old physical links die at once until the site is redeployed. | Deploy straight after running the script. | Verified |
| 18 | Test-mode objects created during development remain in the client's Stripe test mode. | None. | Harmless. | Reported |

## Secrets and repository

| # | Issue | Impact | What to know | Status |
|---|---|---|---|---|
| 19 | `.gitignore` lists `.env` and `.env.stripe` only. | Any other variant (`.env.local` is covered by `*.local`; `.env.production`, `.env.stripe.txt`, `.env.stripe.example`) is not. | Suggested tightening: add `.env.*` and, if a committed example file is ever wanted, `!.env.stripe.example`. | Verified |
| 20 | `.env.stripe` shows up in GitHub Desktop's Changes list. | A key could be committed. | Do not commit. It shows up for one of two reasons: git is already tracking the file (ignore rules do not hide tracked files), or the real name differs (for example Notepad saved `.env.stripe.txt`). Check the exact name first. If git is tracking it, treat the key as leaked and follow [rotate-stripe-key](runbooks/rotate-stripe-key.md) section C. | Verified (git behaviour) |
| 21 | `VITE_FORMSPREE_ENDPOINT` is public in the built site and fixed at build time. | Anyone can read the form address and post to it. | Turn on Restrict to Domain ([hand-over-formspree](runbooks/hand-over-formspree.md)); check the Formspree plan's submission cap and whether Restrict to Domain is available on it. | Verified |
| 22 | In `EnquiryPage.tsx` the string after `|` in `as string | 'https://formspree.io/f/...'` is a type, not a fallback value. | If the variable is missing at build time the form shows an error; there is no default. | Always set the variable for every build. | Verified |

## Site content and links

| # | Issue | Impact | What to know | Status |
|---|---|---|---|---|
| 23 | Legacy link `/shop/8&9` is now `/shop/8-and-9`, with no redirect. | Old shared links to that artwork show "Artwork not found". | Update any place that links to it. | Reported (old address); new id verified |
| 24 | Dead links: the "Commission an Artwork" button in `ArtworkDetail` has `url="#"` with `target=_blank`; the footer "Send Invite/Request" has `href=""`; the bio button has `url="#"`; Recognition exhibit links have `href=""`. | Buttons that do nothing or reload the page. | Give each a real address or remove it. | Reported |
| 25 | Footer hover classes have a stray space (`hover: text-...`). | The hover colour does not apply. | Cosmetic. | Reported |
| 26 | `StoryExperience` calls hooks after an early return. | Breaks React's rules of hooks; can throw an error if the early-return condition changes between renders. | Fine while the condition is constant. | Reported |