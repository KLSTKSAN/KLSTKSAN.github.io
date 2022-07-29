export const SITE = {
	title: 'Digital Guide',
	description: 'A guide to the KLST, KSAN, Concho Valley Homepage newsroom.',
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
		{ text: 'Onboarding', link: 'en/getting-started/onboarding' },
		{ text: 'Newsroom Contacts', link: 'en/getting-started/newsroom-contacts' },
		{ text: 'News Contacts', link: 'en/getting-started/news-contacts' },

		{ text: 'Wordpress', header: true },
		{ text: 'Logging In', link: 'en/guides/wordpress/logging-in' },
		{ text: 'Creating Posts', link: 'en/guides/wordpress/creating-posts' },
		{ text: 'Headlines', link: 'en/guides/wordpress/headlines' },
		{ text: 'Categories', link: 'en/guides/wordpress/categories' },
		{ text: 'Feature Image', link: 'en/guides/wordpress/feature-image' },
		{ text: 'Adding Images', link: 'en/guides/wordpress/adding-images' },
		{ text: 'Adding Video', link: 'en/guides/wordpress/adding-video' },
		{ text: 'Promo Links', link: 'en/guides/wordpress/promo-links' },

		{ text: 'Guidelines', header: true },
		{ text: 'AP Style', link: 'en/guidelines/ap-style' },
	],
};
