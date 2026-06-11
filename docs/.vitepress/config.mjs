export default {
  lang: 'en-US',
  title: 'Promotion Validation Framework',
  description: 'How UBIO validates promotions.',
  appearance: false,
  themeConfig: {
    nav: [
      { text: 'Framework', link: '/' },
      { text: 'Reporting', link: '/reporting-format' },
    ],
    sidebar: [
      {
        text: 'Validation Framework',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Validation Results', link: '/validation-results' },
          { text: 'Error Categories', link: '/error-categories' },
          { text: 'Reporting Format', link: '/reporting-format' },
          { text: 'Glossary', link: '/glossary' },
        ],
      },
    ],
    search: {
      provider: 'local',
    },
    outline: false,
  },
}
