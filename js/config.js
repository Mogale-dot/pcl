/* =========================================================
   PCL — global config
   Single source of truth for URLs, nav, feature flags.
   ========================================================= */

export const CONFIG = {
  APP_NAME: 'PCL',
  APP_FULL_NAME: 'Polokwane Champions League',
  VERSION: '1.0.0-mvp1',

  API_BASE_URL: 'http://localhost:5000/api',

  FEATURES: {
    auth: false,
    voting: false,
    ticketing: false,
    fanRewards: false,
  },
};


/* ---------- Main navigation ----------
   `icon` matches a key in the ICONS map (see index.html).
----------------------------------------- */
export const NAV_LINKS = [
  { icon: 'home',        label: 'Home',        href: '/index.html' },
 
  { icon: 'calendar',    label: 'Fixtures',    href: '/public/fixtures.html' },
  { icon: 'shield',      label: 'Teams',       href: '/public/teams.html' },
  { icon: 'star',        label: 'Membership',  href: '/public/membership.html' },
  
  { icon: 'info',        label: 'About',       href: '/public/about.html' },
];