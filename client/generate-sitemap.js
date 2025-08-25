// client/generate-sitemap.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// __dirname replacement in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Change this to your production site
const BASE_URL = process.env.VITE_CLIENT_URL || "https://inkaer.com";

// List out your static routes
const routes = [
  "/", 
  "/about",
  "/careers",
  "/blog",
  "/contact",
  "/terms",
  "/privacy",
  "/sign-in",
  "/sign-up",
  "/forgot-password",
  "/reset-password",
  "/unauthorized",
];

function generateSitemap() {
  const urls = routes.map(route => {
    return `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }).join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const publicDir = path.join(__dirname, "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");
  console.log("✅ Sitemap generated at client/public/sitemap.xml");
}

generateSitemap();
