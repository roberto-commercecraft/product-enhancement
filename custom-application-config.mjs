import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'Product Enhancement',
  description:
    "This app leverages artificial intelligence to enrich and optimize product descriptions, ensuring they align seamlessly with the brand's tone and voice. It provides merchants with intuitive tools for managing and refining product content efficiently, improving content consistency and quality across the catalog. Key features include AI-driven suggestions, tone customization, and streamlined workflows to enhance product storytelling while saving time and resources.",
  entryPointUriPath,
  cloudIdentifier: 'gcp-us',
  env: {
    development: {
      initialProjectKey: 'demo_ypf',
    },
    production: {
      applicationId: 'TODO',
      url: 'https://product.enhancement.app',
    },
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/box.svg}',
  mainMenuLink: {
    defaultLabel: 'Product Enhancement',
    labelAllLocales: [
      { locale: 'en', value: 'Product Enhancement' },
      { locale: 'de', value: 'Produktverbesserung' },
    ],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'channels',
      defaultLabel: 'Channels',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
