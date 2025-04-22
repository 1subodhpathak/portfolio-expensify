// src/components/About.tsx
const About = () => {
  return (
    <section id="about" className="py-16 bg-expensify-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-expensify-dark">About</span>
          <span className="text-expensify-green"> Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-expensify-blue">Backend-Focused Full Stack Engineer</h3>
            <p className="mb-4 text-gray-700">
              I'm a passionate developer with 3+ years of professional experience in backend development,
              specializing in APIs, database optimization, and system architecture. I love solving 
              real-world problems through clean, efficient code.
            </p>
            <p className="mb-4 text-gray-700">
              While my expertise lies in backend technologies, I have solid experience with 
              frontend development including React and React Native, making me a versatile 
              full stack developer who can work across the entire technology stack.
            </p>
            <p className="text-gray-700">
              I'm particularly interested in joining Expensify to help revolutionize how people 
              manage their expenses by building efficient systems and automating processes.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-expensify-blue">What I Bring to Expensify</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-expensify-green rounded-full flex items-center justify-center text-white font-bold">1</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-expensify-dark">API Optimization Expert</h4>
                    <p className="text-gray-600 text-sm">
                      Experience optimizing various APIs and building high-performance endpoints.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-expensify-green rounded-full flex items-center justify-center text-white font-bold">2</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-expensify-dark">Cross-Stack Feature Development</h4>
                    <p className="text-gray-600 text-sm">
                      Skilled at building and maintaining features like accounting integrations and advanced automation systems.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-expensify-green rounded-full flex items-center justify-center text-white font-bold">3</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-expensify-dark">Problem Solver & Automator</h4>
                    <p className="text-gray-600 text-sm">
                      Natural problem solver who creates automated solutions that scale efficiently.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-expensify-green rounded-full flex items-center justify-center text-white font-bold">4</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-expensify-dark">Collaborative Communicator</h4>
                    <p className="text-gray-600 text-sm">
                      Strong communication skills in code and interpersonal interactions, ready to share knowledge and grow with the team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;