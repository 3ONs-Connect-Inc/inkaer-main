import BlogHeaderForm from "@/components/admin/blog/BlogHeaderForm";
import type { BlogHeader, BlogPost } from "@/types";
import { addBlogPost, deleteBlogPost, getBlogHeader, saveBlogHeader } from "@/firebase/blogService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useBlogPosts } from "@/components/admin/hooks/useAdminBlog";
import { toast } from "sonner";
import BlogPostForm from "@/components/admin/blog/BlogPostForm";

export default function AdminBlog() {
  const queryClient = useQueryClient();

  const { data: header, isLoading: headerLoading } = useQuery({
    queryKey: ["blogHeader"],
    queryFn: getBlogHeader,
  });

  const { data: posts, isLoading: postsLoading } = useBlogPosts();

  const saveHeaderMutation = useMutation({
    mutationFn: (header: BlogHeader) => saveBlogHeader(header),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["blogHeader"] }),
  });

  const addPostMutation = useMutation({
    mutationFn: (post: BlogPost) => addBlogPost(post),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["blogPosts"] }),
  });

  const deletePostMutation = useMutation({
    mutationFn: deleteBlogPost,
    onSuccess: () => {
      toast.success("Post deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["blogPosts"] });
    },
    onError: () => {
      toast.error("Failed to delete post");
    },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 lg:p-10">
        <h1 className="text-2xl font-bold mb-6">Admin · Blog Manager</h1>

        {/* Header Form */}
        {headerLoading ? (
          <p>Loading header...</p>
        ) : (
          <BlogHeaderForm
            header={
              header || {
                heroTitle: "",
                heroSubtitle: "",
                footerTitle: "",
                footerSubtitle: "",
              }
            }
            setHeader={(h) => saveHeaderMutation.mutate(h)}
            onSave={(h) => saveHeaderMutation.mutateAsync(h)}
          />
        )}

        {/* Posts Table */}
        {postsLoading ? (
          <p>Loading posts...</p>
        ) : (
          <BlogPostForm
            posts={posts ?? []}
            onAddPost={(p) => addPostMutation.mutate(p)}
            onDeletePost={(p) => deletePostMutation.mutate(p)}
          />
        )}
      </div>
    </div>
  );
}
