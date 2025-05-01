const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "DataSense",
      period: "2023 - Present",
      description: "Leading development of scalable, gamified learning platforms focused on SQL and Python skill-building.",
      achievements: [
        "Architected real-time code execution and grading system using Docker and FastAPI",
        "Led development of gamified UI and XP-based progression system improving user engagement",
        "Designed a modular backend enabling multi-language support with isolated execution environments",
        "Integrated PostgreSQL + Redis caching and optimized leaderboard queries for scale"
      ],
      technologies: ["React", "FastAPI", "PostgreSQL", "Redis", "Docker", "Python"]
    },
    {
      title: "Software Developer",
      company: "Dandalee",
      period: "2023 (6 months)",
      description: "Joined as a freelance developer, transitioned to full-time to finalize and launch a Supabase-powered marketplace platform.",
      achievements: [
        "Integrated full transaction flow using Duplo for payment processing",
        "Implemented Algolia-powered search and result filtering for product discovery",
        "Optimized performance and accessibility across key marketplace flows",
        "Delivered backend integration for role-based permissions and messaging in project dashboard"
      ],
      technologies: ["Next.js", "Supabase", "Duplo", "Algolia", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Full Stack Developer",
      company: "MobyTick Trading",
      period: "2021 - 2023",
      description: "Joined as a freelance contributor, transitioned to full-time to lead frontend and backend efforts for a real-time trading platform.",
      achievements: [
        "Built and scaled real-time trading dashboards using React and WebSockets",
        "Integrated multiple Polygon APIs for historical and real-time stock data analysis",
        "Created seasonal and technical analysis pipelines using Node.js and MongoDB",
        "Reduced latency of live data feed by 70% using efficient streaming and caching"
      ],
      technologies: ["React", "Node.js", "MongoDB", "WebSocket", "Express.js", "Polygon API"]
    }
  ];
  

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="bg-expensify-darkgreen p-6 rounded-lg border border-[#1A3D32]">
        <h1 className="text-4xl font-bold text-expensify-light mb-4">Professional Experience</h1>
        <p className="text-expensify-light opacity-90">
          Specialized in building and scaling backend systems for financial applications
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
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