import { useState } from 'react';
import { motion } from 'framer-motion';
import menuOpenIcon from '../assets/menu-open.svg';
import menuCloseIcon from '../assets/menu-close.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold text-primary">Portfolio</a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-primary">À propos</a>
            <a href="#projects" className="text-gray-600 hover:text-primary">Projets</a>
            <a href="#skills" className="text-gray-600 hover:text-primary">Compétences</a>
            <a href="#contact" className="text-gray-600 hover:text-primary">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-hover hover:bg-primary-light focus:outline-none bg-transparent"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <img src={menuOpenIcon} alt="Menu" className="block h-6 w-6" />
              ) : (
                <img src={menuCloseIcon} alt="Fermer" className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-100">À propos</a>
          <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-100">Projets</a>
          <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-100">Compétences</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-100">Contact</a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
