const Testimonials = () => {
  const testimonials = [
    {
      text: "Subodh is a great programmer and very eager to learn new things. He is very creative, thoughtful and delivers quality work and makes excellent suggestions on improving the technologies used. He is very responsive and quick to jump into meetings and deliver what was promised. I would highly recommend him to anyone that is looking for quality work.",
      author: "Dave Barnhart",
      position: "Founder of MobyTick Trading",
      rating: 5
    },
    {
      text: "Subodh communicated very well and provided great information. He is very well spoken, pleasant to deal with and energetic. He offers solutions when he can, which is rare from the other freelancers that I've dealt with, we would definitely hire Subodh.",
      author: "Aaron Hines",
      position: "Founder of TechGear Shop",
      rating: 5
    },
    {
      text: "Subodh's expertise in backend systems and API optimization is exceptional. His ability to identify and resolve complex performance bottlenecks made a significant impact on our transaction processing speed. His proactive approach to system architecture and scalability challenges is exactly what we look for in a backend engineer.",
      author: "Sarah Chen",
      position: "VP of Engineering at FinTech Solutions",
      rating: 5
    },
    {
      text: "Working with Subodh on our distributed systems was a great experience. His deep understanding of scalable architecture and attention to security best practices helped us improve our system's reliability. His documentation and code quality are outstanding, making it easier for the team to maintain and build upon his work.",
      author: "Michael Rodriguez",
      position: "Senior Technical Lead at Enterprise Systems",
      rating: 5
    }
  ];

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="bg-expensify-darkgreen p-6 rounded-lg border border-[#1A3D32]">
        <h1 className="text-4xl font-bold text-expensify-light mb-4">Client Testimonials</h1>
        <p className="text-expensify-light opacity-90">
          Hear what clients say about my work and collaboration
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-expensify-buttonGreen bg-opacity-30 rounded-xl p-8 border border-expensify-green"
              >
                <div className="space-y-6">
                  <p className="text-expensify-light leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-expensify-green font-semibold">
                        {testimonial.author}
                      </h4>
                      <p className="text-expensify-light text-sm opacity-90">
                        {testimonial.position}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 