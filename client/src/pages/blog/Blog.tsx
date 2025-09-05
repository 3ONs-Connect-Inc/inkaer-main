import BlogHero from "@/components/blog/BlogHero";
import BlogPostsGrid from "@/components/blog/BlogPostsGrid";
import FeaturedPost from "@/components/blog/FeaturedPost";
import Seo from "@/components/seo/Seo";
import { useBlogHeader, useBlogPosts } from "@/hooks/useBlog";


const Blog = () => {
  const { data: header, isLoading: headerLoading } = useBlogHeader();
  const { data: posts, isLoading: postsLoading } = useBlogPosts();

  if (headerLoading || postsLoading) {
    return <p className="text-center py-20">Loading blog...</p>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={`${header?.heroTitle || "Blog"} – Inkaer`}
        description={
          header?.heroSubtitle ||
          posts?.[0]?.excerpt?.slice(0, 150) + "…" ||
          "Read the latest articles, insights, and engineering trends from Inkaer."
        }
        name={posts?.[0]?.author || "Inkaer"}
        type="article"
      />

      <main className="py-16">
        <BlogHero header={header} />

        {posts && posts.length > 0 ? (
          <FeaturedPost post={posts[0]} />
        ) : (
          <p className="text-center py-16 text-gray-500">No blog posts yet.</p>
        )}

        <BlogPostsGrid header={header} posts={posts?.slice(1) || []} />
      </main>
    </div>
  );
};

export default Blog;
