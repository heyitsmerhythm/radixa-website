/**
 * Radixa Technologies — central site configuration.
 *
 * NON-TECHNICAL EDITING GUIDE
 * ---------------------------
 * Almost everything you'll want to change day-to-day lives in this one file:
 * the contact email, the company registration details, the navigation menu and
 * the LinkedIn URL. Change a value between the quote marks, save, and commit.
 * The site rebuilds and republishes automatically.
 */

export const site = {
  /** Live domain. Used to build absolute URLs for SEO and social sharing. */
  url: 'https://radixa.co.uk',

  name: 'Radixa Technologies',
  legalName: 'Radixa Technologies Ltd',
  tagline: 'Rooted in Better Decisions.',
  descriptor: 'Enterprise Finance Transformation',

  /** Where enquiry emails are delivered. */
  email: 'info@radixa.co.uk',

  /** Leave as empty string to hide the LinkedIn link in the footer. */
  linkedin: '',

  /**
   * Web3Forms access key — free form-to-email service, no server required.
   * Get yours in 30 seconds at https://web3forms.com (enter the email above,
   * they email you a key). Paste it here. Until then, forms show a friendly
   * "not yet configured" message rather than silently failing.
   */
  formAccessKey: '4ddcd9d5-0981-4043-a869-298baf9adc9b',

  /**
   * Google Analytics 4 measurement ID, e.g. 'G-XXXXXXXXXX'.
   * Leave empty to run the site with no analytics at all.
   * Analytics only loads AFTER the visitor accepts cookies.
   */
  gaMeasurementId: '',

  /**
   * Companies House number and registered office.
   * Leave both empty until the values have been copied from the current
   * Companies House record. The footer and privacy notice print them
   * automatically the moment they are filled in, and stay silent until then.
   */
  companyNumber: '',
  registeredAddress: '',
};

export const defaultMeta = {
  title: 'Radixa Technologies | Enterprise Finance Transformation',
  description:
    'Specialist consulting for financial consolidation, SAP S/4HANA Group Reporting, SAP Analytics Cloud, BPC modernisation, finance reporting architecture and programme assurance.',
};

/**
 * Primary navigation.
 *
 * "What We Do" opens a grouped panel — the groups are the service families.
 * Adding a page means adding one entry to the right group here; the header,
 * the mobile menu and the breadcrumbs all follow.
 */
export const nav = [
  {
    label: 'What We Do',
    href: '/services/',
    groups: [
      {
        title: 'Financial Consolidation',
        links: [
          {
            label: 'SAP S/4HANA Group Reporting',
            href: '/services/sap-group-reporting/',
            blurb: 'Strategy, design, implementation, migration and assurance.',
          },
          {
            label: 'Consolidation Design & Architecture',
            href: '/services/consolidation-design-architecture/',
            blurb: 'Design the model before configuring the system.',
          },
          {
            label: 'Group Reporting Health Check',
            href: '/services/group-reporting-health-check/',
            blurb: 'Time-boxed independent review of a live solution.',
          },
        ],
      },
      {
        title: 'Planning & Reporting',
        links: [
          {
            label: 'SAP Analytics Cloud',
            href: '/services/sap-analytics-cloud/',
            blurb: 'Planning and reporting design, integration and optimisation.',
          },
          {
            label: 'SAC Planning Assessment',
            href: '/services/sac-planning-assessment/',
            blurb: 'Decide whether SAC fits, and what the target should be.',
          },
          {
            label: 'SAC Health Check',
            href: '/services/sac-health-check/',
            blurb: 'For a model finance has started working around.',
          },
        ],
      },
      {
        title: 'Modernisation',
        links: [
          {
            label: 'BPC Modernisation & Platform Assessment',
            href: '/services/bpc-modernisation-assessment/',
            blurb: 'Independent assessment across SAP and non-SAP options.',
          },
        ],
      },
      {
        title: 'Architecture & Assurance',
        links: [
          {
            label: 'Finance Data & Reporting Architecture',
            href: '/services/finance-data-reporting-architecture/',
            blurb: 'Decide where data, logic and reporting belong.',
          },
          {
            label: 'Solution Architecture & Design Authority',
            href: '/services/solution-architecture-design-authority/',
            blurb: 'Senior architecture ownership and challenge across a programme.',
          },
          {
            label: 'Programme Assurance & Optimisation',
            href: '/services/programme-assurance-optimisation/',
            blurb: 'Independent assurance at the gates that matter.',
          },
        ],
      },
      {
        title: 'Last Mile Reporting',
        links: [
          {
            label: 'Last Mile Reporting',
            href: '/services/last-mile-reporting/',
            blurb: 'From consolidated result to filed, tagged, auditable report.',
          },
        ],
      },
    ],
    /** Shown at the foot of the dropdown panel. */
    overview: { label: 'See all capabilities', href: '/services/' },
  },
  { label: 'Training', href: '/training/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

/** Footer link columns (§13.1). */
export const footerNav = [
  {
    title: 'Consolidation & Planning',
    links: [
      { label: 'All capabilities', href: '/services/' },
      { label: 'SAP Group Reporting', href: '/services/sap-group-reporting/' },
      { label: 'Consolidation Design & Architecture', href: '/services/consolidation-design-architecture/' },
      { label: 'Group Reporting Health Check', href: '/services/group-reporting-health-check/' },
      { label: 'SAP Analytics Cloud', href: '/services/sap-analytics-cloud/' },
      { label: 'SAC Planning Assessment', href: '/services/sac-planning-assessment/' },
      { label: 'SAC Health Check', href: '/services/sac-health-check/' },
    ],
  },
  {
    title: 'Architecture & Modernisation',
    links: [
      { label: 'BPC Modernisation', href: '/services/bpc-modernisation-assessment/' },
      { label: 'Finance Data & Reporting Architecture', href: '/services/finance-data-reporting-architecture/' },
      { label: 'Solution Architecture & Design Authority', href: '/services/solution-architecture-design-authority/' },
      { label: 'Programme Assurance & Optimisation', href: '/services/programme-assurance-optimisation/' },
      { label: 'Last Mile Reporting', href: '/services/last-mile-reporting/' },
    ],
  },
  {
    title: 'Training',
    links: [
      { label: 'Training overview', href: '/training/' },
      { label: 'Tailored client training', href: '/training/tailored-client-training/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
      { label: 'Privacy notice', href: '/privacy/' },
      { label: 'Cookie policy', href: '/cookies/' },
      { label: 'Terms of use', href: '/terms/' },
    ],
  },
];

/**
 * Options in the "What do you need help with?" field on the contact form.
 *
 * Service pages link to /contact/?capability=<exact text below>, which
 * pre-selects the right option so a visitor never has to re-choose the
 * service they were just reading about (§12.2).
 */
export const serviceInterests = [
  'SAP Group Reporting',
  'Consolidation Design & Architecture',
  'Group Reporting Health Check',
  'SAP Analytics Cloud',
  'SAC Planning Assessment',
  'SAC Health Check',
  'BPC Modernisation',
  'Finance Data & Reporting Architecture',
  'Solution Architecture & Design Authority',
  'Programme Assurance & Optimisation',
  'Last Mile & Disclosure Reporting',
  'Training',
  'Other',
];

/** Options in the Training enquiry form (§12.4). */
export const trainingAreas = [
  'SAP S/4HANA Group Reporting',
  'SAP Analytics Cloud',
  'Tailored client training',
  'Other / not sure yet',
];
