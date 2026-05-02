import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const entries = await getCollection('learn');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: entries
			.filter((entry) => entry.data.draft !== true)
			.map((entry) => ({
				title: entry.data.title,
				description: entry.data.description,
				pubDate: entry.data.pubDate,
				link: `/learn/${entry.id}/`,
			})),
	});
}
