export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: 'Getting Started', header: true },
		{ text: 'Onboarding', link: 'en/onboarding' },
		{ text: 'Newsroom Contacts', link: 'en/newsroom-contacts' },
		{ text: 'News Contacts', link: 'en/news-contacts' },

		{ text: 'Wordpress', header: true },
		{ text: 'Logging In', link: 'en/wordpress/logging-in' },
		{ text: 'Creating Posts', link: 'en/wordpress/creating-posts' },
		{ text: 'Creating Posts', link: 'en/wordpress/creating-posts' },
		{ text: 'Headlines', link: 'en/wordpress/headlines' },
		{ text: 'Categories', link: 'en/wordpress/categories' },
		{ text: 'Feature Images', link: 'en/wordpress/feature-images' },
		{ text: 'Adding Images', link: 'en/wordpress/adding-images' },
		{ text: 'Adding Video', link: 'en/wordpress/adding-video' },
		{ text: 'Promo Links', link: 'en/wordpress/promo-links' },

		{ text: 'Guidelines', header: true },
		{ text: 'AP Style', link: 'en/guidelines/ap-style' },
	],
};
