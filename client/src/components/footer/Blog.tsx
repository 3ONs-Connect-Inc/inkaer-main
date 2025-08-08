const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Engineering Hiring: Skills Over Degrees",
      excerpt:
        "Exploring how the engineering industry is shifting towards skill-based hiring and what it means for both engineers and employers.",
      date: "December 15, 2024",
      category: "Industry Insights",
    },
    {
      title: "Building a Strong Engineering Portfolio: Best Practices",
      excerpt:
        "Learn how to showcase your engineering projects effectively to stand out to potential employers.",
      date: "December 10, 2024",
      category: "Career Advice",
    },
    {
      title: "Peer Review in Engineering: Quality Through Collaboration",
      excerpt:
        "Understanding the importance of peer review in engineering project evaluation and professional development.",
      date: "December 5, 2024",
      category: "Best Practices",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>

      <div className="relative z-10">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="section-title mb-6">Engineering Insights</h1>
              <p className="section-subtitle max-w-3xl mx-auto">
                Latest insights, trends, and best practices in engineering and
                career development.
              </p>
            </div>

            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white/70 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex flex-col xs:flex-row items-center gap-4 mb-4">
                    <span className="bg-inkaer-blue/10 text-inkaer-blue px-3 py-1 rounded-full text-xs sm:text-sm font-sora font-medium">
                      {post.category}
                    </span>
                    <span className="section-p">{post.date}</span>
                  </div>

                  <h2 className="section-subtitle2 mb-3 hover:text-inkaer-blue transition-colors cursor-pointer">
                    {post.title}
                  </h2>

                  <p className="section-p leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <button className=" text-inkaer hover:underline">
                    Read More →
                  </button>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="section-p">
                More articles coming soon. Stay tuned for the latest insights!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
