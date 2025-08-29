// client/generate-sitemap.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = process.env.VITE_CLIENT_URL || "https://inkaer.com";

// Routes you DO want indexed
const STATIC_ROUTES = [
  "/", "/about", "/careers", "/blog", "/contact", "/terms", "/privacy"
];

// Routes to exclude from sitemap & add noindex via meta
const EXCLUDED = new Set([
  "/sign-in", "/sign-up", "/forgot-password", "/reset-password", "/unauthorized"
]);

// If your blog is file-based, scan content folder. Otherwise, plug in your CMS fetch here.
function getBlogPostSlugs() {
  const postsDir = path.join(__dirname, "content", "blog"); // adjust to your repo
  if (!fs.existsSync(postsDir)) return [];
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith(".md") || f.endsWith(".mdx") || f.endsWith(".html"))
    .map(f => "/blog/" + f.replace(/\.(mdx?|html)$/i, ""));
}

// Helper to format ISO date (YYYY-MM-DD)
const isoDate = (d = new Date()) => d.toISOString().split("T")[0];

function urlEntry(loc, lastmod) {
  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
}

function generateSitemap() {
  const blogRoutes = getBlogPostSlugs();

  const allRoutes = [
    ...STATIC_ROUTES,
    ...blogRoutes
  ].filter(r => !EXCLUDED.has(r));

  const today = isoDate();

  const urls = allRoutes.map(route => urlEntry(`${BASE_URL}${route}`, today)).join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const publicDir = path.join(__dirname, "public");
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap.trim(), "utf8");
  console.log("✅ Sitemap generated at client/public/sitemap.xml");
}

generateSitemap();
