module.exports = {
  head: [
    ['script', {src: 'https://kit.fontawesome.com/1b98495d92.js', crossorigin: 'anonymous'}]
  ],
  title: "Ionoid IoT Documentation",
  dahboardUrl: "https://dashboard-dev.ionoid.io",
  themeConfig: {
    logo: '/brand.png',
    nav: [
      { text: 'Docs', link: '/docs/introduction.md' },
      { text: 'Create Account', link: 'https://dashboard.ionoid.io/register' },
      { text: 'Sign in', link: 'https://dashboard.ionoid.io/login' },
      { text: 'Contact', link: 'https://ionoid.io/contact/' },
      { text: 'Github', link: 'https://github.com/ionoid/docs.ionoid.io' }
    ],
    sidebar: [
      {
        title: 'Ionoid.io Docs',
        collapsable: false,
        children: [
          {
            title: 'Introduction',
            path: '/docs/introduction.md'
          },
          {
            title: 'Getting Started',
            path: '/docs/getting-started.md'
          },
          {
            title: 'Projects',
            path: '/docs/projects.md'
          },
          {
            title: 'Register a Device',
            path: '/docs/register-a-device.md'
          },
          {
            title: 'Deploy IoT Apps',
            path: '/docs/deploy-iot-apps.md'
          },
          {
            title: 'IoT Apps Architecture',
            path: '/docs/iot-apps-architecture.md'
          },
          {
            title: 'IoT Apps Basic Examples',
            path: '/docs/iot-apps-basic-examples.md'
          },
          {
            title: 'Organizations and Collaboration',
            path: '/docs/organizations-and-collaboration.md'
          },
          {
            title: 'Debug IoT Devices',
            path: '/docs/debug-iot-devices.md'
          },
          {
            title: 'Supported Boards and OS',
            path: '/docs/supported-boards-and-os.md'
          },
          {
            title: 'FAQ',
            path: '/docs/faq.md'
          },
          {
            title: 'Impressum',
            path: '/docs/impressum.md'
          },
          {
            title: 'Legal',
            path: '/docs/legal.md'
          }
        ]
      }
    ]
  }
}
