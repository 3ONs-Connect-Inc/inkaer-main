
import { useState } from "react";
import { Plus, Image as ImageIcon, Eye, Edit3, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { AdminTable, type Column } from "@/components/admin/AdminTable";
import TagSelect from "./TagSelect";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CATEGORIES, generateSlug, type BlogPost } from "@/types";

export default function BlogPostForm({
  posts,
  setPosts,
}: {
  posts: BlogPost[];
  setPosts: (p: BlogPost[]) => void;
}) {
  const [newPost, setNewPost] = useState<Omit<BlogPost, "id" | "slug">>({
    title: "",
    category: CATEGORIES[0],
    tags: ["Trending"],
    excerpt: "",
    description: "",
    author: "",
    date: new Date().toISOString().split("T")[0],
    readTime: "5 min read",
    image: "",
  });

  const addPost = (e: React.FormEvent) => {
    e.preventDefault();
    const id = Date.now();
    const slug = generateSlug(newPost.title || `${id}`);
    setPosts([{ id, slug, ...newPost }, ...posts]);
    setNewPost({
      title: "",
      category: CATEGORIES[0],
      tags: ["Trending"],
      excerpt: "",
      description: "",
      author: "",
      date: new Date().toISOString().split("T")[0],
      readTime: "5 min read",
      image: "",
    });
  };

  const removePost = (id: number) => setPosts(posts.filter((x) => x.id !== id));

  const postCols: Column<BlogPost>[] = [
    {
      header: "Post",
      render: (p) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
            {p.image ? (
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            ) : (
              <ImageIcon className="w-5 h-5 text-gray-400" />
            )}
          </div>
          <div>
            <p className="font-medium">{p.title}</p>
            <p className="text-xs text-gray-500">/blog/{p.id}/{p.slug}</p>
          </div>
        </div>
      ),
    },
    { header: "Category", accessor: "category" },
    { header: "Author", accessor: "author" },
    { header: "Date", accessor: "date" },
    {
      header: "Actions",
      render: (p) => (
        <div className="flex gap-3">
          <Link to={`/blog/${p.id}/${p.slug}`} className="text-blue-600 hover:underline flex items-center gap-1">
            <Eye className="w-4 h-4" /> View
          </Link>
          <button className="text-amber-600 flex items-center gap-1">
            <Edit3 className="w-4 h-4" /> Edit
          </button>
          <button onClick={() => removePost(p.id)} className="text-rose-600 flex items-center gap-1">
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="card mb-8">
        <div className="card-header">
          <p className="card-title flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add New Post
          </p>
        </div>
        <div className="card-body">
          <form onSubmit={addPost} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Title</label>
              <input
                className="w-full border rounded-lg px-3 py-2"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Category</label>
              <select
                className="w-full border rounded-lg px-3 py-2"
                value={newPost.category}
                onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
              >
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Author</label>
              <input
                className="w-full border rounded-lg px-3 py-2"
                value={newPost.author}
                onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Date</label>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2"
                value={newPost.date}
                onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Read Time</label>
              <input
                className="w-full border rounded-lg px-3 py-2"
                value={newPost.readTime}
                onChange={(e) => setNewPost({ ...newPost, readTime: e.target.value })}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Image URL</label>
              <input
                className="w-full border rounded-lg px-3 py-2"
                value={newPost.image}
                onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Tags</label>
              <TagSelect
                value={newPost.tags}
                onChange={(tags) => setNewPost({ ...newPost, tags })}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Excerpt</label>
              <textarea
                className="w-full border rounded-lg px-3 py-2"
                rows={2}
                value={newPost.excerpt}
                onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Description</label>
              <CKEditor
                editor={ClassicEditor as any}
                data={newPost.description}
                onChange={(_, editor) =>
                  setNewPost({ ...newPost, description: editor.getData() })
                }
              />
            </div>
            <div className="md:col-span-2 flex justify-end gap-3">
              <button
                type="reset"
                className="px-4 py-2 rounded-lg border"
                onClick={() =>
                  setNewPost({
                    title: "",
                    category: CATEGORIES[0],
                    tags: ["Trending"],
                    excerpt: "",
                    description: "",
                    author: "",
                    date: new Date().toISOString().split("T")[0],
                    readTime: "5 min read",
                    image: "",
                  })
                }
              >
                Clear
              </button>
              <button type="submit" className="px-4 py-2 rounded-lg bg-blue-600 text-white">
                Add Post
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <p className="card-title">Blog Grid</p>
        </div>
        <div className="card-body">
          <AdminTable title="All Blog Posts" data={posts} columns={postCols} rowKey={(p) => p.id} />
        </div>
      </div>
    </>
  );
}
