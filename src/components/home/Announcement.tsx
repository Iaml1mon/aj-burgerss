import { motion } from "framer-motion";
import { FaTruckMoving, FaBullhorn } from "react-icons/fa";

const Announcement = () => {
  return (
    <section 
      className="relative py-20 lg:py-32 bg-cover bg-center bg-fixed text-white overflow-hidden"
      style={{ backgroundImage: "url(\"/images/bg4.jpg\")" }} // Using bg4.jpg as background
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="container mx-auto px-6 text-center relative z-10">

        {/* Animated Icon */}
        <motion.div
          className="text-6xl text-primary mb-6 inline-block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <FaBullhorn />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-5xl lg:text-6xl font-righteous mb-4 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Big News! We're Growing! 🚚
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        />

        {/* Text Content */}
        <motion.p
          className="text-xl lg:text-2xl font-marker text-white/90 mb-10 max-w-3xl mx-auto drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          Get ready! Our brand new food truck is hitting the streets this week, bringing even more delicious AJ Burgers closer to you!
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.8 }}
        >
          <motion.a
            href="https://www.instagram.com/ajburgers_/reel/DI59fMeJzG7" // Assuming this link is still relevant
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-black font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all transform hover:scale-105"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <FaTruckMoving />
            <span>Watch the Teaser</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Optional: Subtle decorative elements if needed */}
      {/* Example: 
      <motion.div 
        className="absolute bottom-10 left-10 w-20 h-20 border-4 border-primary/30 rounded-full -z-1"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      /> 
      */}
    </section>
  );
};

export default Announcement;
