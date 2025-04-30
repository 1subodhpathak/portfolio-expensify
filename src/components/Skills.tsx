const Skills = () => {
  const skills = {
    backend: [
      { name: "PHP", level: 90 },
      { name: "Java", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 85 },
      { name: "System Architecture", level: 88 }
    ],
    apis: [
      { name: "RESTful APIs", level: 92 },
      { name: "API Design", level: 88 },
      { name: "API Security", level: 85 },
      { name: "API Documentation", level: 90 },
      { name: "GraphQL", level: 82 }
    ],
    infrastructure: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Performance Optimization", level: 88 }
    ],
    frontend: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 82 },
      { name: "React Native", level: 78 },
      { name: "State Management", level: 85 }
    ]
  };

  return (
    <section id="skills" className="bg-expensify-darkgreen py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-expensify-light mb-6 text-center">
            Technical Expertise
          </h2>
          <p className="text-expensify-light text-center mb-16 max-w-3xl mx-auto opacity-90">
            Specialized in backend development with a focus on building scalable systems,
            optimizing APIs, and creating robust enterprise solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-expensify-buttonGreen bg-opacity-30 rounded-xl p-8 border border-expensify-green">
              <h3 className="text-2xl font-semibold mb-8 text-expensify-green">Backend Development</h3>
              <div className="space-y-6">
                {skills.backend.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-expensify-light text-lg">{skill.name}</span>
                      <span className="text-expensify-green">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-expensify-darkgreen rounded-full h-2.5">
                      <div 
                        className="bg-expensify-green h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-expensify-buttonGreen bg-opacity-30 rounded-xl p-8 border border-expensify-green">
              <h3 className="text-2xl font-semibold mb-8 text-expensify-green">API Development</h3>
              <div className="space-y-6">
                {skills.apis.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-expensify-light text-lg">{skill.name}</span>
                      <span className="text-expensify-green">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-expensify-darkgreen rounded-full h-2.5">
                      <div 
                        className="bg-expensify-green h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-expensify-buttonGreen bg-opacity-30 rounded-xl p-8 border border-expensify-green">
              <h3 className="text-2xl font-semibold mb-8 text-expensify-green">Infrastructure & DevOps</h3>
              <div className="space-y-6">
                {skills.infrastructure.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-expensify-light text-lg">{skill.name}</span>
                      <span className="text-expensify-green">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-expensify-darkgreen rounded-full h-2.5">
                      <div 
                        className="bg-expensify-green h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-expensify-buttonGreen bg-opacity-30 rounded-xl p-8 border border-expensify-green">
              <h3 className="text-2xl font-semibold mb-8 text-expensify-green">Frontend Skills</h3>
              <div className="space-y-6">
                {skills.frontend.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-expensify-light text-lg">{skill.name}</span>
                      <span className="text-expensify-green">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-expensify-darkgreen rounded-full h-2.5">
                      <div 
                        className="bg-expensify-green h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;