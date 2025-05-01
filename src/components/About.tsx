const About = () => {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="bg-expensify-darkgreen p-6 rounded-lg border border-[#1A3D32]">
        <h1 className="text-4xl font-bold text-expensify-light mb-4">About Me</h1>
        <p className="text-expensify-light opacity-90">
          A backend-focused full stack engineer passionate about building efficient, scalable systems that solve real-world financial problems.
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
                  I'm a backend-focused full stack developer with over 3 years of experience designing systems that process financial data in real-time, manage transactions at scale, and deliver high availability across user-critical workflows.
                </p>
                <p className="text-expensify-light leading-relaxed">
                  I've worked with early-stage startups where I owned end-to-end development — 
                  <span className="text-expensify-green">
                    from building RESTful APIs and optimizing MongoDB queries to integrating with APIs like Polygon for real-time stock data
                  </span>
                  . I've also contributed to open-source projects, deepening my understanding of scalable architectures.
                </p>
                <p className="text-expensify-light leading-relaxed">
                  Expensify's mission to automate expense management resonates with me deeply — I’m excited about contributing to systems that simplify lives and eliminate inefficiencies through clean, performant code.
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
                    <h4 className="text-xl font-medium text-expensify-green mb-2">API Engineering</h4>
                    <p className="text-expensify-light leading-relaxed">
                      Hands-on experience building, securing, and optimizing APIs for financial applications, including rate-limited third-party integrations and data-heavy endpoints.
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
                    <h4 className="text-xl font-medium text-expensify-green mb-2">Scalable System Design</h4>
                    <p className="text-expensify-light leading-relaxed">
                      Proven ability to design backend architectures that scale under load, with emphasis on clean abstractions, database indexing, and distributed processing.
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
                    <h4 className="text-xl font-medium text-expensify-green mb-2">Data Layer Expertise</h4>
                    <p className="text-expensify-light leading-relaxed">
                      Strong foundation in schema design, aggregation pipelines, and performance tuning for both relational and NoSQL databases, especially MongoDB.
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
                    <h4 className="text-xl font-medium text-expensify-green mb-2">Cross-functional Collaboration</h4>
                    <p className="text-expensify-light leading-relaxed">
                      Comfortable leading backend efforts while working closely with frontend teams and product managers to ship features that directly impact users.
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