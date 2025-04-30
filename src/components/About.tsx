// src/components/About.tsx
const About = () => {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="bg-expensify-darkgreen p-6 rounded-lg border border-[#1A3D32]">
        <h1 className="text-4xl font-bold text-expensify-light mb-4">About Me</h1>
        <p className="text-expensify-light opacity-90">
          A backend-focused engineer passionate about building scalable financial solutions
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Professional Journey Card */}
            <div className="bg-expensify-buttonGreen bg-opacity-30 rounded-xl p-8 border border-expensify-green">
              <h3 className="text-2xl font-semibold text-expensify-green mb-6">Professional Journey</h3>
              <div className="space-y-4">
                <p className="text-expensify-light leading-relaxed">
                  I'm a backend-focused engineer with 3+ years of experience in building robust systems and optimizing APIs. 
                  My expertise lies in creating efficient, scalable solutions that handle complex business logic and high-volume transactions.
                </p>
                <p className="text-expensify-light leading-relaxed">
                  With a strong foundation in PHP and Java, coupled with modern technologies, I specialize in developing enterprise-grade applications that prioritize performance, security, and maintainability.
                </p>
                <p className="text-expensify-light leading-relaxed">
                  I'm particularly drawn to Expensify's mission of revolutionizing expense management, and I'm excited about contributing to the backend systems that power this transformation.
                </p>
              </div>
            </div>

            {/* Core Strengths Card */}
            <div className="bg-expensify-buttonGreen bg-opacity-30 rounded-xl p-8 border border-expensify-green">
              <h3 className="text-2xl font-semibold text-expensify-green mb-6">Core Strengths</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-expensify-green rounded-xl flex items-center justify-center">
                      <span className="text-expensify-darkgreen text-xl font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-expensify-green mb-2">API Architecture</h4>
                    <p className="text-expensify-light leading-relaxed">
                      Extensive experience in designing, building, and optimizing scalable APIs that handle millions of requests efficiently.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-expensify-green rounded-xl flex items-center justify-center">
                      <span className="text-expensify-darkgreen text-xl font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-expensify-green mb-2">System Design</h4>
                    <p className="text-expensify-light leading-relaxed">
                      Skilled at architecting robust backend systems with a focus on scalability, performance, and maintainability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-expensify-green rounded-xl flex items-center justify-center">
                      <span className="text-expensify-darkgreen text-xl font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-expensify-green mb-2">Database Optimization</h4>
                    <p className="text-expensify-light leading-relaxed">
                      Expert in database design, query optimization, and implementing efficient data storage solutions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-expensify-green rounded-xl flex items-center justify-center">
                      <span className="text-expensify-darkgreen text-xl font-bold">4</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-expensify-green mb-2">Technical Leadership</h4>
                    <p className="text-expensify-light leading-relaxed">
                      Strong communicator who excels at collaborating with teams and mentoring other developers.
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