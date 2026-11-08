
import type { MetadataRoute } from "next";

const siteUrl = "https://sinamahmoodi.ir";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-11-08"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
