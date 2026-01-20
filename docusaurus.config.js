import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Programing-help',
  tagline: 'The official Programing-help python framework',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://A6production.github.io',
  baseUrl: 'Programing-help_framework-documentation',

  organizationName: 'Programing-help',
  projectName: 'Programing-help Framework documentation',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Programing-help',
        logo: {
          alt: 'Programing-help Logo',
          src: 'img/favicon_white.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/changelog', label: 'Changelog', position: 'left'},
          {
            href: 'https://github.com/ProgramingHelp/Programing-help_Framework',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Official Website',
                href: 'https://programing-help.com',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/6DVkYFdBJZ',
              },
              {
                label: 'Github',
                href: 'https://github.com/ProgramingHelp',
              },
              {
                label: 'Email',
                href: 'mailto:dev@programing-help.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Changelog',
                to: '/changelog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Programing-help Framework, Programing-help`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
