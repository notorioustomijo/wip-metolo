# Mark an original as sold (or gifted, or not for sale)

| | |
|---|---|
| **Who can do it** | The client or the website manager. It is a one-word edit in one file, doable in the GitHub web editor (no local setup) if the site rebuilds automatically (Cloudflare Pages path). On the Hostinger path the site must then be rebuilt and uploaded, which needs the manager. |
| **Time** | 5-10 minutes, plus the deploy. |
| **Applies to** | Originals only. Prints are never marked sold: they stay buyable. |

The site has no live sold status. A sale is recorded by editing the artwork's `original` status in `src/pages/Shop/components/ArtWork.tsx` and redeploying.

## Before you start

- [ ] The sale is confirmed: payment has arrived in Stripe for the one-off Payment Link.
- [ ] You know the artwork's title or `id` (the `id` is the last part of its page address: `/shop/ancestral-link` → `ancestral-link`).

## What each status does on the site

| Write | Site shows |
|---|---|
| `sold` | SOLD badge, no price, no Enquire button |
| `gifted` | PRIVATE COLLECTION badge, no price, no Enquire button |
| `{ status: 'not-for-sale' }` | "Not for sale", no Enquire button |
| `avail(1500)` | Price shown, Enquire button (back to available) |

## Steps

1. [ ] **Deactivate the one-off Payment Link** you sent the buyer (Stripe dashboard → Payment links → find it → deactivate), so it cannot be paid twice. Stripe's menu labels may differ slightly.
2. [ ] **Open `src/pages/Shop/components/ArtWork.tsx`**. On GitHub: open the file, click the pencil (Edit) icon. Use the browser's find (Ctrl+F / Cmd+F) to search for the artwork's `id: "..."` line.
3. [ ] **Find its `original:` line**, a few lines below. For example:
   ```tsx
   original: avail(1500),
   ```
4. [ ] **Replace it** with the new status (match the commas exactly):
   ```tsx
   original: sold,
   ```
   Change nothing else on the entry.
5. [ ] **Save / commit** with a clear message, e.g. `Mark ancestral-link sold`. On GitHub, commit directly to the main branch.
6. [ ] **Deploy.** Cloudflare Pages path: it rebuilds on its own, wait a few minutes. Hostinger path: rebuild locally and upload `dist/` as in README → Deploy.

## You're done when

- [ ] The artwork's page shows the new badge and no price.
- [ ] The Enquire button is gone on its page and its card in the shop grid.
- [ ] Its print buttons (if any) still work.

## If it goes wrong

| What you see | What it means / what to do |
|---|---|
| The deploy fails (red cross on the commit, or an error in the host's build log) | A typo broke the build. The old site stays up. Open the commit, undo it (GitHub: the commit → Revert), and redo step 4 carefully. |
| Nothing changed on the live site | The deploy has not finished, or on Hostinger `dist/` was not re-uploaded. Hard-refresh the page. |
| The entry shows no badge, but the Enquire button is gone | Status is `unlisted` or `not-for-sale`, which have no badge. Use `sold` or `gifted` if you want a badge. |
| You edited the wrong artwork | Revert the commit (GitHub: the commit → Revert) and repeat for the right one. |
| The buyer reports the old link still works | Do step 1: deactivate the Payment Link in Stripe. |