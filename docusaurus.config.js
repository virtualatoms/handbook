// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Virtual Atoms Lab Handbook',
  tagline: 'The handbook for the Virtual Atoms Lab.',
  url: 'https://handbook.virtualatoms.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
      },
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/virtualatoms/handbook/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Virtual Atoms Lab logo',
          src: 'img/virtualatoms-logo.svg',
          srcDark: 'img/virtualatoms-logo.svg',
          href: '/',
          target: '_self',
          width: 110,
          height: 42,
        },
        items: [
          {
            href: 'https://virtualatoms.org',
            label: 'Group Website',
            position: 'right',
          },
        ],
        hideOnScroll: true,
      },
      colorMode: {disableSwitch: true},
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }
    ),
};

module.exports = config;
