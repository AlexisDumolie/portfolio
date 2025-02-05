import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '#', text: 'Accueil' },
    { href: '#about', text: 'À propos' },
    { href: '#projects', text: 'Projets' },
    { href: '#skills', text: 'Compétences' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="bg-[var(--color-background)]/70 backdrop-blur-sm shadow-[var(--shadow-md)]">
        <div className="container-section">
          <div className="flex justify-between items-center py-4">
            <a href="#" className="text-2xl font-bold text-[var(--color-text)]">
              PORTFOLIO
            </a>

            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {item.text}
                </a>
              ))}
            </div>

            {/* Bouton Menu Mobile */}
            <button
              className="md:hidden text-[var(--color-text)]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[var(--color-background)]/90 backdrop-blur-sm"
          >
            <div className="container-section py-4">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.text}
                    href={item.href}
                    className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
