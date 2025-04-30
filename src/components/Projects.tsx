import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: 'backend' | 'api' | 'infrastructure';
  features: string[];
  github?: string;
  metrics: {
    value: string;
    label: string;
  }[];
  link: string;
}

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'backend' | 'api' | 'infrastructure'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "High-Performance Transaction API",
      description: "Scalable financial transaction processing system built with PHP and Java, handling millions of requests with sub-second response times.",
      technologies: ["PHP", "Java", "PostgreSQL", "Redis", "RabbitMQ"],
      category: "backend",
      features: [
        "Microservices architecture for scalability",
        "Advanced caching strategies reducing load times by 60%",
        "Robust error handling and transaction rollback",
        "Comprehensive logging and monitoring",
        "Automated failover mechanisms"
      ],
      github: "https://github.com/yourusername/transaction-api",
      metrics: [
        { value: "2M+", label: "Daily Transactions" },
        { value: "99.99%", label: "Uptime" },
        { value: "<100ms", label: "Avg Response" }
      ],
      link: "#"
    },
    {
      id: 2,
      title: "Enterprise API Gateway",
      description: "Centralized API gateway managing authentication, rate limiting, and request routing for a distributed system.",
      technologies: ["Java", "Spring Boot", "OAuth2", "Elasticsearch"],
      category: "api",
      features: [
        "Advanced rate limiting algorithms",
        "JWT-based authentication system",
        "Real-time metrics and monitoring",
        "Custom plugin architecture",
        "Automated API documentation"
      ],
      metrics: [
        { value: "5M+", label: "Daily Requests" },
        { value: "50ms", label: "Latency" },
        { value: "Zero", label: "Downtime" }
      ],
      link: "#"
    },
    {
      id: 3,
      title: "Distributed Caching System",
      description: "Custom-built distributed caching solution for high-throughput financial data access with eventual consistency.",
      technologies: ["PHP", "Redis", "Memcached", "gRPC"],
      category: "infrastructure",
      features: [
        "Multi-level caching strategy",
        "Eventual consistency model",
        "Automatic cache invalidation",
        "Cache warming mechanisms",
        "Real-time cache analytics"
      ],
      metrics: [
        { value: "500K", label: "Cache Hits/s" },
        { value: "95%", label: "Hit Rate" },
        { value: "<5ms", label: "Access Time" }
      ],
      link: "#"
    },
    {
      id: 4,
      title: "Financial Data Pipeline",
      description: "Robust ETL pipeline processing and analyzing financial transaction data with real-time aggregation.",
      technologies: ["Java", "Apache Kafka", "Elasticsearch", "Python"],
      category: "backend",
      features: [
        "Stream processing architecture",
        "Real-time data aggregation",
        "Automated data validation",
        "Error recovery mechanisms",
        "Comprehensive audit logging"
      ],
      metrics: [
        { value: "10TB+", label: "Daily Data" },
        { value: "100K", label: "Events/sec" },
        { value: "Real-time", label: "Processing" }
      ],
      link: "#"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="bg-expensify-darkgreen p-6 rounded-lg border border-[#1A3D32]">
        <h1 className="text-4xl font-bold text-expensify-light mb-4">Projects</h1>
        <p className="text-expensify-light opacity-90">
          Showcasing my expertise in building scalable applications
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12 space-x-4">
            {['all', 'backend', 'api', 'infrastructure'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category as typeof filter)}
                className={`px-6 py-2 rounded-lg transition duration-300 ${
                  filter === category
                    ? 'bg-expensify-green text-expensify-darkgreen'
                    : 'bg-expensify-buttonGreen bg-opacity-30 text-expensify-light border border-expensify-green'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-expensify-buttonGreen bg-opacity-30 rounded-xl p-8 border border-expensify-green hover:bg-opacity-40 transition duration-300">
                <h3 className="text-2xl font-semibold text-expensify-green mb-4">
                  {project.title}
                </h3>
                <p className="text-expensify-light mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-expensify-darkgreen px-4 py-1.5 rounded-lg text-sm text-expensify-green font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-expensify-green text-xl font-bold mb-1">{metric.value}</div>
                        <div className="text-expensify-light text-sm">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-expensify-light flex items-start">
                        <span className="text-expensify-green mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center pt-4">
                    {project.github && (
                      <a 
                        href={project.github}
                        className="text-expensify-green hover:text-expensify-light transition duration-300"
                      >
                        View Code
                      </a>
                    )}
                    <a 
                      href={project.link}
                      className="bg-expensify-green text-expensify-darkgreen px-6 py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
                    >
                      Case Study
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;