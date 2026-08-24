# Go-live runbook — radixa.co.uk

Written for someone who has never deployed a website. Follow it top to bottom.
Total hands-on time is about 30 minutes; then you wait for DNS, which is out of
everyone's hands.

Nothing here costs money. GitHub Pages hosting is free, HTTPS is free, and the
form service has a free tier that is more than enough.

---

## Before you start

You need:

- Your GitHub account login
- Your Squarespace account login (this is where radixa.co.uk is registered)
- Access to the `info@radixa.co.uk` inbox

---

## Step 1 — Create the repository (3 minutes)

1. Go to **https://github.com/new**
2. **Repository name:** `radixa-website`
3. **Description:** `Radixa Technologies website — radixa.co.uk`
4. Select **Private**. (Public also works and is still free, but private is the
   sensible default for a business site.)
5. Do **not** tick "Add a README", "Add .gitignore" or "Choose a licence" —
   the project already has these, and ticking them creates a conflict.
6. Click **Create repository**

Leave that page open. It shows you a URL like
`https://github.com/YOUR-USERNAME/radixa-website.git` — you need it next.

---

## Step 2 — Push the site to GitHub (5 minutes)

The website files are in the `radixa-website` folder I have delivered to you.
Open a terminal (**Terminal** on Mac, **PowerShell** on Windows), then run these
commands one at a time.

First, move into the folder — drag the folder onto the terminal window after
typing `cd ` and it will fill in the path for you:

```bash
cd /path/to/radixa-website
```

Then connect it to the repository you just created and push. **Replace
`YOUR-USERNAME` with your actual GitHub username:**

```bash
git remote add origin https://github.com/YOUR-USERNAME/radixa-website.git
git push -u origin main
```

GitHub will ask you to sign in. If it asks for a password, it wants a **Personal
Access Token**, not your account password — a browser window usually opens to
handle this automatically. If it doesn't, create a token at
**https://github.com/settings/tokens** (Generate new token → classic → tick
`repo` → generate) and paste that as the password.

Refresh your repository page. You should see all the files.

> **Git not installed?** Mac: run `xcode-select --install`.
> Windows: install from **https://git-scm.com/download/win**, accept all defaults.

---

## Step 3 — Turn on GitHub Pages (2 minutes)

1. In your repository, click **Settings** (top right of the repo, not your account settings)
2. In the left sidebar, click **Pages**
3. Under **Source**, change the dropdown from "Deploy from a branch" to
   **GitHub Actions**

That's the only change needed. There is no Save button — it applies immediately.

Now click the **Actions** tab at the top of the repository. You should see a
workflow called "Build and deploy website" running. Wait for the green tick
(about two minutes). If it's not running, click "Build and deploy website" in
the left sidebar, then **Run workflow**.

When it's green, your site is live at
`https://YOUR-USERNAME.github.io/radixa-website/`. It will look slightly broken
at that address because the site is built for radixa.co.uk — that's expected and
fixes itself in the next step.

---

## Step 4 — Point the domain at GitHub (10 minutes + waiting)

### 4a. Add the DNS records in Squarespace

1. Go to **https://account.squarespace.com/domains**
2. Click **radixa.co.uk**
3. Click **DNS** in the side panel

You are now looking at your DNS records. **Take a screenshot of this page before
changing anything** — that's your undo button.

**Delete or edit** any existing `A` records for the root domain (Host `@`) that
point at Squarespace, and any `CNAME` record for `www` pointing at Squarespace.
Leave every `MX` record and every `TXT` record exactly as they are — those are
your email, and deleting them will break `info@radixa.co.uk`.

Now add these **four A records**. Host is `@` (some screens show this as blank
or as the domain name itself):

| Type | Host | Data |
| --- | --- | --- |
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |

And these **four AAAA records** (IPv6 — same host, `@`):

| Type | Host | Data |
| --- | --- | --- |
| AAAA | @ | `2606:50c0:8000::153` |
| AAAA | @ | `2606:50c0:8001::153` |
| AAAA | @ | `2606:50c0:8002::153` |
| AAAA | @ | `2606:50c0:8003::153` |

And **one CNAME** so `www.radixa.co.uk` also works. Replace `YOUR-USERNAME` with
your GitHub username — note there is **no repository name** in this value, and
it ends with a full stop in some interfaces:

| Type | Host | Data |
| --- | --- | --- |
| CNAME | www | `YOUR-USERNAME.github.io` |

Save.

### 4b. Tell GitHub about the domain

