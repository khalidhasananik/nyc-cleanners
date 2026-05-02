import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://aniktests.online/sitemap.xml',
    host: 'https://aniktests.online',
  };
}
