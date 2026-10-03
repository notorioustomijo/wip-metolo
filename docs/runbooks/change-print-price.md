# Change a print price

Also covers adding a print price to an artwork that has none, removing a print, and changing a digital download link.

| | |
|---|---|
| **Who can do it** | Whoever has the repo cloned on their computer and a live Stripe key in `.env.stripe` (the website manager, or the client if she completed [one-time-setup](one-time-setup.md)). |
| **Time** | 10-15 minutes, plus the deploy. |
| **Applies to** | Prints only (physical and digital). Originals are not priced here: see [mark-original-sold](mark-original-sold.md) and the enquiry flow in the README. |

Background on the pipeline: [PRICING.md](../../PRICING.md). This runbook is the routine after launch.

## Before you start

- [ ] The repo is on your computer and `npm install` has been run.
- [ ] Node 22.12 or newer is installed (`node -v`).
- [ ] `.env.stripe` exists in the repo root, holds a key starting `rk_live_` (or `sk_live_`), and has `SHIPPING_FLAT_USD`. If not, do [one-time-setup](one-time-setup.md) first.
- [ ] You are NOT changing `SHIPPING_FLAT_USD`. Changing it regenerates every physical print link.
- [ ] You have the new price in USD, as a plain number (`45` or `45.50`).
- [ ] You have a plain text editor (VS Code, Notepad, TextEdit in plain-text mode). **Do not use Excel or Google Sheets**: they add quotes, change separators and break the file.
- [ ] You can deploy straight afterwards. The old Stripe link stops working the moment the script runs, and the live site keeps showing it until you deploy.

## Steps

1. [ ] **Get the latest files.** Pull the repo (`git pull`, or Sync in GitHub Desktop).
2. [ ] **Open `src/pages/Shop/components/prints.csv`** in the text editor.
3. [ ] **Edit only the number** in the row for that artwork.
   - Columns: `id, physical_price, digital_price, download_url, title`.
   - Physical price is column 2, digital price is column 3.
   - Number only: no `$`, no spaces, no thousands comma.
   - Leave `id` exactly as is. Never add a comma inside a title.
   - To **remove** a print: blank that price cell (and, for digital, you may blank the URL too).
   - To **add** a print: type the price in the blank cell. For digital, also paste the `download_url` (must start with `https://`).
   - To **change a digital download link only**: replace the URL in column 4. Prices stay as they are.
4. [ ] **Save, then check the change.** In GitHub Desktop (or `git diff prints.csv`) only the line(s) you meant to change should show.
5. [ ] **Run the script** from the repo root:
   ```bash
   node --env-file=.env.stripe scripts/create-print-links.mjs --live
   ```
   The first lines must say `Mode: LIVE` and `Writing ... print-links.json`. If they say `TEST` or `print-links.test.json`, stop: you have a test key. See the first item under "If it goes wrong".
   Do not use `--dry-run` for this. A dry run reads the test file, not the live one, so it reports every print as new and tells you nothing useful.
6. [ ] **Read the last line** and compare it to the table:

   | You did | Expect |
   |---|---|
   | Changed one price (one variant) | `created 1, updated 0, unchanged N, retired 0` |
   | Changed both prices on one artwork | `created 2` |
   | Added a print | `created 1` |
   | Removed a print | `retired 1` |
   | Changed only a download link | `updated 1` |

   `unchanged N` is everything else and is expected to be large. If `created` is higher than expected, go to "If it goes wrong".
7. [ ] **Check `print-links.json`.** In the diff, only the artwork id(s) you changed should differ (new `price`, `url`, `priceId`, `linkId`).
8. [ ] **Commit** `prints.csv` and `print-links.json` together. Commit message example: `Print price: ancestral-link physical 45`.
9. [ ] **Deploy.** Follow README → Deploy (it depends on the hosting path chosen).

## You're done when

- [ ] The live site shows the new price on that artwork's detail page.
- [ ] Clicking the Buy button opens a Stripe checkout page showing the same price. (Close it without paying.)
- [ ] `prints.csv` and `print-links.json` are both committed and deployed.

## If it goes wrong

| What you see | What it means / what to do |
|---|---|
| `Mode: TEST`, or it writes `print-links.test.json` | `.env.stripe` holds a test key. Do not continue. Replace it with the live key (see [rotate-stripe-key](rotate-stripe-key.md)) and re-run. |
| `Live key detected. Re-run with --live` | You left off `--live`. Add it. |
| `STRIPE_SECRET_KEY is not set` | `.env.stripe` is missing, misnamed, or you are not in the repo root. |
| `STRIPE_SECRET_KEY must start with sk_/rk_ test_ or live_` | The key was pasted wrongly (extra space, missing characters). Re-copy it. |
| `Set SHIPPING_FLAT_USD` | The line is missing or not a number in `.env.stripe`. |
| Stripe error mentioning permissions, or 401 / 403 | The key lacks a permission. Compare against the checklist in [rotate-stripe-key](rotate-stripe-key.md). |
| `bad price "..." for "<id>"` | The price cell has a symbol, text, comma or zero. Fix the cell and re-run. Re-running is safe: finished items show as `unchanged`. |
| `has a digital price but no download_url` / `must start with https://` | Fix the URL cell for that row and re-run. |
| `created` is higher than expected | Do not deploy yet. Most likely `SHIPPING_FLAT_USD` was changed (all physical links regenerated), or a different row was edited by accident. Check the `prints.csv` diff and `.env.stripe`, correct, and re-run. |
| The script crashed halfway | Re-run the same command. It saves after each change, so it carries on without duplicating. |
| Live site still shows the old price after deploy | Confirm the deploy finished, hard-refresh the page, and confirm `print-links.json` (not only the test file) was committed. |
| Buy button missing for that print | The price cell is blank, or the `id` in `prints.csv` does not match the artwork's `id` in `ArtWork.tsx`. A mistyped id is silently ignored (see [KNOWN-ISSUES](../KNOWN-ISSUES.md)). |
| Excel or Sheets mangled the CSV | Discard your changes to `prints.csv` (`git checkout -- src/pages/Shop/components/prints.csv`) and redo the edit in a plain text editor. |
| Old link was deactivated but the site still shows it | Expected until you deploy. Deploy now. Buyers with the old link see a Stripe "link no longer active" page. |