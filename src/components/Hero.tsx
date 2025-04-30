const Hero = () => {
  return (
    <section className="bg-expensify-darkgreen text-expensify-light min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                Backend-Focused
                <span className="text-expensify-green block mt-2">Full Stack Engineer</span>
              </h1>
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
                href="#backend-expertise" 
                className="bg-expensify-green text-expensify-darkgreen font-medium py-3 px-8 rounded-md transition duration-300 hover:bg-opacity-90"
              >
                Backend Expertise
              </a>
              <a 
                href="#system-architecture" 
                className="bg-expensify-buttonGreen text-expensify-light font-medium py-3 px-8 rounded-md transition duration-300 hover:bg-opacity-90 border border-expensify-green"
              >
                System Design
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
              <div className="bg-expensify-darkgreen p-4 rounded text-sm font-mono leading-relaxed">
                <p className="text-expensify-green">class <span className="text-expensify-light">BackendEngineer</span> {'{'}</p>
                <p className="text-expensify-light ml-4">private $expertise = [</p>
                <p className="text-expensify-green ml-8">'PHP', 'JavaScript', 'Node.js',</p>
                <p className="text-expensify-green ml-8">'API Design', 'System Architecture',</p>
                <p className="text-expensify-green ml-8">'Database Optimization'</p>
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
            <h3 className="text-expensify-green font-bold text-3xl mb-2">5+</h3>
            <p className="text-expensify-light">Years Backend Development</p>
          </div>
          <div className="bg-expensify-buttonGreen p-6 rounded-lg border border-expensify-green bg-opacity-30">
            <h3 className="text-expensify-green font-bold text-3xl mb-2">50+</h3>
            <p className="text-expensify-light">APIs Designed & Optimized</p>
          </div>
          <div className="bg-expensify-buttonGreen p-6 rounded-lg border border-expensify-green bg-opacity-30">
            <h3 className="text-expensify-green font-bold text-3xl mb-2">99.9%</h3>
            <p className="text-expensify-light">System Uptime</p>
          </div>
          <div className="bg-expensify-buttonGreen p-6 rounded-lg border border-expensify-green bg-opacity-30">
            <h3 className="text-expensify-green font-bold text-3xl mb-2">1M+</h3>
            <p className="text-expensify-light">Daily API Requests</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;