import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Updated menuItems: Removed 'Home' as it's a separate Link
  const pageLinks = [
    { name: 'Menu', href: '/#menu' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-black">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/" className="flex items-center">
              <img 
                src="/images/aj-logo.png" 
                alt="AJ Burgers Logo" 
                className="h-12 w-auto mr-2"
              />
              <span className="text-2xl font-cinzel font-bold text-white">
                AJ <span className="text-primary">Burgers</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-primary transition-colors font-marker">
              Home
            </Link>
            {/* Map through pageLinks for anchor links */}
            {pageLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.href} // Use href for anchor links
                className="text-white hover:text-primary transition-colors font-marker"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            <Link to="/find-trucks" className="text-white hover:text-primary transition-colors font-marker">
              Find Trucks
            </Link>
            <Link to="/careers" className="text-white hover:text-primary transition-colors font-marker">
              Careers
            </Link>
            <motion.a
              href="https://www.ubereats.com/au/store/aj-burgers/sHkTeYksRNeA1PGfFcbQrQ?srsltid=AfmBOoonR0YppL9Slr7nd7MQoNefmHxtnGmA-G75oT133MZvkRii-n-6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-black px-6 py-2 rounded-full font-semibold font-marker
                       hover:bg-primary/90 transition-all inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="py-4 space-y-4">
            <Link to="/" className="block text-white hover:text-primary transition-colors font-marker" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            {/* Map through pageLinks for anchor links */}
            {pageLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.href} // Use href for anchor links
                className="block text-white hover:text-primary transition-colors font-marker"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <Link to="/find-trucks" className="block text-white hover:text-primary transition-colors font-marker" onClick={() => setIsMenuOpen(false)}>
              Find Trucks
            </Link>
            <Link to="/careers" className="block text-white hover:text-primary transition-colors font-marker" onClick={() => setIsMenuOpen(false)}>
              Careers
            </Link>
            <motion.a
              href="https://www.ubereats.com/au/store/aj-burgers/sHkTeYksRNeA1PGfFcbQrQ?srsltid=AfmBOoonR0YppL9Slr7nd7MQoNefmHxtnGmA-G75oT133MZvkRii-n-6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center bg-primary text-black px-6 py-2 rounded-full font-semibold font-marker
                       hover:bg-primary/90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(false)}
            >
              Order Now
            </motion.a>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;

