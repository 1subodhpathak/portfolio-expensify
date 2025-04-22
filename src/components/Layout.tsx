import { ReactNode, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import EasterEgg from './EasterEgg';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  
  const toggleEasterEgg = () => {
    setShowEasterEgg(!showEasterEgg);
  };

  // Konami code implementation
  // We'll implement this functionality later

  return (
    <div className="min-h-screen flex flex-col bg-expensify-light">
      <Header toggleEasterEgg={toggleEasterEgg} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {showEasterEgg && <EasterEgg onClose={() => setShowEasterEgg(false)} />}
    </div>
  );
};

export default Layout;