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

  /** Companies House number — publish once confirmed for public use. */
  companyNumber: '',
  registeredAddress: '',
};

export const defaultMeta = {
  title: 'Radixa Technologies | Enterprise Finance Transformation',
  description:
    'Specialist consulting for financial consolidation, SAP S/4HANA Group Reporting, SAP Analytics Cloud, BPC modernisation and finance reporting architecture.',
};

/** Primary navigation. */
export const nav = [
  {
    label: 'What We Do',
    href: '/services/',
    children: [
      {
        label: 'SAP S/4HANA Group Reporting',
        href: '/services/sap-group-reporting/',
        blurb: 'Strategy, design, implementation, migration and assurance.',
      },
      {
        label: 'BPC Modernisation & Platform Assessment',
        href: '/services/bpc-modernisation-assessment/',
        blurb: 'Independent assessment across SAP and non-SAP options.',
      },
      {
        label: 'SAP Analytics Cloud',
        href: '/services/sap-analytics-cloud/',
        blurb: 'Planning and reporting design, integration and optimisation.',
      },
      {
        label: 'Last Mile Reporting',
        href: '/services/last-mile-reporting/',
        blurb: 'Disclosure management, Workiva and Group Reporting integration.',
      },
      {
        label: 'All capabilities',
        href: '/services/',
        blurb: 'Consolidation, planning, analytics, data and advisory.',
      },
    ],
  },
  { label: 'Training', href: '/training/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

/** Footer link columns (§17). */
export const footerNav = [
  {
    title: 'What We Do',
    links: [
      { label: 'All capabilities', href: '/services/' },
      { label: 'SAP Group Reporting', href: '/services/sap-group-reporting/' },
      { label: 'BPC Modernisation', href: '/services/bpc-modernisation-assessment/' },
      { label: 'SAP Analytics Cloud', href: '/services/sap-analytics-cloud/' },
      { label: 'Last Mile Reporting', href: '/services/last-mile-reporting/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Training', href: '/training/' },
      { label: 'About', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy notice', href: '/privacy/' },
      { label: 'Cookie policy', href: '/cookies/' },
      { label: 'Terms of use', href: '/terms/' },
    ],
  },
];

/** Options shared between the contact form and the BPC assessment form. */
export const serviceInterests = [
  'SAP Group Reporting',
  'BPC Modernisation',
  'SAP Analytics Cloud',
  'Planning & Analytics',
  'Financial Consolidation',
  'Last Mile & Disclosure Reporting',
  'Finance Data & Reporting',
  'Solution Architecture',
  'Programme Assurance',
  'Training',
  'Other',
];
