import { blogPosts } from "@/constants";
import Seo from "@/components/seo/Seo";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
     <Seo
        title="Blog – Inkaer"
         description="Explore the latest insights, articles, and updates from Inkaer. Stay informed about engineering, hiring trends, and company news."
        name="Inkaer"
        type="article"
      />
      <main className="py-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="mx-auto max-w-7xl padding">
            <div className="text-center">
              <h1 className="text-bold-5xl mb-6">
                Inkaer Blog
              </h1>
              <p className="mt-6 desc leading-8 max-w-3xl mx-auto">
                Insights, trends, and best practices for engineering hiring and team building.
                Stay ahead with expert advice from industry leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl padding">
            <div className="mb-8">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                Featured
              </span>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div>
                  <span className="text-sm text-blue-600 font-medium">{blogPosts[0].category}</span>
                  <h2 className="text-bold-3xl  mt-2 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <span className="flex items-center mr-6">
                      <User className="w-4 h-4 mr-2" />
                      {blogPosts[0].author}
                    </span>
                    <span className="flex items-center mr-6">
                      <Calendar className="w-4 h-4 mr-2" />
                      {blogPosts[0].date}
                    </span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Link 
                    to={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                <div className="mt-12 lg:mt-0">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl padding">
            <div className="text-center mb-12">
              <h2 className="text-bold-3xl">Latest Articles</h2>
              <p className="mt-4 desc">
                Stay updated with the latest insights and trends
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <article key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                    <h3 className="desc-bold mt-2 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-small mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="flex items-center mr-4">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-sm sm:text-base  inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;  