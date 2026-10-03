# One-time setup (before running the print-links script)

**Who:** the client or the website manager. **Time:** about 20–30 minutes. **Do this once per computer.**

You need this only to run the Stripe script (price changes, go-live). Editing artwork text or statuses in `ArtWork.tsx` needs steps 1–3 but not 4.

## Checklist

### 1. Install Node.js

- [ ] Go to <https://nodejs.org> and install the current **LTS** version. It must be **version 22.12 or newer** (24 also works).
- [ ] Open a terminal:
  - **Windows:** Start menu → type `PowerShell` → open it.
  - **Mac:** Cmd+Space → type `Terminal` → open it.
- [ ] Type `node --version` and press Enter. You should see `v22.12.0` or higher.

If it says "command not found", close the terminal, open a new one and try again.

### 2. Get the code

Easiest route for non-developers is GitHub Desktop.

- [ ] Install GitHub Desktop from <https://desktop.github.com> and sign in with the GitHub account that has access to the repo.
- [ ] File → Clone repository → pick the site's repo → choose a folder → Clone.

(Developers: `git clone <repo-url>` works just as well.)

### 3. Install the project's packages

- [ ] In GitHub Desktop: Repository menu → **Open in Terminal** (Mac) or **Open in Command Prompt / PowerShell** (Windows). This opens a terminal already inside the repo folder.
- [ ] Run:

  ```bash
  npm install
  ```

- [ ] Wait a minute or two. Yellow warnings are fine. Red errors are not; see "If something fails" below.

### 4. Create `.env.stripe`

The Stripe key goes here. Creating the key itself is covered in `rotate-stripe-key.md`. Do that first if you do not have one.

- [ ] In the repo's top-level folder (the one containing `package.json`), create a plain-text file named exactly `.env.stripe`.
- [ ] Put this inside, replacing the values:

  ```
  STRIPE_SECRET_KEY=rk_test_paste_your_key_here
  SHIPPING_FLAT_USD=15
  ```

  No spaces around `=`. No quotes needed.

**File-naming traps**

- **Windows Notepad** quietly adds `.txt`, giving `.env.stripe.txt`. In Save As, set "Save as type" to **All files**. Turn on File Explorer → View → Show → File name extensions to check.
- **Mac TextEdit:** Format → **Make Plain Text** first. Files starting with a dot are hidden in Finder; press Cmd+Shift+. to show them.
- Use a plain text editor (Notepad, TextEdit, VS Code). Not Word.

### 5. Check it works

- [ ] In the same terminal, run:

  ```bash
  node --env-file=.env.stripe scripts/create-print-links.mjs --dry-run
  ```

- [ ] You should see `Mode: DRY RUN (no Stripe calls)`, the path to `prints.csv`, then a line starting `Done.`

A dry run sends nothing to Stripe and does not prove your key works. It proves Node, the file and the CSV are readable.

- [ ] In GitHub Desktop, check the Changes list. `.env.stripe` must **not** appear there. If it does, stop and do not commit anything: the file is not being ignored. See `docs/KNOWN-ISSUES.md`.

## You are done when

The dry run prints `Done.` with no red `✖` line, and `.env.stripe` does not show up in GitHub Desktop.

## If something fails

| What you see | Cause and fix |
|---|---|
| `node: command not found` | Node not installed, or the terminal was open during install. Close the terminal, open a new one. |
| `Cannot find .../prints.csv. Check DATA_DIR.` | The terminal is not in the repo's top-level folder. Reopen it via GitHub Desktop (step 3). |
| `Set SHIPPING_FLAT_USD (e.g. 15)` | `.env.stripe` is missing, misnamed (`.txt` on the end?) or the line is missing. |
| `STRIPE_SECRET_KEY is not set` | Same as above. Only appears when you run without `--dry-run`. |
| `npm install` ends with red errors | Node is too old (`node --version` below 22.12) or no internet. Fix and rerun. |