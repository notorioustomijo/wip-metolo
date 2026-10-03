**Your site's files are on GitHub: https://github.com/notorioustomijo/wip-metolo** (private: sign in with the GitHub account that has been given access).

# Client guide

One page: what you can change yourself, and what needs the website manager. Every task below has step-by-step instructions in the `docs/runbooks/` folder of that repository.

## What you can do yourself

| Task | How | Instructions |
|---|---|---|
| **Answer an enquiry** | Enquiries arrive by email. Reply to the sender. If they want the original, create a one-off Payment Link in your Stripe dashboard (Payment links → Create) for the agreed price and email it to them. | n/a |
| **Switch off a one-off link after a sale** | Stripe dashboard → Payment links → the link → deactivate, so it can't be paid twice. | [mark-original-sold](runbooks/mark-original-sold.md) step 1 |
| **Show an original as sold or private** | On GitHub, open `src/pages/Shop/components/ArtWork.tsx`, click the pencil icon, change one word, save. If the site is on Cloudflare Pages it rebuilds by itself. On Hostinger the manager must rebuild and upload (see the next table). | [mark-original-sold](runbooks/mark-original-sold.md) |
| **Fix a typo in an artwork's text** | Same file, same method: change the words inside the backticks only, and leave the backticks and commas alone. If the site stops updating, undo your change (GitHub: the commit → Revert). | n/a |
| **See what is waiting on you** | Read the checklist. | [OPEN-ITEMS](OPEN-ITEMS.md) |

## What needs the website manager

| Task | Why | Instructions |
|---|---|---|
| **Change, add or remove a print price** | The prices live in a file, but Stripe links must be created by a script that runs on a computer with Node and a Stripe key. Editing the file on GitHub alone changes nothing on the site. | [change-print-price](runbooks/change-print-price.md) |
| **Add a new artwork** | Needs an image file and an entry in the code, then a build and a deploy. | [add-new-artwork](runbooks/add-new-artwork.md) |
| **Publish changes on Hostinger** | The site is built on a computer and the files uploaded by hand. | README → Deploy |
| **Stripe key** | Created and replaced by whoever runs the script. | [rotate-stripe-key](runbooks/rotate-stripe-key.md) |
| **Enquiry form email or domain lock** | Set in the Formspree account that owns the form. | [hand-over-formspree](runbooks/hand-over-formspree.md) |
| **Launch** | A one-time checklist. | [go-live-checklist](runbooks/go-live-checklist.md) |

If you have done [one-time-setup](runbooks/one-time-setup.md) on your own computer, you can run the print-price and new-artwork runbooks yourself. They are written for non-developers.

## Things never to do

- Never share your Stripe keys, in email, chat or screenshots.
- Never edit the `.json` files in the shop folder by hand.
- Never open `prints.csv` in Excel or Google Sheets. Use a plain text editor or GitHub's editor.
- Never change an artwork's `id`. Print links depend on it.

## Not sure?

Stop and ask the website manager before changing anything that is not on the first table. Every change on GitHub can be undone from the commit history.