import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaHamburger, FaUtensils } from 'react-icons/fa';

const SpecialOffers = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50 to-white z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full -ml-40 -mb-40"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header section */}
          <div className="text-center mb-12">
            <motion.div
              className="inline-block text-5xl text-primary mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <FaCalendarAlt />
            </motion.div>
            <motion.h2
              className="text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 font-righteous"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-primary">Happy</span> Thursday Special
            </motion.h2>
            <motion.div 
              className="w-40 h-1 bg-primary mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ duration: 1.2 }}
            />
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              Show this offer in-store every Thursday to enjoy our exclusive deals!
            </motion.p>
          </div>

          {/* Main content with image and details */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left side - Image */}
            <motion.div
              className="lg:w-1/2 rounded-2xl shadow-2xl overflow-hidden border-4 border-primary/30 bg-black"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              <img 
                src="/images/bg4.jpg" 
                alt="Thursday Special Offer: $10 Burgers, $15 Combos" 
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Right side - Details */}
            <motion.div
              className="lg:w-1/2 flex flex-col gap-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              {/* Offer cards */}
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary transform hover:scale-105 transition-transform"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl text-primary">
                    <FaHamburger />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary font-marker">$10 BURGERS</h3>
                    <p className="text-gray-600">Choose any burger on the menu</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary transform hover:scale-105 transition-transform"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl text-primary">
                    <FaUtensils />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary font-marker">$15 COMBOS</h3>
                    <p className="text-gray-600">Burger + fries + drink combo</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Location and time info */}
              <div className="bg-gray-50 rounded-xl p-6 mt-2">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                    <p className="text-gray-700 font-semibold">107 CARLINGFORD ST, SEFTON</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-primary text-xl" />
                    <p className="text-gray-700 font-semibold">OPEN TILL LATE</p>
                  </div>
                  <div className="mt-2 p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <p className="font-bold text-red-600">*THURSDAYS ONLY - No online orders</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Call to action */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4 }}
          >
            <motion.a
              href="https://www.instagram.com/ajburgers_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-bold px-12 py-5 rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all"
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
      </div>
    </section>
  );
};

export default SpecialOffers;
