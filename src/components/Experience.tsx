const Experience = () => {
  const experiences = [
    {
      title: "Senior Backend Engineer",
      company: "FinTech Solutions Inc.",
      period: "2021 - Present",
      description: "Leading the development of high-performance financial transaction systems",
      achievements: [
        "Architected and implemented a distributed payment processing system handling 2M+ daily transactions",
        "Reduced API response times by 60% through query optimization and caching strategies",
        "Led migration from monolithic to microservices architecture improving system scalability",
        "Implemented real-time monitoring reducing incident response time by 75%"
      ],
      technologies: ["PHP", "Java", "PostgreSQL", "Redis", "Kafka"]
    },
    {
      title: "Backend Developer",
      company: "Enterprise Systems Ltd",
      period: "2019 - 2021",
      description: "Developed scalable backend services for financial applications",
      achievements: [
        "Built RESTful APIs serving 1M+ daily requests with 99.9% uptime",
        "Designed and implemented a distributed caching system reducing load times by 45%",
        "Developed automated failover mechanisms for critical services",
        "Created comprehensive API documentation and developer guides"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "RabbitMQ", "Docker"]
    },
    {
      title: "Software Engineer",
      company: "Digital Solutions Corp",
      period: "2018 - 2019",
      description: "Focused on backend systems and database optimization",
      achievements: [
        "Implemented efficient data processing pipelines for financial transactions",
        "Reduced database query execution time by 50% through optimization",
        "Developed automated testing framework improving code coverage to 90%",
        "Created reusable backend components used across multiple projects"
      ],
      technologies: ["PHP", "MongoDB", "Redis", "Jenkins", "AWS"]
    }
  ];

  return (
    <section id="experience" className="bg-expensify-darkgreen py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-expensify-light mb-6 text-center">
            Professional Experience
          </h2>
          <p className="text-expensify-light text-center mb-16 max-w-3xl mx-auto opacity-90">
            Specialized in building and scaling backend systems for financial applications
          </p>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-expensify-buttonGreen bg-opacity-30 rounded-xl p-8 border border-expensify-green"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-expensify-green mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-expensify-light text-lg mb-2">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-expensify-green font-medium md:text-lg bg-expensify-darkgreen px-4 py-1 rounded-lg">
                    {exp.period}
                  </span>
                </div>

                <p className="text-expensify-light leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="space-y-6">
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-expensify-green mt-1">•</span>
                        <span className="text-expensify-light leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-expensify-green border-opacity-30">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="bg-expensify-darkgreen px-3 py-1 rounded-lg text-sm text-expensify-green"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;