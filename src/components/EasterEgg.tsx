interface EasterEggProps {
  onClose: () => void;
}

const EasterEgg = ({ onClose }: EasterEggProps) => {
  const funFacts = [
    {
      icon: "🚀",
      title: "Quick Learner",
      description: "Mastered new technologies and frameworks in record time"
    },
    {
      icon: "🌟",
      title: "Open Source",
      description: "Active contributor to Expensify and other open source projects"
    },
    {
      icon: "🎯",
      title: "Problem Solver",
      description: "Identified and resolved critical production issues"
    },
    {
      icon: "🤝",
      title: "Team Player",
      description: "Excellent communication and collaboration skills"
    }
  ];

  const achievements = [
    {
      number: "48884",
      label: "PR Number",
      detail: "Successfully identified and resolved issues in Expensify"
    },
    {
      number: "99.9%",
      label: "System Uptime",
      detail: "Maintained high availability in production systems"
    },
    {
      number: "50+",
      label: "APIs",
      detail: "Designed and optimized for scalability"
    }
  ];

  const resources = [
    {
      icon: "📚",
      title: "Tech Stack",
      items: ["PHP", "JavaScript", "Node.js", "React", "PostgreSQL"]
    },
    {
      icon: "🛠️",
      title: "Tools",
      items: ["Git", "Docker", "AWS", "Redis", "Kafka"]
    }
  ];

  return (
    <div className="bg-expensify-darkgreen rounded-xl shadow-2xl w-[95%] md:w-full max-w-3xl overflow-hidden mx-4 md:mx-0">
      {/* Header */}
      <div className="bg-[#1A3D32] p-4 md:p-6 border-b border-expensify-green">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl md:text-2xl">🎮</span>
            <h2 className="text-xl md:text-2xl font-bold text-expensify-light">You Found a Secret!</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-expensify-light hover:text-expensify-green md:hidden"
          >
            ×
          </button>
        </div>
      </div>

      <div className="p-4 md:p-6 max-h-[70vh] md:max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-expensify-green scrollbar-track-expensify-darkgreen">
        {/* Fun Facts */}
        <div className="mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-semibold text-expensify-green mb-3 md:mb-4">Fun Facts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {funFacts.map((fact, index) => (
              <div 
                key={index}
                className="bg-expensify-buttonGreen bg-opacity-30 p-4 rounded-lg border border-expensify-green"
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{fact.icon}</span>
                  <div>
                    <h4 className="text-expensify-green font-medium">{fact.title}</h4>
                    <p className="text-expensify-light text-sm opacity-90">{fact.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-semibold text-expensify-green mb-3 md:mb-4">Key Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-expensify-buttonGreen bg-opacity-30 p-4 rounded-lg border border-expensify-green text-center"
              >
                <div className="text-2xl font-bold text-expensify-green mb-1">
                  {achievement.number}
                </div>
                <div className="text-expensify-light font-medium mb-2">
                  {achievement.label}
                </div>
                <p className="text-expensify-light text-sm opacity-90">
                  {achievement.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-semibold text-expensify-green mb-3 md:mb-4">Tech Arsenal</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {resources.map((resource, index) => (
              <div 
                key={index}
                className="bg-expensify-buttonGreen bg-opacity-30 p-4 rounded-lg border border-expensify-green"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">{resource.icon}</span>
                  <h4 className="text-expensify-green font-medium">{resource.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {resource.items.map((item, i) => (
                    <span 
                      key={i}
                      className="bg-expensify-darkgreen px-3 py-1 rounded-lg text-sm text-expensify-green"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center pt-2 md:pt-4">
          <button
            onClick={onClose}
            className="w-full md:w-auto bg-expensify-green text-expensify-darkgreen font-medium py-2.5 md:py-3 px-6 md:px-8 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default EasterEgg;