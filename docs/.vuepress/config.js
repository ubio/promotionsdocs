module.exports = {
  lang: 'en-US',
  title: 'Promotion Validation Framework',
  description: 'How UBIO validates promotions.',
  themeConfig: {
    navbar: [
      {
        text: 'Framework',
        link: '/',
      },
      {
        text: 'Reporting',
        link: '/reporting-format.html',
      },
    ],
    sidebar: [
      {
        title: 'Validation Framework',
        collapsable: false,
        children: [
          '/',
          '/validation-results.html',
          '/error-categories.html',
          '/reporting-format.html',
          '/glossary.html',
        ],
      },
    ],
    editLink: false,
    lastUpdated: false,
  },
}
