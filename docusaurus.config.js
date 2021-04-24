/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Polo',
  tagline: 'Git-based reverse proxy',
  url: 'https://polo.bembi.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'wufe', // Usually your GitHub org/user name.
  projectName: 'Polo', // Usually your repo name.
  themeConfig: {
    // colorMode: {
    //   defaultMode: 'dark',
    //   disableSwitch: true,
    //   respect
    // },
    navbar: {
      title: '',
      logo: {
        alt: 'Polo',
        src: 'img/color-no-background.svg',
        srcDark: 'img/white-no-background.svg',
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/wufe/polo',
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
            {
              label: 'Installation',
              to: '/docs/installation'
            },
            {
              label: 'Configuration',
              to: '/docs/configuration'
            }
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'Demo',
              to: 'https://polo-testserver.bembi.dev',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/wufe/polo',
            },
          ],
        },
      ],
      copyright: `Built with Docusaurus`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/docs/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};