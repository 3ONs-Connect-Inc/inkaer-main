
import BlogHeaderForm from "@/components/admin/blog/BlogHeaderForm";
import BlogPostForm from "@/components/admin/blog/BlogPostForm";
import type { BlogHeader, BlogPost } from "@/types";
import { useState } from "react";


export default function AdminBlog() {
  const [header, setHeader] = useState<BlogHeader>({
    heroTitle: "Inkaer Blog",
    heroSubtitle:
      "Insights, trends, and best practices for engineering hiring and team building. Stay ahead with expert advice from industry leaders.",
    heroBadge: "Featured",
    latestTitle: "Latest Articles",
    latestSubtitle: "Stay updated with the latest insights and trends",
  });

  const [posts, setPosts] = useState<BlogPost[]>([]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 lg:p-10">
        <h1 className="text-2xl font-bold mb-6">Admin · Blog Manager</h1>
        <BlogHeaderForm header={header} setHeader={setHeader} />
        <BlogPostForm posts={posts} setPosts={setPosts} />
      </div>
    </div>
  );
}
