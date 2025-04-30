const Hero = () => {
  return (
    <section className="bg-expensify-darkgreen text-expensify-green min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Full Stack Engineer
                <span className="text-expensify-light block mt-2">for Expensify</span>
              </h1>
              <p className="text-xl mb-6 text-expensify-light opacity-90">
                Passionate about building scalable financial solutions with
                <span className="text-expensify-green"> modern tech stacks</span>
              </p>
            </div>
            
            <div className="bg-expensify-buttonGreen bg-opacity-50 p-6 rounded-lg mb-8">
              <h3 className="text-expensify-light font-semibold mb-2">Why Expensify?</h3>
              <p className="text-expensify-light opacity-80">
                Driven to revolutionize expense management through innovative solutions.
                Looking to contribute to Expensify's mission of making expense reports that don't suck.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#coding-journey" 
                className="bg-expensify-green text-expensify-darkgreen font-medium py-3 px-8 rounded-md transition duration-300 hover:bg-opacity-90"
              >
                My Coding Journey
              </a>
              <a 
                href="#projects" 
                className="bg-expensify-buttonGreen text-expensify-light font-medium py-3 px-8 rounded-md transition duration-300 hover:bg-opacity-90 border border-expensify-green"
              >
                View Projects
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-expensify-light p-6 rounded-lg shadow-lg w-full max-w-md">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-expensify-dark text-sm font-mono">portfolio.js</div>
              </div>
              <div className="bg-expensify-darkgreen p-4 rounded text-sm font-mono">
                <p className="text-green-400">const developer = {"{"}</p>
                <p className="text-white ml-4">name: "Your Name",</p>
                <p className="text-white ml-4">role: "Full Stack Engineer",</p>
                <p className="text-white ml-4">focus: ["Backend", "API Design", "React"],</p>
                <p className="text-white ml-4">experience: "5+ years",</p>
                <p className="text-white ml-4">interests: ["Financial Tech", "Scalability"]</p>
                <p className="text-green-400">{"}"}</p>
                <p className="text-expensify-green mt-4 animate-pulse flex items-center">
                  <span className="inline-block w-2 h-5 bg-expensify-green mr-2"></span>_
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
          <div className="w-full md:w-auto">
            <h3 className="text-expensify-green font-bold text-2xl">5+</h3>
            <p className="text-expensify-light">Years Full Stack</p>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="text-expensify-green font-bold text-2xl">20+</h3>
            <p className="text-expensify-light">Projects Delivered</p>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="text-expensify-green font-bold text-2xl">10+</h3>
            <p className="text-expensify-light">APIs Designed</p>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="text-expensify-green font-bold text-2xl">3+</h3>
            <p className="text-expensify-light">Financial Apps</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;