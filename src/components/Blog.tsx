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
      title: "Building High-Performance Financial Systems with PHP and Java",
      date: "2024-03-15",
      category: "System Architecture",
      excerpt: "Deep dive into architecting scalable financial systems using PHP and Java, focusing on handling millions of transactions with sub-second latency.",
      topics: ["Microservices", "Caching Strategies", "Load Balancing"],
      readTime: "8 min read",
      link: "#"
    },
    {
      title: "Advanced API Design for Financial Applications",
      date: "2024-03-10",
      category: "Backend Development",
      excerpt: "Exploring best practices in designing robust APIs for financial services, including authentication, rate limiting, and error handling.",
      topics: ["API Security", "Rate Limiting", "Error Handling"],
      readTime: "6 min read",
      link: "#"
    },
    {
      title: "Database Optimization Techniques in Financial Systems",
      date: "2024-03-05",
      category: "Performance",
      excerpt: "Comprehensive guide to optimizing database performance in high-throughput financial applications, from query optimization to indexing strategies.",
      topics: ["Query Optimization", "Indexing", "Partitioning"],
      readTime: "10 min read",
      link: "#"
    },
    {
      title: "Implementing Distributed Caching in Enterprise Applications",
      date: "2024-02-28",
      category: "Infrastructure",
      excerpt: "Learn how to design and implement efficient distributed caching solutions for large-scale enterprise applications.",
      topics: ["Redis", "Cache Invalidation", "Consistency"],
      readTime: "7 min read",
      link: "#"
    }
  ];

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="bg-expensify-darkgreen p-6 rounded-lg border border-[#1A3D32]">
        <h1 className="text-4xl font-bold text-expensify-light mb-4">Technical Articles</h1>
        <p className="text-expensify-light opacity-90">
          Sharing insights and experiences in backend development and system architecture
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-expensify-buttonGreen bg-opacity-30 rounded-xl p-8 border border-expensify-green hover:bg-opacity-40 transition duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-expensify-darkgreen px-4 py-1.5 rounded-lg text-sm text-expensify-green font-medium">
                    {post.category}
                  </span>
                  <span className="text-expensify-light text-sm">
                    {post.date}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-expensify-green mb-4">
                  {post.title}
                </h3>

                <p className="text-expensify-light leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {post.topics.map((topic, i) => (
                      <span 
                        key={i}
                        className="bg-expensify-darkgreen px-3 py-1 rounded-lg text-sm text-expensify-green opacity-75"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-expensify-green border-opacity-30">
                    <span className="text-expensify-light text-sm">
                      {post.readTime}
                    </span>
                    <a 
                      href={post.link}
                      className="bg-expensify-green text-expensify-darkgreen px-4 py-1.5 rounded-lg hover:bg-opacity-90 transition duration-300 text-sm font-medium"
                    >
                      Read Article
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;