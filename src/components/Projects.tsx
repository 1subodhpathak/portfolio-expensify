import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category: 'backend' | 'fullstack' | 'api';
  features: string[];
  github?: string;
  demo?: string;
}

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'backend' | 'fullstack' | 'api'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Expense API System",
      description: "A high-performance API system for handling expense tracking and reporting with optimized database queries and caching mechanisms.",
      technologies: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
      image: "/images/expense-api.png", // Add placeholder images in your public folder
      category: "backend",
      features: [
        "RESTful API design with comprehensive documentation",
        "Optimized database queries reducing response time by 40%",
        "Caching layer for frequently accessed data",
        "Robust authentication and authorization system",
        "Comprehensive test coverage with Jest"
      ],
      github: "https://github.com/yourusername/expense-api"
    },
    {
      id: 2,
      title: "Accounting Integration Service",
      description: "A microservice that connects expense systems with various accounting software through standardized API interfaces.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "RabbitMQ", "Kubernetes"],
      image: "/images/accounting-integration.png",
      category: "api",
      features: [
        "Adapter pattern for connecting multiple accounting systems",
        "Asynchronous processing using message queues",
        "Transaction management and data consistency",
        "Comprehensive logging and monitoring",
        "Automated deployment pipeline"
      ],
      github: "https://github.com/yourusername/accounting-integration"
    },
    {
      id: 3,
      title: "Receipt Scanner Mobile App",
      description: "A React Native application with backend OCR processing to extract data from receipts and categorize expenses.",
      technologies: ["React Native", "Node.js", "TensorFlow", "MongoDB", "AWS S3"],
      image: "/images/receipt-scanner.png",
      category: "fullstack",
      features: [
        "Machine learning model for receipt data extraction",
        "Offline-first architecture for mobile users",
        "Background synchronization with the server",
        "Secure image storage and processing",
        "User-friendly interface for reviewing extracted data"
      ],
      github: "https://github.com/yourusername/receipt-scanner",
      demo: "https://yourdemolink.com"
    },
    {
      id: 4,
      title: "Real-time Expense Dashboard",
      description: "A dashboard system showing real-time expense data with advanced filtering and visualization capabilities.",
      technologies: ["Node.js", "WebSockets", "React", "D3.js", "MongoDB"],
      image: "/images/expense-dashboard.png",
      category: "fullstack",
      features: [
        "Real-time updates using WebSockets",
        "Interactive data visualizations",
        "Complex data aggregation pipeline",
        "Role-based access control",
        "Customizable alert system"
      ],
      github: "https://github.com/yourusername/expense-dashboard"
    },
    {
      id: 5,
      title: "API Performance Monitoring Tool",
      description: "A tool for monitoring and analyzing API performance metrics with alerting capabilities.",
      technologies: ["Go", "Prometheus", "Grafana", "PostgreSQL", "Docker"],
      image: "/images/api-monitoring.png",
      category: "backend",
      features: [
        "Low-overhead API monitoring",
        "Customizable performance dashboards",
        "Anomaly detection algorithms",
        "Integration with alert systems",
        "Historical performance data analysis"
      ],
      github: "https://github.com/yourusername/api-monitor"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-16 bg-expensify-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="text-expensify-dark">Featured</span>
          <span className="text-expensify-green"> Projects</span>
        </h2>
        <p className="text-center text-gray-600 mb-8">Showcasing my backend expertise and full stack capabilities</p>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium border rounded-l-lg ${
                filter === 'all' 
                  ? 'bg-expensify-green text-white border-expensify-green' 
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('backend')}
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r ${
                filter === 'backend' 
                  ? 'bg-expensify-green text-white border-expensify-green' 
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              Backend
            </button>
            <button 
              onClick={() => setFilter('api')}
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r ${
                filter === 'api' 
                  ? 'bg-expensify-green text-white border-expensify-green' 
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              API
            </button>
            <button 
              onClick={() => setFilter('fullstack')}
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r rounded-r-lg ${
                filter === 'fullstack' 
                  ? 'bg-expensify-green text-white border-expensify-green' 
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              Full Stack
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                {/* This would be an image in a real project */}
                <div className="text-gray-500 text-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Project Image: {project.title}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-expensify-dark mb-2">{project.title}</h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    project.category === 'backend' ? 'bg-expensify-green text-white' : 
                    project.category === 'api' ? 'bg-expensify-blue text-white' : 
                    'bg-expensify-dark text-white'
                  }`}>
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-expensify-dark mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-4 h-4 text-expensify-green mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-expensify-blue hover:text-expensify-green flex items-center text-sm font-medium">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z" clipRule="evenodd" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-expensify-blue hover:text-expensify-green flex items-center text-sm font-medium">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;