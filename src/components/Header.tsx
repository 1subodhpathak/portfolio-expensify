import { useState } from 'react';

interface HeaderProps {
  toggleEasterEgg: () => void;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
  sections: Array<{
    id: string;
    title: string;
    icon: React.ReactNode;
  }>;
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const Header = ({ 
  toggleEasterEgg, 
  toggleSidebar, 
  isSidebarOpen,
  sections,
  activeSection,
  setActiveSection
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-expensify-darkgreen border-b border-[#1A3D32]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleSidebar}
              className="hidden md:flex w-10 h-10 bg-expensify-green rounded-full items-center justify-center group relative cursor-pointer"
            >
              <span className="text-expensify-darkgreen font-bold text-lg">S</span>
              <svg 
                className={`w-5 h-5 absolute -right-1 -bottom-1 text-expensify-light bg-expensify-buttonGreen rounded-full p-0.5 transform transition-transform duration-300 ${isSidebarOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="flex items-center">
              <span className="text-expensify-light font-medium">Subodh Pathak</span>
              <span className="text-expensify-green mx-2">/</span>
              <span className="text-expensify-light opacity-75">Portfolio</span>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleEasterEgg}
              className="text-expensify-light hover:text-expensify-green transition duration-300"
              title="Editor Shortcuts"
            >
              ⌨️
            </button>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-expensify-light hover:text-expensify-green transition duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
              </svg>
            </a>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-expensify-light hover:text-expensify-green"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-64 bg-expensify-darkgreen border-l border-[#1A3D32] p-4">
            <div className="flex justify-end mb-4">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-expensify-light hover:text-expensify-green"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition duration-200 ${
                    activeSection === section.id
                      ? 'bg-expensify-buttonGreen bg-opacity-70'
                      : 'hover:bg-expensify-buttonGreen hover:bg-opacity-50'
                  }`}
                >
                  <span className="text-xl">{section.icon}</span>
                  <span className="text-expensify-light">{section.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;