# radixa.co.uk

The Radixa Technologies website. Built with [Astro](https://astro.build), hosted free
on GitHub Pages, deployed automatically whenever you push to `main`.

**You do not need to run anything on your computer to change this site.** You can edit
any file directly in the GitHub web interface, click "Commit changes", and the live site
updates itself two to three minutes later.

---

## The three things you'll change most

### 1. Your contact email, company number, analytics — `src/config.ts`

Everything global lives in one file. Open `src/config.ts` on GitHub, click the pencil
icon, change the text between the quote marks, commit.

| Setting | What it does |
| --- | --- |
| `email` | The address shown in the footer and on the contact page |
| `formAccessKey` | Connects the enquiry forms to your inbox — see below |
| `gaMeasurementId` | Turns on Google Analytics. Leave empty for no analytics at all |
| `companyNumber` | Shown in the footer once you want it public |
| `linkedin` | Add your LinkedIn URL to show the link in the footer |

### 2. Page wording — `src/pages/`

One file per page. The words are in plain text between the HTML tags:

| File | Page |
| --- | --- |
| `src/pages/index.astro` | Home |
| `src/pages/services/index.astro` | What We Do |
| `src/pages/services/sap-group-reporting.astro` | SAP Group Reporting |
| `src/pages/services/bpc-modernisation-assessment.astro` | BPC Modernisation |
| `src/pages/about.astro` | About |
| `src/pages/contact.astro` | Contact |
| `src/pages/privacy.astro` `cookies.astro` `terms.astro` | Legal pages |

Text near the top of a file between `---` markers is structured content (lists of cards,
table rows). Text lower down is the page itself. Change the words, leave the punctuation
and brackets alone, and it will be fine. If you break something the deploy fails safely —
the live site keeps showing the last working version until you fix it.

### 3. The logo — `public/brand/`

The current logo files were extracted from your brand sheet as PNGs. If your designer
gives you vector `.svg` originals, upload them into `public/brand/` with the same names
and change the file extensions in `src/components/Logo.astro`. SVG stays sharp at any size.

---

## Connecting the enquiry forms to your inbox

The two forms (contact page and BPC assessment page) are wired up but not connected yet.
This takes about a minute and is free:

1. Go to **https://web3forms.com**
2. Enter `info@radixa.co.uk` and click to get an access key
3. Check that inbox — they email you a long access key
4. Open `src/config.ts` on GitHub, paste the key between the quote marks on the
   `formAccessKey` line, and commit

Enquiries then arrive as emails in that inbox. Until the key is in place, the forms show
a polite "please email us directly" message rather than silently failing.

---

## Turning on Google Analytics (optional)

1. Create a free GA4 property at https://analytics.google.com for `radixa.co.uk`
2. Copy the Measurement ID (looks like `G-ABC1234XYZ`)
3. Paste it into `gaMeasurementId` in `src/config.ts` and commit

Analytics only loads **after** a visitor accepts the cookie banner, which is what UK/EU
rules require. Leave the field empty and the site runs with no tracking whatsoever —
the cookie banner still appears because it explains the consent choice, which is honest
either way.

Also worth doing: add the site to **Google Search Console** (search.google.com/search-console)
so you can see what people search for before they land on you. Verify by DNS TXT record.

---

## Adding a page later

1. Copy an existing file in `src/pages/` — `about.astro` is the simplest starting point
2. Rename it; the filename becomes the URL (`insights.astro` → `radixa.co.uk/insights/`)
3. Add it to the `nav` or `footerNav` list in `src/config.ts` so people can find it
4. Commit

The Insights section from the specification is not built yet. When you're ready for it,
Astro's content collections handle articles as Markdown files — that's the natural next step.

---

## Running it locally (only if you want to)

You don't need this, but if you'd like to preview changes before they go live:

```bash
npm install       # once
npm run dev       # then open http://localhost:4321
```

Requires Node 20 or newer.

---

## How deployment works

`.github/workflows/deploy.yml` tells GitHub: on every push to `main`, install
dependencies, build the site, and publish the result to GitHub Pages. You can watch a
deploy happen in the **Actions** tab of the repository. A green tick means it's live.

`public/CNAME` contains `radixa.co.uk` and is what tells GitHub Pages to serve the site
on your own domain rather than a github.io address. Don't delete it.

---

## What's deliberately not here

Per the build specification, this version of the site does **not** include an AI for
Finance offering, and does not name clients, show client logos, or make quantitative
claims. Keep it that way unless you have the rights and the evidence to back a change.

Client names, logos and project details must not be added without written permission.
