# Future improvements

Ideas that were considered and deliberately parked. None is needed to run the shop. Each says what it would fix and when it is worth revisiting.

## 1. GitHub Actions workflow for print links (rejected for now)

**Idea.** A workflow in GitHub that runs when `prints.csv` changes: it runs `scripts/create-print-links.mjs --live`, commits the updated `print-links.json`, then builds and deploys. The client would change a price by editing one cell in the GitHub web editor, with no local setup.

**What it would fix.** Price changes would no longer need Node, a local copy of the repo or a local `.env.stripe`. The runbook [change-print-price](runbooks/change-print-price.md) would shrink to "edit the cell, wait".

**Why it was not built now.**
- The restricted live Stripe key would have to live in GitHub as a repository secret, which moves key custody from one local file to the repository's settings. The current design keeps the key on one machine and out of the repo.
- Workflows that commit back to the repository, run live Stripe calls and deploy are another thing to maintain, and a failed or half-run workflow is harder for a non-developer to diagnose than a local run.
- A `prints.csv` edit would go live in Stripe with no pause for a second look. (The script has no working preview after launch: see [KNOWN-ISSUES](KNOWN-ISSUES.md) #8.)
- The decision was to keep handover simple and fully self-serve with local runbooks first.

**Revisit when.** Prices change often, or the person running the script keeps being someone without Node installed. Before building, fix [KNOWN-ISSUES](KNOWN-ISSUES.md) #8, #9 and #10 so the workflow can validate the CSV and preview a change safely.

## 2. Live sold status without a redeploy (parked backend)

**Idea.** Today, selling an original means editing `original.status` in `ArtWork.tsx` and redeploying ([mark-original-sold](runbooks/mark-original-sold.md)). A small backend or hosted data store could hold each original's status, so marking a piece sold would be a button, not a code change. A Stripe webhook could mark an original sold automatically when its one-off Payment Link is paid.

**What it would fix.**
- No code edit or redeploy to record a sale.
- No window where a sold piece is still shown as available.
- No manual step to remember after a payment.

**Why it was not built.** The site has no backend by design. A backend adds hosting, secrets, a webhook endpoint to secure, and ongoing maintenance, all for a handful of sales a year. The manual edit is small and the runbook covers it.

**Revisit when.** Sales become frequent enough that the manual edit gets forgotten or delayed, or two buyers for the same original become a real risk.

## 3. Hardening the print script

Not parked by decision, just not done. These fixes live in the issues list:

- Check that every id in `prints.csv` exists in `ArtWork.tsx` ([KNOWN-ISSUES](KNOWN-ISSUES.md) #9).
- Make `--dry-run` read the same file the real run would use, so it is a true preview ([KNOWN-ISSUES](KNOWN-ISSUES.md) #8).
- Read the CSV with a proper parser so quotes and semicolons from spreadsheet programs stop breaking rows ([KNOWN-ISSUES](KNOWN-ISSUES.md) #10).
- Count a replaced price as `replaced` rather than `created` with `retired 0` ([KNOWN-ISSUES](KNOWN-ISSUES.md) #15).

**Revisit when.** Anyone with code access touches the script for another reason; or before building idea 1.

## 4. Safer image filenames

Rename existing image files to lower-case letters, digits and hyphens, and update the imports in `ArtWork.tsx` ([KNOWN-ISSUES](KNOWN-ISSUES.md) #1). It removes a class of "works on my machine" build failures.

**Revisit when.** A build fails on a host for a file-name reason, or the site is moved to a new host.