import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'CVHP Digital Guide',
  description: 'Your guide to the newsroom.',
  themeConfig: {
    sidebar: [
      {
        text: 'Introduction',
        collapsible: true,
        items: getIntroSidebar()
      },
      {
        text: 'WordPress',
        collapsible: true,
        items: getWordpressSidebar()
      },
      {
        text: 'Guidelines',
        collapsible: true,
        items: [
          // {text: 'Wordpress', link: '/tools/wordpress/'}
        ]
      },
    ]
  }
});

function getIntroSidebar() {
  return [
    {text: 'Getting Started', link: '/introduction/getting-started'},
    {text: 'Newsroom Contacts', link: '/introduction/newsroom-contacts'},
    {text: 'News Contacts', link: '/introduction/news-contacts'},
  ];
}

function getWordpressSidebar() {
  return [
    {
      text: 'Logging In',
      link: '/guides/wordpress/logging-in'
    },
    {
      text: 'Creating Posts',
      link: '/guides/wordpress/creating-posts'
    },
    {
      text: 'Headlines',
      link: '/guides/wordpress/headlines'
    },
    {
      text: 'Categories',
      link: '/guides/wordpress/categories'
    },
    {
      text: 'Feature Image',
      link: '/guides/wordpress/feature-image'
    },
    {
      text: 'Adding Images',
      link: '/guides/wordpress/adding-images'
    },
    {
      text: 'Adding Video',
      link: '/guides/wordpress/adding-video'
    },
    {
      text: 'Promo Links',
      link: '/guides/wordpress/promo-links'
    },
    {
      text: 'Maps',
      link: '/guides/wordpress/maps'
    },
  ]
}

function getGuidelinesSidebar() {

}