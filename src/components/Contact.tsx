import  { useState } from 'react';

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
    <section id="contact" className="bg-expensify-light py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-expensify-darkgreen mb-12 text-center">
          Let's Connect
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-expensify-darkgreen rounded-lg p-8">
              <h3 className="text-xl font-semibold text-expensify-green mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-expensify-green mr-3">📧</span>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-expensify-light hover:text-expensify-green transition duration-300"
                  >
                    your.email@example.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-expensify-green mr-3">🔗</span>
                  <a 
                    href="https://linkedin.com/in/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-expensify-light hover:text-expensify-green transition duration-300"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-expensify-green mr-3">💻</span>
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-expensify-light hover:text-expensify-green transition duration-300"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-expensify-green font-medium mb-4">How I Found Expensify</h4>
                <p className="text-expensify-light opacity-90">
                  I discovered Expensify through [source] and was immediately drawn to the company's 
                  mission of simplifying expense management. The technical challenges and innovative 
                  approach to solving real-world problems really resonated with me.
                </p>
              </div>
            </div>

            <div className="bg-expensify-darkgreen rounded-lg p-8">
              <h3 className="text-xl font-semibold text-expensify-green mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-expensify-light mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-expensify-buttonGreen bg-opacity-50 border border-expensify-green rounded-md px-4 py-2 text-expensify-light focus:outline-none focus:ring-2 focus:ring-expensify-green"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-expensify-light mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-expensify-buttonGreen bg-opacity-50 border border-expensify-green rounded-md px-4 py-2 text-expensify-light focus:outline-none focus:ring-2 focus:ring-expensify-green"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-expensify-light mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-expensify-buttonGreen bg-opacity-50 border border-expensify-green rounded-md px-4 py-2 text-expensify-light focus:outline-none focus:ring-2 focus:ring-expensify-green"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-expensify-green text-expensify-darkgreen font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300"
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