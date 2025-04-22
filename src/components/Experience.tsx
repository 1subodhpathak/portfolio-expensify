
const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Backend Developer",
      company: "TechSolutions Inc.",
      period: "2023 - Present",
      description: "Leading the development of API systems and database architecture for enterprise clients.",
      achievements: [
        "Optimized API response times by 40% through query optimization and caching strategies",
        "Implemented a microservices architecture that improved system scalability",
        "Designed and built RESTful APIs serving over 5 million requests daily",
        "Mentored junior developers on backend best practices and design patterns"
      ],
      technologies: ["Node.js", "MongoDB", "Redis", "Docker", "AWS"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Innovate Applications",
      period: "2021 - 2023",
      description: "Developed full stack applications with a focus on backend architecture and data processing.",
      achievements: [
        "Built a real-time data processing system handling 100,000+ transactions daily",
        "Implemented automated testing that increased code coverage from 65% to 90%",
        "Developed APIs for mobile applications used by 50,000+ users",
        "Contributed to frontend development using React Native for cross-platform mobile apps"
      ],
      technologies: ["JavaScript", "React", "React Native", "Express", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Junior Software Engineer",
      company: "WebTech Solutions",
      period: "2020 - 2021",
      description: "Contributed to backend development for e-commerce and financial applications.",
      achievements: [
        "Developed RESTful APIs for user authentication and product management",
        "Implemented database schema optimizations that improved query performance by 25%",
        "Created a CI/CD pipeline that reduced deployment time by 70%",
        "Collaborated with frontend teams to ensure seamless API integration"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "Jenkins", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-expensify-dark">Professional</span>
          <span className="text-expensify-green"> Experience</span>
        </h2>

        <div className="relative border-l-2 border-expensify-green ml-3 md:ml-6 pl-6 md:pl-8 pb-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`mb-12 ${index === experiences.length - 1 ? 'mb-0' : ''}`}>
              <div className="absolute w-4 h-4 bg-expensify-green rounded-full -left-2 md:-left-2.5 border-4 border-white"></div>
              <div className="bg-expensify-light rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-expensify-dark">{exp.title}</h3>
                  <div className="text-expensify-green font-medium mt-1 md:mt-0">{exp.period}</div>
                </div>
                <div className="mb-4">
                  <span className="bg-expensify-dark text-white text-sm py-1 px-3 rounded-full">{exp.company}</span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                
                <h4 className="font-semibold text-expensify-blue mb-2">Key Achievements:</h4>
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-expensify-green mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;