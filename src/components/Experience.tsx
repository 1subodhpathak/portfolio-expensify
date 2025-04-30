const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Engineer",
      company: "FinTech Solutions Inc.",
      period: "2021 - Present",
      description: "Leading development of financial transaction processing systems and APIs",
      achievements: [
        "Architected and implemented a high-throughput payment processing system",
        "Reduced API response times by 60% through optimization",
        "Led team of 5 developers in modernizing legacy systems",
        "Implemented real-time transaction monitoring and alerting"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Tech Innovators Ltd",
      period: "2019 - 2021",
      description: "Developed and maintained enterprise-scale web applications",
      achievements: [
        "Built RESTful APIs serving 1M+ requests daily",
        "Implemented OAuth2 authentication system",
        "Reduced database query times by 45%",
        "Mentored junior developers in best practices"
      ]
    },
    {
      title: "Backend Developer",
      company: "Digital Solutions Corp",
      period: "2018 - 2019",
      description: "Focused on backend systems and database optimization",
      achievements: [
        "Developed microservices architecture for scalability",
        "Implemented caching strategy reducing load times by 50%",
        "Created automated testing pipeline",
        "Contributed to open-source projects"
      ]
    }
  ];

  return (
    <section id="experience" className="bg-expensify-darkgreen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-expensify-light mb-12 text-center">
          Professional Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-expensify-buttonGreen bg-opacity-50 rounded-lg p-8 hover:bg-opacity-70 transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-expensify-green mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-expensify-light opacity-90 mb-1">
                    {exp.company}
                  </p>
                </div>
                <span className="text-expensify-green text-sm md:text-base">
                  {exp.period}
                </span>
              </div>

              <p className="text-expensify-light opacity-90 mb-4">
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-expensify-green mr-2">→</span>
                    <span className="text-expensify-light opacity-90">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;