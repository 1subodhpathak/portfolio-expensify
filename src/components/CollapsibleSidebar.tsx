import { motion, AnimatePresence } from 'framer-motion';

interface CollapsibleSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CollapsibleSidebar = ({ isOpen, onClose }: CollapsibleSidebarProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 w-80 h-screen bg-expensify-darkgreen border-r border-[#1A3D32] z-50"
          >
            {/* Header with back button */}
            <div className="flex items-center space-x-3 px-4 h-[57px] border-b border-[#1A3D32]">
              <button
                onClick={onClose}
                className="flex items-center space-x-3 text-expensify-light hover:text-expensify-green transition-colors"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-lg font-medium">Filter by workspace</span>
              </button>
            </div>

            <div className="p-4">
              {/* Footer Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-expensify-light font-medium mb-2">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-expensify-light hover:text-expensify-green">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-expensify-light hover:text-expensify-green">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="mailto:your.email@example.com" className="text-expensify-light hover:text-expensify-green">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-expensify-light font-medium mb-2">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#projects" className="text-expensify-light hover:text-expensify-green">Projects</a>
                    </li>
                    <li>
                      <a href="#blog" className="text-expensify-light hover:text-expensify-green">Blog</a>
                    </li>
                    <li>
                      <a href="#contact" className="text-expensify-light hover:text-expensify-green">Contact</a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-expensify-light font-medium mb-2">Location</h3>
                  <p className="text-expensify-light opacity-75">
                    Bangalore, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CollapsibleSidebar; 