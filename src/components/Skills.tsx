const Skills = () => {
  const skills = {
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Go", level: 75 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 }
    ],
    frontend: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "React Native", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Redux", level: 80 }
    ],
    devops: [
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "Kubernetes", level: 65 }
    ],
    other: [
      { name: "Git", level: 90 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 75 },
      { name: "System Design", level: 80 }
    ]
  };

  return (
    <section id="skills" className="bg-expensify-light py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-expensify-darkgreen mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-expensify-darkgreen rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-expensify-green">Backend Development</h3>
            <div className="space-y-4">
              {skills.backend.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-expensify-light">{skill.name}</span>
                    <span className="text-expensify-green">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-expensify-buttonGreen rounded-full h-2">
                    <div 
                      className="bg-expensify-green h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-expensify-darkgreen rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-expensify-green">Frontend Development</h3>
            <div className="space-y-4">
              {skills.frontend.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-expensify-light">{skill.name}</span>
                    <span className="text-expensify-green">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-expensify-buttonGreen rounded-full h-2">
                    <div 
                      className="bg-expensify-green h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-expensify-darkgreen rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-expensify-green">DevOps & Cloud</h3>
            <div className="space-y-4">
              {skills.devops.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-expensify-light">{skill.name}</span>
                    <span className="text-expensify-green">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-expensify-buttonGreen rounded-full h-2">
                    <div 
                      className="bg-expensify-green h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-expensify-darkgreen rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-expensify-green">Other Skills</h3>
            <div className="space-y-4">
              {skills.other.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-expensify-light">{skill.name}</span>
                    <span className="text-expensify-green">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-expensify-buttonGreen rounded-full h-2">
                    <div 
                      className="bg-expensify-green h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;