import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { useBlogPost } from "@/hooks/useBlog";
import { listenToBlogPostBySlug } from "@/firebase/blogService";
import ArticleLayout from "../../components/blog/ArticleLayout";
import Seo from "@/components/seo/Seo";

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const queryClient = useQueryClient();

  const { data: post, isLoading, isError } = useBlogPost(slug || "");

  // 🔹 keep snapshot in sync with TanStack cache
  useEffect(() => {
    if (!slug) return;
    const unsubscribe = listenToBlogPostBySlug(slug, (livePost) => {
      queryClient.setQueryData(["blogPost", slug], livePost);
    });
    return () => unsubscribe();
  }, [slug, queryClient]);

  if (isLoading) return <p className="p-6">Loading post...</p>;
  if (isError || !post) return <p className="p-6">Post not found</p>;

  return (
    <>
      <Seo
     title={`${post.title} – Inkaer`}
  description={post.excerpt || `${post.title} - Read the full article on Inkaer.`}
  name={post.author || "Inkaer"}
  type="article"
      />
    <ArticleLayout
      title={post.title}
      excerpt={post.excerpt}
      author={post.author}
      timestamp={moment(post.timestamp).fromNow()}
      readTime={post.readTime}
      category={post.category}
      image={post.image}
      content={post.content}
    />  
    </>
  );
};

export default BlogDetail;
