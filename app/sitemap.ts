import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/partners', '/trust', '/contact', '/trust/security', '/trust/privacy'];

  return routes.map((route) => ({
    url: `https://bluemop.example${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7
  }));
}
