import React from 'react';

// interface BlogPost {
//   id: number;
//   title: string;
//   summary: string;
//   date: string;
//   category: string;
//   link: string;
//   image: string;
// }

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Optimizing API Performance in Node.js",
      summary: "Techniques for improving response times and reducing server load in high-traffic APIs.",
      date: "March 15, 2025",
      category: "Backend Development",
      link: "#",
      image: "/images/api-optimization.jpg"
    },
    {
      id: 2,
      title: "Building Scalable Microservices Architecture",
      summary: "Design patterns and best practices for creating maintainable microservices.",
      date: "February 27, 2025",
      category: "System Design",
      link: "#",
      image: "/images/microservices.jpg"
    },
    {
      id: 3,
      title: "React Native vs Native Development: A Backend Developer's Perspective",
      summary: "Comparing approaches to mobile development with insights on API integration.",
      date: "January 10, 2025",
      category: "Mobile Development",
      link: "#",
      image: "/images/react-native.jpg"
    }
  ];

  return (
    <section id="blog" className="py-16 bg-expensify-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-expensify-dark">Technical</span>
          <span className="text-expensify-green"> Blog</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                {/* This would be an image in a real project */}
                <div className="text-gray-500 text-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-.586-1.414l-3.5-3.5A2 2 0 0012.414 4H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-expensify-green font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-expensify-dark">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.summary}
                </p>
                
                <a 
                  href={post.link}
                  className="inline-flex items-center text-expensify-green hover:text-expensify-dark transition-colors duration-200"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;