1. Back in your repository: **Settings → Pages**
2. Under **Custom domain**, type `radixa.co.uk` and click **Save**

GitHub now checks your DNS. This takes anywhere from ten minutes to a few hours —
occasionally up to 48. You'll see "DNS check in progress", then a green tick.

### 4c. Turn on HTTPS

Once the DNS check passes, an **Enforce HTTPS** checkbox becomes available on the
same page. **Tick it.** The certificate is issued automatically and free.

If the checkbox is greyed out, the certificate isn't ready yet. Wait an hour and
come back. Don't remove the custom domain and re-add it repeatedly — that slows
certificate issuance down.

**Do not skip this step.** Your build specification requires HTTPS, and browsers
will warn visitors without it.

---

## Step 5 — Connect the enquiry forms (2 minutes)

The forms are built and validated but not yet delivering email. Until you do
this, they show visitors a message asking them to email you directly, so nothing
is silently lost.

1. Go to **https://web3forms.com**
2. Enter `info@radixa.co.uk` and request an access key
3. Check that inbox — they send you a long key
4. In your repository, open **`src/config.ts`**, click the pencil icon
5. Find the line `formAccessKey: '',` and paste the key between the quote marks:
   `formAccessKey: 'abc123-your-key-here',`
6. Click **Commit changes**

Two minutes later the site rebuilds itself. **Then go to radixa.co.uk/contact/
and send yourself a real test enquiry.** Confirm it arrives. Do the same on the
BPC page. This is the single most important test on the site — it is your lead
pipeline.

---

## Step 6 — Analytics and Search Console (optional, 10 minutes)

**Google Analytics:** create a free GA4 property at
**https://analytics.google.com** for radixa.co.uk, copy the Measurement ID
(`G-XXXXXXXXXX`), and paste it into `gaMeasurementId` in `src/config.ts`.
Analytics only loads after a visitor accepts the cookie banner — that's what UK
law requires and it's already handled.

**Google Search Console:** add radixa.co.uk at
**https://search.google.com/search-console**, verify by DNS TXT record (added in
Squarespace the same way as above), then submit the sitemap:
`https://radixa.co.uk/sitemap-index.xml`. This is how you find out what people
search for before they land on you — worth doing on day one so the data starts
accumulating.

---

## Step 7 — Final checks before you tell anyone

Work through this on a phone as well as a laptop:

- [ ] `https://radixa.co.uk` loads with a padlock in the address bar
- [ ] `https://www.radixa.co.uk` redirects to it
- [ ] `http://radixa.co.uk` (no s) redirects to https
- [ ] Every navigation link works, on desktop and on mobile
- [ ] The contact form sends a real enquiry that lands in `info@radixa.co.uk`
- [ ] The BPC assessment form does the same
- [ ] The cookie banner appears, and both buttons work
- [ ] The logo, favicon and footer all look right
- [ ] Paste the URL into a LinkedIn message box — check the preview card looks correct

---

## Making changes after launch

You never need a terminal again. Edit any file directly on GitHub — click the
file, click the pencil, change the words, click **Commit changes**. The site
rebuilds and republishes itself in two to three minutes.

`README.md` in the repository explains which file controls what.

If a change ever breaks the build, the **Actions** tab shows a red cross and the
**live site keeps serving the last working version**. Nothing you type can take
the site down.

---

## Still outstanding

These need your decisions or a professional review — they are not blockers for
launch, but don't leave them indefinitely:

1. **Legal review.** The privacy, cookie and terms pages are substantive drafts
   written against what the site actually does, but I am not a lawyer. Have them
   reviewed before you're doing serious volume.
2. **Company registration details.** `companyNumber` and `registeredAddress` in
   `src/config.ts` are empty. Fill them in once you're happy to publish them.
3. **Vector logo.** The current logo files were extracted from your brand sheet
   as PNGs and look good, but ask your designer for the `.svg` originals — they
   stay perfectly sharp on every screen.
4. **LinkedIn URL.** Add it to `src/config.ts` to show the footer link.
5. **The remaining service pages.** Financial Consolidation, Planning &
   Analytics, SAP Analytics Cloud, Finance Transformation, Finance Data &
   Reporting, Solution Architecture, Programme Assurance and Industries are
   specified but not built. The current site covers them as capability
   descriptions on `/services/`.
6. **Insights.** The specification recommends three substantial articles at
   launch and five to eight within the first two months. This is the single
   biggest thing you can do for search visibility on "what replaces SAP BPC" —
   which is the query your best-fit buyers are actually typing.
