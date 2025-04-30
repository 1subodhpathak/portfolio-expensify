// import React from 'react';

// interface BlogPost {
//   id: number;
//   title: string;
//   summary: string;
//   date: string;
//   category: string;
//   link: string;
//   image: string;
// }

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable Financial Systems",
      date: "2024-03-15",
      category: "Architecture",
      excerpt: "Exploring best practices for building robust financial systems that can handle millions of transactions.",
      readTime: "5 min read",
      link: "#"
    },
    {
      title: "Modern API Design Patterns",
      date: "2024-03-10",
      category: "Development",
      excerpt: "A deep dive into RESTful API design patterns and best practices for financial applications.",
      readTime: "4 min read",
      link: "#"
    },
    {
      title: "Optimizing Database Performance",
      date: "2024-03-05",
      category: "Performance",
      excerpt: "Tips and techniques for optimizing database queries and improving application performance.",
      readTime: "6 min read",
      link: "#"
    },
    {
      title: "Security in Financial Applications",
      date: "2024-02-28",
      category: "Security",
      excerpt: "Essential security practices for developing robust financial applications.",
      readTime: "7 min read",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="bg-expensify-darkgreen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-expensify-light mb-12 text-center">
          Technical Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-expensify-buttonGreen bg-opacity-50 rounded-lg p-8 hover:bg-opacity-70 transition duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-expensify-green text-sm">
                  {post.date}
                </span>
                <span className="bg-expensify-darkgreen px-3 py-1 rounded-full text-sm text-expensify-green">
                  {post.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-expensify-green mb-3">
                {post.title}
              </h3>

              <p className="text-expensify-light opacity-90 mb-4">
                {post.excerpt}
              </p>

              <div className="flex justify-between items-center mt-6">
                <span className="text-expensify-light opacity-75 text-sm">
                  {post.readTime}
                </span>
                <a 
                  href={post.link}
                  className="text-expensify-green hover:text-expensify-light transition duration-300"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;