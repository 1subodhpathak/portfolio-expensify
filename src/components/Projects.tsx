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
      title: "Real-Time Stock Trading Dashboard",
      description: "A full-stack MERN application enabling users to monitor real-time stock data, place simulated trades, and view technical analysis indicators.",
      technologies: ["React", "Node.js", "MongoDB", "WebSockets", "Polygon API"],
      category: "backend",
      features: [
        "Live stock price updates via WebSockets",
        "Technical indicators (EMA, RSI, MACD) using technicalindicators library",
        "Responsive dashboard with charting using Chart.js",
        "User-friendly simulated trading experience",
        "Integrated with Polygon APIs for historical and real-time data"
      ],
      github: "https://github.com/subodhpathak/moby-tick-trading-app",
      metrics: [
        { value: "10K+", label: "Data Points/Day" },
        { value: "100ms", label: "Avg Latency" },
        { value: "99.9%", label: "Uptime" }
      ],
      link: "#"
    },
    {
      id: 2,
      title: "Financial Metrics API for TradingView",
      description: "Custom API built in Node.js to calculate and serve financial indicators like SMA, EMA, and Buy/Sell signals for frontend charting applications.",
      technologies: ["TypeScript", "Node.js", "Express", "AlphaVantage"],
      category: "api",
      features: [
        "Efficient calculation of EMA/SMA indicators",
        "Handles thousands of daily requests",
        "Lightweight, stateless architecture",
        "Integrated rate limiter and error logging",
        "Simple REST endpoints for frontend integration"
      ],
      github: "https://github.com/subodhpathak/financial-indicators-api",
      metrics: [
        { value: "1M+", label: "Requests/Month" },
        { value: "95%", label: "Cache Hit Rate" },
        { value: "30ms", label: "Avg Response" }
      ],
      link: "#"
    },
    {
      id: 3,
      title: "E-Commerce Web App with Stripe Integration",
      description: "Full-stack e-commerce platform supporting secure payments, dynamic inventory management, and seamless user experience.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      category: "backend",
      features: [
        "Secure Stripe-based checkout flow",
        "Product catalog with filtering and dynamic stock updates",
        "JWT-authenticated user sessions with role-based access",
        "Order tracking with status updates",
        "Admin dashboard for managing products and payments"
      ],
      github: "https://github.com/yourusername/ecommerce-stripe-app",
      metrics: [
        { value: "500K+", label: "Jobs Processed/Day" },
        { value: "100%", label: "Job Retry Success" },
        { value: "<2s", label: "Avg Job Time" }
      ],
      link: "#"
    },
    {
      id: 4,
      title: "ETL Pipeline for Seasonal Stock Patterns",
      description: "Pipeline to extract, transform, and analyze historical stock data for recurring seasonal patterns to support trading decisions.",
      technologies: ["Python", "Pandas", "MongoDB", "Apache Airflow"],
      category: "backend",
      features: [
        "Custom data normalization logic",
        "Seasonal pattern detection using moving averages",
        "Automated daily runs via Airflow DAGs",
        "Results stored in MongoDB for dashboard use",
        "Visualizations with Matplotlib and Seaborn"
      ],
      metrics: [
        { value: "7TB+", label: "Data Analyzed" },
        { value: "Daily", label: "Run Frequency" },
        { value: "95%", label: "Detection Accuracy" }
      ],
      link: "#"
    },
    {
      id: 5,
      title: "Real-Time Market Data Delivery System",
      description: "Built an infrastructure for streaming real-time stock prices and alerts using WebSockets, optimizing delivery for trading dashboards and mobile apps.",
      technologies: ["Node.js", "WebSockets", "Redis", "MongoDB", "Polygon API"],
      category: "infrastructure",
      features: [
        "Real-time data pipeline powered by Polygon APIs",
        "WebSocket server handling thousands of concurrent clients",
        "Redis pub/sub for fast event broadcasting",
        "Dynamic throttling to prevent data overflows",
        "High-availability deployment with fallback mechanisms"
      ],
      metrics: [
        { value: "10K+", label: "Live Clients" },
        { value: "<1s", label: "Latency" },
        { value: "99.9%", label: "Uptime" }
      ],
      github: "https://github.com/yourusername/market-streaming-system",
      link: "#"
    },
    {
      id: 6,
      title: "Gamified Python & SQL Practice Platform",
      description: "Developed a LeetCode-style platform for Python and SQL practice with real-time code execution, scoring system, and game-inspired UI flow.",
      technologies: ["React", "Python", "Docker", "PostgreSQL", "Redis", "FastAPI"],
      category: "infrastructure",
      features: [
        "Real-time code execution engine using isolated Docker containers",
        "Gamified progression with XP, ranks, and rewards",
        "Integrated leaderboard and performance tracking",
        "Dynamic question generation and test case validation",
        "Modular backend for future language support"
      ],
      metrics: [
        { value: "2K+", label: "Daily Users" },
        { value: "100%", label: "Sandboxed Execution" },
        { value: "<500ms", label: "Avg Run Time" }
      ],
      github: "https://github.com/yourusername/datasense-practice-platform",
      link: "https://practice.datasenseai.com/"
    }   
  ];
  

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="bg-expensify-darkgreen p-4 md:p-6 rounded-lg border border-[#1A3D32]">
        <h1 className="text-3xl md:text-4xl font-bold text-expensify-light mb-2 md:mb-4">Projects</h1>
        <p className="text-expensify-light opacity-90 text-sm md:text-base">
          Showcasing my expertise in building scalable applications
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {['all', 'backend', 'api', 'infrastructure'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category as typeof filter)}
                className={`px-3 md:px-6 py-1.5 md:py-2 rounded-lg transition duration-300 text-sm md:text-base ${
                  filter === category
                    ? 'bg-expensify-green text-expensify-darkgreen'
                    : 'bg-expensify-buttonGreen bg-opacity-30 text-expensify-light border border-expensify-green'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-expensify-buttonGreen bg-opacity-30 rounded-xl p-4 md:p-8 border border-expensify-green hover:bg-opacity-40 transition duration-300">
                <h3 className="text-xl md:text-2xl font-semibold text-expensify-green mb-3 md:mb-4">
                  {project.title}
                </h3>
                <p className="text-expensify-light mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
                
                <div className="space-y-4 md:space-y-6">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-expensify-darkgreen px-3 md:px-4 py-1 md:py-1.5 rounded-lg text-xs md:text-sm text-expensify-green font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 md:gap-4">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-expensify-green text-lg md:text-xl font-bold mb-0.5 md:mb-1">{metric.value}</div>
                        <div className="text-expensify-light text-xs md:text-sm">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-1 md:space-y-2">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-expensify-light text-sm md:text-base flex items-start">
                        <span className="text-expensify-green mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex justify-between items-center pt-4">
                    {project.github && (
                      <a 
                        href={project.github}
                        className="text-sm md:text-base text-expensify-green hover:text-expensify-light transition duration-300"
                      >
                        View Code
                      </a>
                    )}
                    <a 
                      href={project.link}
                      className="bg-expensify-green text-expensify-darkgreen px-4 md:px-6 py-1.5 md:py-2 rounded-lg text-sm md:text-base hover:bg-opacity-90 transition duration-300"
                    >
                      View Live
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