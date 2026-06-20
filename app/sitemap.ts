import type { MetadataRoute } from "next";

const SITE_URL = "https://harshita-portfolio-two.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
