import { useState } from 'react';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="bg-expensify-darkgreen p-6 rounded-lg border border-[#1A3D32]">
        <h1 className="text-4xl font-bold text-expensify-light mb-4">Get in Touch</h1>
        <p className="text-expensify-light opacity-90">
          Interested in discussing backend development opportunities at Expensify
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-expensify-buttonGreen bg-opacity-30 rounded-xl p-8 border border-expensify-green">
              <h3 className="text-2xl font-semibold text-expensify-green mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-expensify-green font-medium mb-4">Connect With Me</h4>
                  <div className="space-y-4">
                    <a 
                      href="mailto:your.email@example.com" 
                      className="flex items-center gap-4 text-expensify-light hover:text-expensify-green transition duration-300"
                    >
                      <span className="w-8 h-8 bg-expensify-darkgreen rounded-lg flex items-center justify-center">
                        📧
                      </span>
                      <span>your.email@example.com</span>
                    </a>
                    <a 
                      href="https://linkedin.com/in/yourprofile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-expensify-light hover:text-expensify-green transition duration-300"
                    >
                      <span className="w-8 h-8 bg-expensify-darkgreen rounded-lg flex items-center justify-center">
                        🔗
                      </span>
                      <span>LinkedIn Profile</span>
                    </a>
                    <a 
                      href="https://github.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-expensify-light hover:text-expensify-green transition duration-300"
                    >
                      <span className="w-8 h-8 bg-expensify-darkgreen rounded-lg flex items-center justify-center">
                        💻
                      </span>
                      <span>GitHub Profile</span>
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-expensify-green font-medium mb-4">Why I'm Interested in Expensify</h4>
                  <p className="text-expensify-light leading-relaxed">
                    I'm excited about Expensify's mission to revolutionize expense management through
                    innovative technology. The opportunity to work on scalable backend systems that
                    process millions of transactions aligns perfectly with my expertise and interests.
                  </p>
                </div>

                <div>
                  <h4 className="text-expensify-green font-medium mb-4">Technical Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Backend Development',
                      'System Architecture',
                      'API Design',
                      'Database Optimization',
                      'Scalable Systems'
                    ].map((interest, index) => (
                      <span 
                        key={index}
                        className="bg-expensify-darkgreen px-3 py-1 rounded-lg text-sm text-expensify-green"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-expensify-buttonGreen bg-opacity-30 rounded-xl p-8 border border-expensify-green">
              <h3 className="text-2xl font-semibold text-expensify-green mb-8">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-expensify-light mb-2 font-medium" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-expensify-darkgreen border border-expensify-green rounded-lg px-4 py-3 text-expensify-light focus:outline-none focus:ring-2 focus:ring-expensify-green"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-expensify-light mb-2 font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-expensify-darkgreen border border-expensify-green rounded-lg px-4 py-3 text-expensify-light focus:outline-none focus:ring-2 focus:ring-expensify-green"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-expensify-light mb-2 font-medium" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-expensify-darkgreen border border-expensify-green rounded-lg px-4 py-3 text-expensify-light focus:outline-none focus:ring-2 focus:ring-expensify-green"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-expensify-green text-expensify-darkgreen font-medium py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;