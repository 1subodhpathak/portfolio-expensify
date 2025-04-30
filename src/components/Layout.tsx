import { useState } from 'react';
import Header from './Header';
// import Footer from './Footer';
import EasterEgg from './EasterEgg';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Blog from './Blog';
import Contact from './Contact';
import CollapsibleSidebar from './CollapsibleSidebar';

interface WorkspaceSection {
  id: string;
  title: string;
  icon: string;
  component: React.ReactNode;
}

const Layout = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleEasterEgg = () => {
    setShowEasterEgg(!showEasterEgg);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sections that will appear in the left sidebar
  const sections: WorkspaceSection[] = [
    {
      id: 'hero',
      title: "Welcome",
      icon: "👋",
      component: <Hero />
    },
    {
      id: 'about',
      title: "About Me",
      icon: "👨‍💻",
      component: <About />
    },
    {
      id: 'skills',
      title: "Technical Skills",
      icon: "🛠️",
      component: <Skills />
    },
    {
      id: 'projects',
      title: "Projects",
      icon: "💼",
      component: <Projects />
    },
    {
      id: 'experience',
      title: "Experience",
      icon: "📈",
      component: <Experience />
    },
    {
      id: 'blog',
      title: "Tech Blog",
      icon: "📝",
      component: <Blog />
    },
    {
      id: 'contact',
      title: "Contact",
      icon: "📧",
      component: <Contact />
    }
  ];

  // Find the active section's component
  const activeComponent = sections.find(section => section.id === activeSection)?.component;

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-expensify-darkgreen">
      <Header 
        toggleEasterEgg={toggleEasterEgg} 
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      
      <div className="flex-1 flex relative overflow-hidden">
        {/* Left Sidebar - Fixed Position */}
        <div className="w-80 absolute inset-y-0 left-0 border-r border-[#1A3D32]">
          <div className="h-full flex flex-col overflow-hidden">
          <div className="p-4 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-400 scrollbar-track-gray-700">
              <div className="flex items-center space-x-3 mb-6 p-3 bg-expensify-buttonGreen bg-opacity-50 rounded-lg">
                <div className="w-10 h-10 bg-expensify-green rounded-lg flex items-center justify-center text-expensify-darkgreen font-bold">
                  SP
                </div>
                <div>
                  <h2 className="text-expensify-light font-medium">Portfolio Sections</h2>
                  <p className="text-expensify-green text-sm">Full Stack Engineer</p>
                </div>
              </div>

              {/* Section List */}
              <div className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
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
        </div>

        {/* Collapsible Sidebar */}
        <CollapsibleSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Right Content Area - With left margin to account for fixed sidebar */}
        <div className="flex-1 pl-80">
          <main className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#1B4B3A] hover:scrollbar-thumb-[#235646] scrollbar-track-[#0B1615]">
            <div className="p-6">
              {activeComponent}
            </div>
          </main>
        </div>

        {/* Easter Egg Modal */}
        {showEasterEgg && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="relative">
              <button
                onClick={toggleEasterEgg}
                className="absolute -top-4 -right-4 bg-expensify-darkgreen text-expensify-light rounded-full w-8 h-8 flex items-center justify-center hover:bg-expensify-buttonGreen transition duration-300"
              >
                ×
              </button>
              <EasterEgg onClose={toggleEasterEgg} />
            </div>
          </div>
        )}
      </div>
      
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;