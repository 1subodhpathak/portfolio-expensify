import { useState } from 'react';
import Header from './Header';
// import Footer from './Footer';
import EasterEgg from './EasterEgg';
import Hero from './Hero';
import About from './About';
// import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
// import Blog from './Blog';
import Contact from './Contact';
import CollapsibleSidebar from './CollapsibleSidebar';
import ExpensifyContribution from './ExpensifyContribution';
import Testimonials from './Testimonials';

interface WorkspaceSection {
  id: string;
  title: string;
  icon: React.ReactNode;
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
      id: 'PR #48884',
      title: "PR #48884",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
        </svg>
      ),
      component: <ExpensifyContribution />
    },
    {
      id: 'about',
      title: "About Me",
      icon: "👨‍💻",
      component: <About />
    },
    // {
    //   id: 'skills',
    //   title: "Technical Skills",
    //   icon: "🛠️",
    //   component: <Skills />
    // },
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
      id: 'testimonials',
      title: "Testimonials",
      icon: "⭐",
      component: <Testimonials />
    },
    // {
    //   id: 'blog',
    //   title: "Tech Blog",
    //   icon: "📝",
    //   component: <Blog />
    // },
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