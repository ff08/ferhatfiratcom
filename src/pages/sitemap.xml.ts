import type { APIRoute } from "astro";
import { site } from "../content/site";

type UrlEntry = { loc: string; lastmod?: string; changefreq?: string; priority?: string };

function abs(pathname: string) {
  const base = "https://ferhatfirat.com";
  return new URL(pathname, base).toString();
}

function xmlEscape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&apos;");
}

function urlTag(u: UrlEntry) {
  const parts = [
    `<loc>${xmlEscape(u.loc)}</loc>`,
    u.lastmod ? `<lastmod>${xmlEscape(u.lastmod)}</lastmod>` : "",
    u.changefreq ? `<changefreq>${xmlEscape(u.changefreq)}</changefreq>` : "",
    u.priority ? `<priority>${xmlEscape(u.priority)}</priority>` : "",
  ].filter(Boolean);
  return `<url>${parts.join("")}</url>`;
}

export const GET: APIRoute = async () => {
  const urls: UrlEntry[] = [];

  // Core pages (TR)
  urls.push({ loc: abs("/"), changefreq: "weekly", priority: "1.0" });
  urls.push({ loc: abs("/about"), changefreq: "monthly", priority: "0.8" });
  urls.push({ loc: abs("/references"), changefreq: "monthly", priority: "0.8" });
  urls.push({ loc: abs("/policies"), changefreq: "yearly", priority: "0.4" });
  urls.push({ loc: abs("/news"), changefreq: "weekly", priority: "0.7" });

  // Core pages (EN)
  urls.push({ loc: abs("/en"), changefreq: "weekly", priority: "0.9" });
  urls.push({ loc: abs("/en/about"), changefreq: "monthly", priority: "0.7" });
  urls.push({ loc: abs("/en/references"), changefreq: "monthly", priority: "0.7" });
  urls.push({ loc: abs("/en/policies"), changefreq: "yearly", priority: "0.3" });
  urls.push({ loc: abs("/en/news"), changefreq: "weekly", priority: "0.6" });

  // Article detail pages
  for (const a of site.articles) {
    urls.push({
      loc: abs(`/news/${a.slug}`),
      lastmod: a.dateISO,
      changefreq: "yearly",
      priority: "0.6",
    });
    urls.push({
      loc: abs(`/en/news/${a.slug}`),
      lastmod: a.dateISO,
      changefreq: "yearly",
      priority: "0.5",
    });
  }

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls.map(urlTag).join("") +
    `</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
};

