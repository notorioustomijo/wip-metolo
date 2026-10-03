# Create or rotate the Stripe key

Covers three cases: creating the first restricted key, routine rotation, and replacing a key that may have leaked.

| | |
|---|---|
| **Who can do it** | Anyone with a Stripe login on the client's account that can manage API keys (Administrator or Developer role), and the repo on their computer. |
| **Time** | 15 minutes. |
| **What the key is for** | Only `scripts/create-print-links.mjs`. The website itself never uses it. It lives in `.env.stripe` on one computer, never in the repo. |

Related: [change-print-price](change-print-price.md), [go-live-checklist](go-live-checklist.md), [PRICING.md](../../PRICING.md).

## Rules for the key

- [ ] Use a **restricted key** (starts `rk_test_` or `rk_live_`), never the account's default secret key (`sk_...`).
- [ ] Test mode and live mode have separate keys. A test key only ever touches test data.
- [ ] Stripe shows a restricted key **once**. Copy it straight into `.env.stripe`.
- [ ] Never paste the key into email, chat, a document or a screenshot, and never name it with a `VITE_` prefix.
- [ ] One key per person or computer that runs the script, so any one can be deleted without affecting the others.

## Permission checklist

Create the key with custom permissions (choose "Powering an integration you built", then customise permissions). Set exactly these to **Write** and leave every other resource at **None**:

- [ ] Products: **Write**
- [ ] Prices: **Write**
- [ ] Payment Links: **Write**
- [ ] Shipping rates: **Write**
- [ ] Everything else (Customers, Charges, PaymentIntents, Checkout Sessions, Billing, Connect, all other rows): **None**

Notes:
- Stripe's dashboard layout and row labels change. The four names above are what the script uses; if a row is labelled slightly differently or grouped under another heading, match it by name.
- This list has not been checked against a purpose-made restricted key. The key used during development was Stripe's default sandbox key. The test-mode rehearsal in [go-live-checklist](go-live-checklist.md) is what proves the list. If a run fails with a permissions error, the error names the missing permission: add it as Write on that key, or create a new key.

## A. Create the first keys (before launch)

Do this in test mode first, then repeat in live mode.

1. [ ] Open the Stripe dashboard and switch to **test mode**.
2. [ ] Go to **Developers → API keys → Create restricted key**.
3. [ ] Name it so you can recognise it later, e.g. `Print links - test - 2026-10`.
4. [ ] Set the permissions from the checklist above. Create the key.
5. [ ] Copy the key (`rk_test_...`) now. It is shown once.
6. [ ] Create `.env.stripe` in the repo root from this block, with your key and the real shipping amount:
   ```
   # Copy this block into a new file named .env.stripe in the repo root.
   # .env.stripe is never committed and never shared. Not for the website.
   STRIPE_SECRET_KEY=rk_test_PASTE_KEY_HERE
   SHIPPING_FLAT_USD=15
   ```
7. [ ] Run the test-mode rehearsal in [go-live-checklist](go-live-checklist.md). It creates a product, price, shipping rate and payment link, so a pass means all four permissions work.
8. [ ] For go-live, switch the dashboard to **live mode**, repeat steps 2-5 with the **identical permissions** and a name like `Print links - live - 2026-10`, and replace the key line in `.env.stripe` with the `rk_live_...` key.
9. [ ] Retire the Stripe-generated test key used during development (go-live checklist has this step).

## B. Routine rotation (do yearly, or when the person who ran the script changes)

Create the new key before deleting the old one, so you are never locked out.

1. [ ] In Stripe (live mode): **Developers → API keys → Create restricted key**, with the permission checklist above. Copy it.
2. [ ] Open `.env.stripe` and replace the value of `STRIPE_SECRET_KEY` with the new key. Save. Keep `SHIPPING_FLAT_USD` unchanged.
3. [ ] Check `.env.stripe` is not listed as a change in GitHub Desktop or `git status`. If it is, stop and do not commit anything: see [one-time-setup](one-time-setup.md).
4. [ ] In Stripe, find the **old** key in the Restricted keys list and **delete** it.
5. [ ] Delete any other copy of the old key (other computers, notes, password manager entries).
6. [ ] The new key's write permissions are proven the next time you run [change-print-price](change-print-price.md). A run with no changes makes no Stripe calls, so it does not prove the key.

## C. The key may have leaked

Examples: key pasted into chat or email, `.env.stripe` committed, laptop lost.

1. [ ] **Delete the key in Stripe first** (Developers → API keys → the key → delete). Do this before anything else. Existing payment links keep working for buyers; only the script loses access.
2. [ ] If `.env.stripe` or the key was committed, tell whoever manages the repo. Deleting the key already makes the leaked value useless; the file should still be removed from the repo.
3. [ ] Check **Developers → Logs** (or the dashboard's recent activity) for anything you did not do. Unexpected products, links or shipping rates mean the key was used.
4. [ ] Create a new key (section B, steps 1-3) and update `.env.stripe`.

## You're done when

- [ ] The old key no longer appears in Stripe's Restricted keys list.
- [ ] `.env.stripe` holds only the new key and is not in the repo's Changes list.
- [ ] The key name in Stripe says what it is for and when it was made.
- [ ] (Section A) the test-mode rehearsal passed with the test key.

## If it goes wrong

| What you see | What it means / what to do |
|---|---|
| Stripe error naming a missing permission, or 401 / 403 | The key lacks a permission. Add that resource as Write on the key, or create a new key from the checklist. |
| `STRIPE_SECRET_KEY must start with sk_/rk_ test_ or live_` | Key pasted wrongly, or extra characters or spaces around it. Re-copy. |
| `Mode: TEST` when you meant live | You pasted the test key. Use the `rk_live_` key. |
| Live key detected, re-run with `--live` | Expected safety stop. Add `--live` only if you meant to go live. |
| You did not copy the key before closing the page | It cannot be shown again. Delete that key and create another. |
| You deleted the old key and the new one does not work | Create another new key from the checklist. Nothing on the website depends on any key. |
| `.env.stripe` appears in the Changes list | Do not commit. See [one-time-setup](one-time-setup.md); also tracked in [KNOWN-ISSUES](../KNOWN-ISSUES.md). |