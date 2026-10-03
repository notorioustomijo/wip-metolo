# Open items: waiting on the client

Everything here needs an answer from Dr. Foyet before launch, or before the affected artwork is finalised. Tick an item when it is answered **and** applied to the site.

Where an answer lands: `ArtWork.tsx` means `src/pages/Shop/components/ArtWork.tsx`; `prints.csv` is in the same folder. Search `ArtWork.tsx` for `CONFIRM` to see every spot the developer flagged in the code.

## 1. Needed to go live ([go-live-checklist](runbooks/go-live-checklist.md))

- [ ] **Real print prices**, per artwork, physical and digital, in USD. Lands in `prints.csv`.
- [ ] **Flat shipping amount** (USD) for physical prints, Canada and US. Lands in `.env.stripe` as `SHIPPING_FLAT_USD`.
- [ ] **A Google Drive download link for every digital print**, shared as "Anyone with the link: Viewer". Lands in `prints.csv`.
- [ ] **Email address for enquiries.** Lands in Formspree ([hand-over-formspree](runbooks/hand-over-formspree.md)).
- [ ] **Hosting decision:** Hostinger upload (she already has domain and hosting there; plan type unconfirmed) or Cloudflare Pages (free, deploys automatically). See README → Deploy.
- [ ] **Limited editions:** do they apply only to physical prints? Wording such as "Numbered edition" and "Limited Edition" appears where no edition size exists (the commented-out `included` lists on Ancestral Link and Digital Current). Edition text is only shown when `edition` is set.
- [ ] **Currency of originals.** The site shows `$` only; prints are charged in USD. Say which currency the originals are priced in, so the site can state it.

## 2. Status and price questions

Confirm each; the answer is a one-word change in `ArtWork.tsx` ([mark-original-sold](runbooks/mark-original-sold.md)).

- [ ] **Le Cardinal Rouge:** currently `sold`. The filename says "Sold at Bazaart"; older data had it at $500 and available.
- [ ] **Mr. s'Quick:** currently `sold` (filename says Sold).
- [ ] **She (in Watercolor style):** currently `gifted` ("Offered to my parents"); older data had $150 and available.
- [ ] **Home:** currently `gifted` ("Offered to my parents"); older data flagged it available.
- [ ] **Original price versus print price.** Several low prices look like print prices carried over from old data: the penguin at $50 and the watercolours at $100 (for example Le Coq, Le Berger, Les Pêcheurs, Rouge, Brr, Plasticine, Fruits). Confirm each is the price of the original.
- [ ] **Bintou et Son Chien at $1,000** looks high next to the other watercolours. Confirm.
- [ ] **Ancestral Link original at $1,500** is confirmed. Its exhibition history, process text and "included" list were never supplied; they stay blank unless she sends them.

## 3. Mediums to confirm

- [ ] **Le Coq and Le Berger:** scraperboard, linocut, or knife art? (Currently "Scraperboard".)
- [ ] **Tel Jangal:** watercolour or oil on canvas? (Currently "Watercolor".)
- [ ] **Emotions:** the filename lists pencil, watercolour, dry pastel and colour pencil; the site says "Pastel, colour pencil".
- [ ] **Warning, Suspense, Heel, Trigger, She Bold** (2017 series): no medium shown, or flagged unconfirmed.
- [ ] **Brr:** the filename gives no status; confirm it is available at $100.

## 4. Content fixes

- [ ] **Third-person "Nelly" statements** in Le Coq, Le Berger, Bintou et Son Chien, Les Pêcheurs and Fruits. The rest of the site speaks in the artist's own voice. Rewrite, or confirm that "Nelly" is intended.
- [ ] **Le Cardinal Rouge image filename** carries a credit, "Artist Isabela Abreu". Confirm it is correct and whether it should be shown on the site.
- [ ] **Leftover typos** in the artist statements. Ask her to proof-read the final text.

## 5. Only if the 2018 series is ever sold

- [ ] The 2018 series (11 pieces) is mature content and is shown display-only, with no price and no buttons. **Before selling any of it through Stripe,** check Stripe's prohibited-businesses policy for mature or adult content. Selling it without checking risks the Stripe account being limited or closed.