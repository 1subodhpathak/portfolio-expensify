// src/components/About.tsx
const About = () => {
  return (
    <section id="about" className="bg-expensify-darkgreen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-expensify-light mb-12 text-center">
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <div className="bg-expensify-buttonGreen bg-opacity-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-expensify-green">Backend-Focused Full Stack Engineer</h3>
              <div className="space-y-4">
                <p className="text-expensify-light opacity-90">
                  I'm a passionate developer with 3+ years of professional experience in backend development,
                  specializing in APIs, database optimization, and system architecture. I love solving 
                  real-world problems through clean, efficient code.
                </p>
                <p className="text-expensify-light opacity-90">
                  While my expertise lies in backend technologies, I have solid experience with 
                  frontend development including React and React Native, making me a versatile 
                  full stack developer who can work across the entire technology stack.
                </p>
                <p className="text-expensify-light opacity-90">
                  I'm particularly interested in joining Expensify to help revolutionize how people 
                  manage their expenses by building efficient systems and automating processes.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-expensify-buttonGreen bg-opacity-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-expensify-green">What I Bring to Expensify</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-expensify-green rounded-lg flex items-center justify-center text-expensify-darkgreen font-bold">1</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-expensify-green mb-2">API Optimization Expert</h4>
                    <p className="text-expensify-light opacity-90">
                      Experience optimizing various APIs and building high-performance endpoints that scale.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-expensify-green rounded-lg flex items-center justify-center text-expensify-darkgreen font-bold">2</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-expensify-green mb-2">Cross-Stack Feature Development</h4>
                    <p className="text-expensify-light opacity-90">
                      Skilled at building and maintaining features like accounting integrations and advanced automation systems.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-expensify-green rounded-lg flex items-center justify-center text-expensify-darkgreen font-bold">3</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-expensify-green mb-2">Problem Solver & Automator</h4>
                    <p className="text-expensify-light opacity-90">
                      Natural problem solver who creates automated solutions that scale efficiently with growing user demands.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-expensify-green rounded-lg flex items-center justify-center text-expensify-darkgreen font-bold">4</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-expensify-green mb-2">Collaborative Communicator</h4>
                    <p className="text-expensify-light opacity-90">
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