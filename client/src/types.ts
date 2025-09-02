// /components/admin/blog/types.ts
export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  excerpt: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
};

export interface BlogHeader {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  latestTitle: string;
  latestSubtitle: string;
}

export const CATEGORIES = [
  "Engineering",
  "Hiring",
  "Company",
  "Product",
  "Culture",
  "Announcements",
] as const;

export const TAG_OPTIONS = [
  "Featured",
  "Trending",
  "How-To",
  "Case Study",
  "News",
  "Opinion",
];

export const generateSlug = (title: string) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const classNames = (...c: (string | false | null | undefined)[]) =>
  c.filter(Boolean).join(" ");
