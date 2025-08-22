import { blogPosts } from "@/constants";
import { ArrowRight, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";
import Seo from "@/components/Seo";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
       <Seo
        title="Blog"
         description="Explore the latest insights, articles, and updates from Inkaer. Stay informed about engineering, hiring trends, and company news."
        name="Inkaer"
        type="article"
      />
      <main className="py-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="mx-auto max-w-7xl padding">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-bold-5xl mb-6"
              >
                Inkaer Blog
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="desc leading-8 max-w-3xl mx-auto"
              >
                Insights, trends, and best practices for engineering hiring and team
                building. Stay ahead with expert advice from industry leaders.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl padding">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="mb-8"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-4"
              >
                Featured
              </motion.span>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <motion.div variants={fadeInUp}>
                  <span className="text-sm text-blue-600 font-medium">
                    {blogPosts[0].category}
                  </span>
                  <h2 className="text-bold-3xl mt-2 mb-4">{blogPosts[0].title}</h2>
                  <p className="desc mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center text-xs xs:text-sm text-gray-500 mb-6">
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
                  <button className="inline-flex text-sm sm:text-base items-center text-blue-600 hover:text-blue-700 font-medium">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  className="mt-12 lg:mt-0"
                >
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl padding">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-bold-3xl">Latest Articles</h2>
              <p className="mt-4 desc">
                Stay updated with the latest insights and trends
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts.slice(1).map((post, index) => (
                <motion.article
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-sm text-blue-600 font-medium">
                      {post.category}
                    </span>
                    <h3 className="desc-bold mt-2 mb-3">{post.title}</h3>
                    <p className="text-small mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-xs xs:text-sm text-gray-500 mb-4">
                      <span className="flex items-center mr-4">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                    </div>
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm sm:text-base font-medium">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
