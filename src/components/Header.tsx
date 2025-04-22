import { useState } from 'react';

interface HeaderProps {
  toggleEasterEgg: () => void;
}

const Header = ({ toggleEasterEgg }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-expensify-dark text-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold text-expensify-green mr-2">&lt;</span>
          <span className="text-xl font-bold">YourName</span>
          <span className="text-xl font-bold text-expensify-green">/&gt;</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-expensify-green transition">About</a>
          <a href="#skills" className="hover:text-expensify-green transition">Skills</a>
          <a href="#projects" className="hover:text-expensify-green transition">Projects</a>
          <a href="#experience" className="hover:text-expensify-green transition">Experience</a>
          <a href="#blog" className="hover:text-expensify-green transition">Blog</a>
          <a href="#contact" className="hover:text-expensify-green transition">Contact</a>
          <button 
            onClick={toggleEasterEgg}
            className="text-expensify-gray hover:text-expensify-green transition cursor-pointer"
            title="Secret: Editor Tricks"
          >
            ⌨️
          </button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-expensify-dark border-t border-gray-700">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="py-2 hover:text-expensify-green transition">About</a>
              <a href="#skills" className="py-2 hover:text-expensify-green transition">Skills</a>
              <a href="#projects" className="py-2 hover:text-expensify-green transition">Projects</a>
              <a href="#experience" className="py-2 hover:text-expensify-green transition">Experience</a>
              <a href="#blog" className="py-2 hover:text-expensify-green transition">Blog</a>
              <a href="#contact" className="py-2 hover:text-expensify-green transition">Contact</a>
              <button 
                onClick={toggleEasterEgg}
                className="text-left py-2 text-expensify-gray hover:text-expensify-green transition"
              >
                ⌨️ Editor Tricks
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;