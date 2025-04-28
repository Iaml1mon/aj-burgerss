import { motion } from 'framer-motion';
import { FaHamburger, FaUtensils, FaCalendarAlt } from 'react-icons/fa';

const SpecialOffers = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-orange-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-primary"></div>
        <div className="absolute top-1/4 -right-24 w-64 h-64 rounded-full bg-primary"></div>
        <div className="absolute bottom-0 left-1/3 w-40 h-40 rounded-full bg-primary"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center gap-10 relative z-10">

        {/* Animated Heading with Icon */}
        <div className="relative">
          <motion.div
            className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-6xl text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaCalendarAlt />
          </motion.div>
          <motion.h2
            className="text-5xl lg:text-6xl font-extrabold text-gray-800 mb-2 font-righteous"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Thursday Special 🍔🔥
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1.2 }}
          />
        </div>

        {/* Offer Details - Enhanced with gradient background and icons */}
        <motion.div
          className="text-gray-800 rounded-2xl shadow-xl py-10 px-8 lg:px-14 max-w-4xl w-full bg-gradient-to-br from-white to-orange-100 border-t-4 border-primary"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Left side - Burger offer */}
            <div className="flex-1 flex flex-col items-center p-6 bg-white/70 rounded-xl shadow-md">
              <motion.div 
                className="text-4xl text-primary mb-4"
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <FaHamburger />
              </motion.div>
              <h3 className="text-3xl font-bold mb-3 text-primary font-marker">
                $10 Burgers
              </h3>
              <p className="text-gray-600">
                Any burger from our menu for just $10!
              </p>
            </div>
            
            {/* Right side - Combo offer */}
            <div className="flex-1 flex flex-col items-center p-6 bg-white/70 rounded-xl shadow-md">
              <motion.div 
                className="text-4xl text-primary mb-4"
                animate={{ rotate: [0, -10, 0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <FaUtensils />
              </motion.div>
              <h3 className="text-3xl font-bold mb-3 text-primary font-marker">
                $15 Combos
              </h3>
              <p className="text-gray-600">
                Burger + fries + drink for only $15!
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <p className="font-bold text-lg text-red-600">
              No online orders. Only available in-store every Thursday!
            </p>
          </div>
        </motion.div>

        {/* Call to Action - Enhanced with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mb-4"
        >
          <motion.a
            href="https://www.instagram.com/ajburgers_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-bold px-12 py-5 rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all transform hover:scale-105"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Visit Us This Thursday ➔
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffers;
