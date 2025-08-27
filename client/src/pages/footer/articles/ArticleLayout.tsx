import React from 'react';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArticleLayoutProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: React.ReactNode;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  image,
  content
}) => {
  return (
    <div className="min-h-screen bg-white">
  
      <main className="py-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <div className="text-center">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                {category}
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                {title}
              </h1>
              <p className="text-xl leading-8 text-gray-600 mb-8">
                {excerpt}
              </p>
              <div className="flex items-center justify-center text-sm text-gray-500 space-x-6">
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {author}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {date}
                </span>
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Image */}
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <img
              src={image}
              alt={title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-blue max-w-none">
              {content}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default ArticleLayout;