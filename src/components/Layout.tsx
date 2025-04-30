import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import EasterEgg from './EasterEgg';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Blog from './Blog';
import Contact from './Contact';

interface WorkspaceSection {
  id: string;
  title: string;
  icon: string;
  component: React.ReactNode;
}

const Layout = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleEasterEgg = () => {
    setShowEasterEgg(!showEasterEgg);
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
    <div className="min-h-screen flex flex-col bg-expensify-darkgreen">
      <Header toggleEasterEgg={toggleEasterEgg} />
      
      <div className="flex-grow flex">
        {/* Left Sidebar - Fixed Position */}
        <div className="w-80 fixed top-[57px] bottom-0 border-r border-expensify-buttonGreen">
          <div className="h-full flex flex-col">
            <div className="p-4 flex-grow overflow-y-auto">
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

        {/* Right Content Area - With left margin to account for fixed sidebar */}
        <div className="flex-grow ml-80">
          <main className="h-[calc(100vh-57px)] overflow-y-auto">
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
      
      <Footer />
    </div>
  );
};

export default Layout;