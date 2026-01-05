import { slugEventWorks } from "./data/works";

export default function sitemap() {
  const baseUrl = "https://beautiesushers.com";

  const workPages = slugEventWorks.map((work) => ({
    url: `${baseUrl}/works/${work.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      priority: 1,
    },
    {
      url: `${baseUrl}/works`,
      priority: 0.9,
    },
    ...workPages,
  ];
}
