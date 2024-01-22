import { allBlogs } from 'contentlayer/generated';
import { MetadataRoute } from 'next';

const postsSitemap: MetadataRoute.Sitemap = allBlogs.map((post) => ({
  url: `${process.env.NEXT_PUBLIC_SITE_URL}/articles/${post.slug}`,
  lastModified: post.date,
  priority: 0.4
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "https://mbajaj.dev"
  return [

    {
      url: url,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: url + '/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: url + '/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: url + '/speaking',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: url + '/uses',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: url + '/thank-you',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: url + '/articles',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...postsSitemap,
  ];
}