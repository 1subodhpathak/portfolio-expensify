const Footer = () => {
  return (
    <footer className="bg-expensify-dark text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-expensify-gray">&copy; {new Date().getFullYear()} YourName. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-expensify-gray hover:text-expensify-green transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-expensify-gray hover:text-expensify-green transition">
              LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="text-expensify-gray hover:text-expensify-green transition">
              Email
            </a>
          </div>
          <div className="hidden md:block text-xs text-expensify-gray mt-4 md:mt-0">
            <span className="cursor-pointer" title="Try the Konami code!">Hint: ↑ ↑ ↓ ↓ ← → ← → B A</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;