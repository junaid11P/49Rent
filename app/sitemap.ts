import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://49rent.com', lastModified: new Date() },
    { url: 'https://49rent.com/products', lastModified: new Date() },
    { url: 'https://49rent.com/book', lastModified: new Date() },
    { url: 'https://49rent.com/login', lastModified: new Date() },
  ];
}
