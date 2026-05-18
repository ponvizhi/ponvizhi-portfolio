import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.ponvizhiweb.com/",
      lastModified: new Date(),
    },
    {
      url: "https://www.ponvizhiweb.com/freelance-web-developer-in-bangalore",
      lastModified: new Date(),
    },
    {
      url: "https://www.ponvizhiweb.com/blog",
      lastModified: new Date(),
    },
    {
      url: "https://www.ponvizhiweb.com/blog/freelance-web-developer-bangalore-guide",
      lastModified: new Date(),
    },
    {
      url: "https://www.ponvizhiweb.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://www.ponvizhiweb.com/services/web-design-development",
      lastModified: new Date(),
    },
  ];
}