# Add a new artwork

| | |
|---|---|
| **Who can do it** | Whoever can edit `ArtWork.tsx` and run the site locally (the website manager). Not a no-code task: it edits a TypeScript file. |
| **Time** | 20-30 minutes, plus the deploy. If the artwork also has a print: add 10 minutes ([change-print-price](change-print-price.md)). |

All artwork data lives in one file: `src/pages/Shop/components/ArtWork.tsx`. Year tabs and Featured are derived from it, so nothing else needs editing.

## Before you start

- [ ] The image, as a `.webp` like the existing ones.
- [ ] Title, year, medium, orientation (portrait or landscape).
- [ ] The artist statement text, as paragraphs.
- [ ] Whether the original is for sale, and at what price (USD), or sold, gifted, make-an-offer, not for sale, or display-only.
- [ ] Whether a print is sold, and its price(s) (see step 8).
- [ ] The repo is on your computer, `npm install` has been run, Node 22.12+.

## Steps

1. [ ] **Name the image file safely.** Lowercase letters, digits and hyphens only, e.g. `river-dusk.webp`. No spaces, apostrophes, brackets, accents or symbols (the existing filenames have these and are a known risk: [KNOWN-ISSUES](../KNOWN-ISSUES.md)). Put it in `src/pages/Shop/components/artworks/`.
2. [ ] **Add the import** at the top of `ArtWork.tsx`, after the last `import artNN` line. Use the next unused number (the highest at the time of writing is `art67`):
   ```tsx
   import art68 from './artworks/river-dusk.webp';
   ```
3. [ ] **Choose the `id`.** Lowercase, hyphens, unique across the file, e.g. `"river-dusk"`. It becomes the page address `/shop/river-dusk`. **Never change it later**: print links are tied to it.
4. [ ] **Add the entry** to `baseList`, under the comment block for its year (`/* ----- 2017 ----- */`). For a new year, add a new comment block above the newest one. Copy this block and fill it in:
   ```tsx
       {
           id: "river-dusk",
           img: art68,
           title: "River Dusk",
           yrCreated: 2026,
           orientation: "landscape",
           medium: "Oil on canvas",
           original: avail(1200),
           artistStatement: [
               `First paragraph.`,
               `Second paragraph.`,
           ],
       },
   ```
5. [ ] **Set `original`** to one of:

   | You want | Write |
   |---|---|
   | For sale, price shown | `avail(1200)` |
   | For sale, price on request | `{ status: 'available' }` |
   | Make an offer | `{ status: 'make-offer' }` |
   | Sold | `sold` |
   | Gifted / private collection | `gifted` |
   | Not for sale | `{ status: 'not-for-sale' }` |
   | Display only, nothing purchasable | `unlisted` |

6. [ ] **Statement text rules.** Each paragraph is one line of text inside backticks, followed by a comma. Do not use a backtick or `${` inside the text. Apostrophes and double quotes are fine.
7. [ ] **Optional fields**, only when real: `dedication`, `edition` (only when an edition size genuinely exists), `featured: true` (the home page currently features one piece; check how Featured looks before adding a second), `included`, `exhibitHx`.
8. [ ] **If a print is sold:** add a row to `src/pages/Shop/components/prints.csv` with the identical id and the title, prices blank at first:
   ```
   river-dusk,,,,River Dusk
   ```
   Then set the price(s) and run the script as in [change-print-price](change-print-price.md).
9. [ ] **Check it builds:** `npm run build`. It must finish with no errors (it type-checks first).
10. [ ] **Check it looks right:** `npm run dev`, open `/shop` and `/shop/river-dusk`. Look at the card, the detail page, the buttons, and the year tab.
11. [ ] **Commit** `ArtWork.tsx`, the image, and (if changed) `prints.csv` and `print-links.json`. **Deploy** per README → Deploy.

## You're done when

- [ ] The live site shows the artwork in its year tab with the right image, status and price.
- [ ] The buttons match the status (Enquire for available, none for sold or display-only).
- [ ] If it has a print: the Buy button opens Stripe at the right price.

## If it goes wrong

| What you see | What it means / what to do |
|---|---|
| `npm run build` fails with a type error naming `ArtWork.tsx` | A missing comma, a missing required field (`id`, `img`, `title`, `yrCreated`, `orientation`, `artistStatement`), or a wrong status word. Fix the line the error names. |
| Build fails with "Could not resolve" an image | The import path or filename does not match the file exactly (case counts). |
| Page shows "Artwork not found" | The `id` in the address does not match the entry's `id`. |
| Image is missing only on the live site | The filename has special characters or a case mismatch that the host handles differently. Rename to the safe pattern in step 1 and update the import. |
| The statement shows odd characters or cuts off | A stray backtick or `${` in the text. Remove it. |
| Print button missing | The `id` in `prints.csv` does not match, or the price cell is blank. A mistyped id is silently ignored. |
| Two artworks share a page | Duplicate `id`. Make each unique. |