// client/generate-sitemap.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = process.env.VITE_CLIENT_URL || "https://inkaer.com";

// ✅ Firebase config (must match your project)
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Routes you DO want indexed
const STATIC_ROUTES = [
  "/", "/about", "/careers", "/blog", "/contact", "/terms", "/privacy"
];

// Routes to exclude from sitemap
const EXCLUDED = new Set([
  "/sign-in", "/sign-up", "/forgot-password", "/reset-password", "/unauthorized"
]);

// Format ISO date (YYYY-MM-DD)
const isoDate = (d = new Date()) => d.toISOString().split("T")[0];

function urlEntry(loc, lastmod) {
  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
}

// ✅ Fetch blog posts from Firestore
async function getBlogRoutes() {
  const snap = await getDocs(collection(db, "blogs"));
  return snap.docs.map((doc) => {
    const data = doc.data();
    const slug = data.slug || data.title?.toLowerCase().replace(/\s+/g, "-") || "post";
    return `/blog/${doc.id}/${slug}`;
  });
}

// ✅ Fetch job applications (job postings) from Firestore
async function getApplicationRoutes() {
  const snap = await getDocs(collection(db, "jobs"));
  return snap.docs.map((doc) => `/application?jobId=${doc.id}`);
}

async function generateSitemap() {
  const today = isoDate();

  const [blogRoutes, applicationRoutes] = await Promise.all([
    getBlogRoutes(),
    getApplicationRoutes(),
  ]);

  const allRoutes = [
    ...STATIC_ROUTES,
    ...blogRoutes,
    ...applicationRoutes,
  ].filter((r) => !EXCLUDED.has(r));

  const urls = allRoutes.map((route) => urlEntry(`${BASE_URL}${route}`, today)).join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const publicDir = path.join(__dirname, "public");
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap.trim(), "utf8");
  console.log("✅ Sitemap generated at client/public/sitemap.xml");
}

generateSitemap().catch((err) => {
  console.error("❌ Failed to generate sitemap:", err);
  process.exit(1);
});
