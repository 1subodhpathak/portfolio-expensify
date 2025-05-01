const Hero = () => {
  return (
    <section className="bg-expensify-darkgreen text-expensify-light min-h-screen flex flex-col">
      {/* Top section with title */}
      <div className="container mx-auto px-6 pt-12 mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Backend-Focused <span className="text-expensify-green">Full Stack</span>
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-expensify-green">
            Engineer
          </h1>
        </div>
      </div>
      
      {/* Main content section with left and right columns */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="md:w-1/2 space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-expensify-light leading-relaxed">
                Specialized in building scalable backend systems and APIs with
                <span className="text-expensify-green"> enterprise-grade architecture</span>
              </p>
            </div>
            
            <div className="bg-expensify-buttonGreen p-6 rounded-lg border border-expensify-green bg-opacity-30">
              <h3 className="text-expensify-green font-semibold mb-3">Why Expensify?</h3>
              <p className="text-expensify-light leading-relaxed">
                Passionate about revolutionizing expense management through robust backend systems
                and scalable API solutions. Ready to contribute to Expensify's mission with
                expertise in high-performance distributed systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/YOUR_GITHUB_USERNAME"  // Replace YOUR_GITHUB_USERNAME with your actual GitHub username
                target="_blank"
                rel="noopener noreferrer"
                className="bg-expensify-green text-expensify-darkgreen font-medium py-3 px-8 rounded-md transition duration-300 hover:bg-opacity-90 flex items-center gap-2"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View my work
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-expensify-buttonGreen p-6 rounded-lg shadow-xl w-full max-w-md border border-expensify-green bg-opacity-30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-expensify-light text-sm font-mono">backend-stack.php</div>
              </div>
              <div className="font-mono text-sm">
                <p className="text-expensify-green">class <span className="text-expensify-light">BackendEngineer</span> {'{'}</p>
                <p className="text-expensify-light ml-4">private $expertise = [</p>
                <p className="text-expensify-green ml-8">'JavaScript', 'React', 'PHP', 'C++',</p>
                <p className="text-expensify-green ml-8">'API Optimization', 'System Architecture',</p>
                <p className="text-expensify-green ml-8">'Real-time Processing', 'Distributed Systems',</p>
                <p className="text-expensify-light ml-4">];</p>
                <p className="text-expensify-light ml-4">private $focus = 'Enterprise Solutions';</p>
                <p className="text-expensify-light ml-4">private $experience = '3+ years';</p>
                <p className="text-expensify-green">{'}'}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-expensify-buttonGreen p-6 rounded-lg border border-expensify-green bg-opacity-30">
            <h3 className="text-expensify-green font-bold text-3xl mb-2">3+</h3>
            <p className="text-expensify-light">Years Backend Development</p>
          </div>
          <div className="bg-expensify-buttonGreen p-6 rounded-lg border border-expensify-green bg-opacity-30">
            <h3 className="text-expensify-green font-bold text-3xl mb-2">20+</h3>
            <p className="text-expensify-light">APIs Designed & Optimized</p>
          </div>
          <div className="bg-expensify-buttonGreen p-6 rounded-lg border border-expensify-green bg-opacity-30">
            <h3 className="text-expensify-green font-bold text-3xl mb-2">25+</h3>
            <p className="text-expensify-light">Enterprise Projects</p>
          </div>
          <div className="bg-expensify-buttonGreen p-6 rounded-lg border border-expensify-green bg-opacity-30">
            <h3 className="text-expensify-green font-bold text-3xl mb-2">90+</h3>
            <p className="text-expensify-light">GitHub Contributions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;