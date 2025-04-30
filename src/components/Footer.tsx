const Footer = () => {
  return (
    <footer className="bg-expensify-darkgreen border-t border-expensify-buttonGreen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-expensify-light opacity-90">
              Built with passion for Expensify
            </p>
            <p className="text-expensify-green text-sm mt-1">
              © {new Date().getFullYear()} Your Name
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-expensify-light hover:text-expensify-green transition duration-300"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-expensify-light hover:text-expensify-green transition duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="text-expensify-light hover:text-expensify-green transition duration-300"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;