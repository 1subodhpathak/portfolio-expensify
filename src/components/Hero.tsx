const Hero = () => {
  return (
    <section className="bg-expensify-dark text-black py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Backend-Focused <span className="text-expensify-green">Full Stack Engineer</span>
            </h1>
            <p className="text-xl mb-6 text-expensify-gray">
              Specializing in APIs, databases, and system architecture with
              <span className="text-expensify-blue"> React Native</span> frontend capabilities
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="bg-expensify-green hover:bg-expensify-blue text-black font-medium py-2 px-6 rounded-md transition duration-300"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="bg-transparent border border-expensify-gray hover:border-expensify-green text-black font-medium py-2 px-6 rounded-md transition duration-300"
              >
                Contact Me
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
                <div className="ml-4 text-expensify-dark text-sm font-mono">terminal</div>
              </div>
              <div className="bg-gray-900 p-4 rounded text-sm font-mono">
                <p className="text-green-400">$ node server.js</p>
                <p className="text-white mt-2">Server running on port 3000</p>
                <p className="text-white">Connected to database</p>
                <p className="text-green-400 mt-4">$ curl localhost:3000/api/status</p>
                <p className="text-white mt-2">{"{"} "status": "online", "version": "3.0.7" {"}"}</p>
                <p className="text-expensify-green mt-4 animate-pulse flex items-center">
                  <span className="inline-block w-2 h-5 bg-expensify-green mr-2"></span>_
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
          <div className="w-full md:w-auto">
            <h3 className="text-expensify-green font-bold text-xl">3+</h3>
            <p className="text-expensify-gray">Years Backend Development</p>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="text-expensify-green font-bold text-xl">10+</h3>
            <p className="text-expensify-gray">Projects Completed</p>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="text-expensify-green font-bold text-xl">5+</h3>
            <p className="text-expensify-gray">APIs Designed</p>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="text-expensify-green font-bold text-xl">2+</h3>
            <p className="text-expensify-gray">Years React Native</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;