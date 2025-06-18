import { motion } from "framer-motion";

const Announcement = () => {
  return (
    <section className="bg-white text-black py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          className="text-5xl font-righteous mb-6 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Take Away and Dine In
        </motion.h2>

        {/* Small Text */}
        <motion.p
          className="text-lg font-marker text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Enjoy our delicious burgers and crepes in the comfort of your home or dine with us!
        </motion.p>

        {/* Image Card */}
        <motion.div
          className="relative bg-gray-100 rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Take Away Section */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-xl p-6 mb-4 shadow-lg">
                <div className="text-white text-6xl mb-4">🥡</div>
                <h3 className="text-2xl font-righteous text-white mb-2">Take Away</h3>
                <p className="text-white/90 font-marker">Quick & convenient pickup for busy lifestyles</p>
              </div>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Fast service</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Online ordering</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Phone order</li>
              </ul>
            </motion.div>

            {/* Dine In Section */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl p-6 mb-4 shadow-lg">
                <div className="text-white text-6xl mb-4">🍽️</div>
                <h3 className="text-2xl font-righteous text-white mb-2">Dine In</h3>
                <p className="text-white/90 font-marker">Relax and enjoy our cozy atmosphere</p>
              </div>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Comfortable seating</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Fresh hot meals</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Friendly service</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
        >
          <a
            href="#menu"
            className="inline-block px-8 py-4 bg-primary text-black font-righteous rounded-full hover:bg-primary/90 transition duration-300 shadow-lg"
          >
            Order Take Away
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gray-800 text-white font-righteous rounded-full hover:bg-gray-700 transition duration-300 shadow-lg"
          >
            Book a Table
          </a>
        </motion.div>
      </div>

      {/* Light Floating Circles Decoration */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full opacity-10 blur-3xl"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 bg-primary rounded-full opacity-10 blur-3xl"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Announcement;


