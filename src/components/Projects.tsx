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
  metrics: string;
  link: string;
}

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'backend' | 'fullstack' | 'api'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Financial Transaction API",
      description: "Built a scalable REST API handling financial transactions with real-time processing and validation.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis"],
      image: "/images/expense-api.png", // Add placeholder images in your public folder
      category: "backend",
      features: [
        "RESTful API design with comprehensive documentation",
        "Optimized database queries reducing response time by 40%",
        "Caching layer for frequently accessed data",
        "Robust authentication and authorization system",
        "Comprehensive test coverage with Jest"
      ],
      github: "https://github.com/yourusername/expense-api",
      metrics: "Processes 100K+ transactions daily",
      link: "#"
    },
    {
      id: 2,
      title: "Expense Management Dashboard",
      description: "React-based dashboard for managing and analyzing expense reports with data visualization.",
      technologies: ["React", "TypeScript", "D3.js", "Material-UI"],
      image: "/images/expense-dashboard.png",
      category: "fullstack",
      features: [
        "Real-time updates using WebSockets",
        "Interactive data visualizations",
        "Complex data aggregation pipeline",
        "Role-based access control",
        "Customizable alert system"
      ],
      github: "https://github.com/yourusername/expense-dashboard",
      metrics: "Reduced report processing time by 60%",
      link: "#"
    },
    {
      id: 3,
      title: "Receipt OCR Service",
      description: "Microservice for extracting data from receipt images using machine learning.",
      technologies: ["Python", "Flask", "TensorFlow", "AWS Lambda"],
      image: "/images/receipt-scanner.png",
      category: "api",
      features: [
        "Machine learning model for receipt data extraction",
        "Offline-first architecture for mobile users",
        "Background synchronization with the server",
        "Secure image storage and processing",
        "User-friendly interface for reviewing extracted data"
      ],
      github: "https://github.com/yourusername/receipt-scanner",
      metrics: "95% accuracy on receipt data extraction",
      link: "#"
    },
    {
      id: 4,
      title: "Real-time Payment System",
      description: "Distributed system for processing real-time payments with fault tolerance.",
      technologies: ["Go", "gRPC", "Kafka", "MongoDB"],
      image: "/images/expense-api.png",
      category: "backend",
      features: [
        "Low-overhead API monitoring",
        "Customizable performance dashboards",
        "Anomaly detection algorithms",
        "Integration with alert systems",
        "Historical performance data analysis"
      ],
      github: "https://github.com/yourusername/api-monitor",
      metrics: "Handles 1000+ transactions per second",
      link: "#"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="bg-expensify-darkgreen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-expensify-light mb-12 text-center">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-expensify-buttonGreen bg-opacity-50 rounded-lg p-6 hover:bg-opacity-70 transition duration-300">
              <h3 className="text-xl font-semibold text-expensify-green mb-3">
                {project.title}
              </h3>
              <p className="text-expensify-light mb-4 opacity-90">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-expensify-darkgreen px-3 py-1 rounded-full text-sm text-expensify-green"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-expensify-green text-sm">
                  {project.metrics}
                </span>
                <a 
                  href={project.link}
                  className="text-expensify-green hover:text-expensify-light transition duration-300"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;