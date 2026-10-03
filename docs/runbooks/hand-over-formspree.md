# Hand the enquiry form over to the client

The enquiry and make-an-offer forms post to a Formspree form. That form sits in the developer's Formspree account, and the client does not create her own. This runbook makes enquiries land in her inbox, locks the form to her domain, and covers moving the form to an account of her own later.

| | |
|---|---|
| **Who can do it** | Whoever owns the Formspree account the form lives in (currently the developer). Needs her email address and the final site domain. |
| **Time** | 10-15 minutes. |

Related: [go-live-checklist](go-live-checklist.md) (step 6), README (env var table).

## Before you start

- [ ] The client's email address, confirmed by her.
- [ ] The final production domain (e.g. `example.com`), and whether `www.` is used.
- [ ] The Formspree login for the account that owns the form.
- [ ] You know which form: its address is the value of `VITE_FORMSPREE_ENDPOINT` (looks like `https://formspree.io/f/xxxxxxxx`).

## A. Send enquiries to the client

Formspree's menu labels change; match by meaning.

1. [ ] Sign in to Formspree and open the form that matches `VITE_FORMSPREE_ENDPOINT`.
2. [ ] Open the form's **settings** and find where notification emails are set (email address / recipients).
3. [ ] **Add the client's email address.** If Formspree sends her a confirmation email, she must click it before notifications start.
4. [ ] Decide whether to keep the developer's email as a second recipient during the first weeks. Remove it when you are confident.
5. [ ] Submit one test enquiry from the site (see "You're done when").

## B. Restrict the form to the site's domain

1. [ ] In the same form's settings, find **Restrict to Domain**.
2. [ ] Enter the production domain only after it is final. If the form is restricted before the domain is final, real enquiries fail.
3. [ ] If the setting is missing, it may not be on the current Formspree plan. Note it in [KNOWN-ISSUES](../KNOWN-ISSUES.md) and continue; the honeypot in the form still blocks simple bots.

Note: the form address is public in the built site (it must be, for the form to work). Restrict to Domain limits misuse; it is not secrecy.

## C. Move the form to the client's own Formspree account (optional, later)

Do this if the developer's account will not be kept, or the client wants control.

1. [ ] The client (or whoever manages for her) creates a Formspree account and a new form. Copy the new form's address.
2. [ ] Set `VITE_FORMSPREE_ENDPOINT` to the new address: in `.env` for a local build (Hostinger path), or in the host's build settings (Cloudflare Pages path).
3. [ ] **Rebuild and redeploy.** The value is baked in at build time; changing it without a rebuild does nothing.
4. [ ] Set the new form's notification email and Restrict to Domain (sections A and B).
5. [ ] Submit one test enquiry. Then close or delete the old form.

## You're done when

- [ ] A test enquiry submitted from the **live** site arrives in the client's inbox, with the artwork name in the subject (`Enquiry: <title>` or `Offer: <title>`).
- [ ] Restrict to Domain is on (or noted as unavailable).
- [ ] The client knows enquiries come from Formspree and to reply to the sender's own email address.

## If it goes wrong

| What you see | What it means / what to do |
|---|---|
| The form on the site says "Something went wrong" | `VITE_FORMSPREE_ENDPOINT` was not set when the site was built, or Restrict to Domain does not match the live domain (check `www.` and `https`). Fix, then rebuild and redeploy. |
| Submissions succeed but no email arrives | The client has not confirmed Formspree's email, it landed in spam, or the address is mistyped. Check the form's submissions list in Formspree: if the test is there, delivery is the problem, not the site. |
| Test works locally but not live | Restricted to a different domain, or the live build used a different or missing endpoint. |
| Submissions are blocked on the free plan | The plan's monthly submission limit was reached. Check usage in Formspree; upgrade or wait for the reset. |
| Spam is arriving | Spam filtering settings in Formspree are on the form's settings; the honeypot already blocks basic bots. |