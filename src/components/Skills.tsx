const Skills = () => {
  const backendSkills = [
    { name: 'Node.js', level: 90 },
    { name: 'PHP', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL/NoSQL', level: 90 },
    { name: 'Docker', level: 80 },
  ];

  const frontendSkills = [
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'React Native', level: 75 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Redux', level: 75 },
  ];

  const otherSkills = [
    { name: 'API Design', level: 95 },
    { name: 'System Architecture', level: 85 },
    { name: 'CI/CD', level: 80 },
    { name: 'Testing', level: 85 },
    { name: 'Git', level: 90 },
    { name: 'Performance Optimization', level: 85 },
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-expensify-dark font-medium">{name}</span>
        <span className="text-expensify-gray">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div 
          className="h-2 rounded-full bg-expensify-green" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-expensify-dark">Technical</span>
          <span className="text-expensify-green"> Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-expensify-light p-6 rounded-lg shadow">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-expensify-green flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-expensify-dark">Backend Development</h3>
            </div>
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div className="bg-expensify-light p-6 rounded-lg shadow">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-expensify-blue flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-expensify-dark">Frontend Development</h3>
            </div>
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div className="bg-expensify-light p-6 rounded-lg shadow">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-expensify-dark flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-expensify-dark">Other Skills</h3>
            </div>
            <div className="space-y-4">
              {otherSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-expensify-dark text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-expensify-green">Algorithm & Design Pattern Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800 p-3 rounded">
              <span className="block text-expensify-green font-medium mb-1">Data Structures</span>
              <span className="text-sm text-gray-300">Arrays, Linked Lists, Trees, Graphs</span>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <span className="block text-expensify-green font-medium mb-1">Sorting & Searching</span>
              <span className="text-sm text-gray-300">Quick Sort, Binary Search, Hashing</span>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <span className="block text-expensify-green font-medium mb-1">Design Patterns</span>
              <span className="text-sm text-gray-300">Factory, Singleton, Observer, Strategy</span>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <span className="block text-expensify-green font-medium mb-1">Problem Solving</span>
              <span className="text-sm text-gray-300">Dynamic Programming, Greedy Algorithms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;