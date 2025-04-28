import { motion } from 'framer-motion';
import { FaTiktok } from 'react-icons/fa';

const Social = () => {
  return (
    <section className="bg-black text-white py-20 relative overflow-hidden">
      {/* TikTok Animation */}
      <motion.div
        className="absolute top-10 right-10 text-primary text-4xl"
        animate={{
          rotate: [0, -10, 10, -10, 0],
          scale: [1, 1.1, 1, 1.1, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaTiktok />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10 text-primary text-4xl"
        animate={{
          rotate: [0, 10, -10, 10, 0],
          scale: [1, 1.1, 1, 1.1, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <FaTiktok />
      </motion.div>

      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-righteous mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join Our <span className="text-primary">TikTok</span> Community!
        </motion.h2>

        <motion.p
          className="text-xl font-marker text-primary mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where Smash Flips Get Legendary! 🎵
        </motion.p>

        <div className="max-w-2xl mx-auto space-y-6 mb-12">
          <motion.p
            className="text-lg font-marker"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Watch our smash flips, sizzle, and satisfy your cravings! 🍔🔥
          </motion.p>
          <motion.p
            className="text-lg font-marker text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Warning: Our content may cause sudden cravings and uncontrollable happiness! 😋
          </motion.p>
        </div>

        <motion.a
          href="https://www.tiktok.com/@ajburgers_"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-black px-8 py-4 rounded-lg 
                    font-righteous text-lg hover:bg-primary/90 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaTiktok className="text-2xl" />
          Follow Our TikTok Adventures
        </motion.a>

        {/* Fun Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-3xl font-righteous text-primary mb-2">300K+</h3>
            <p className="font-marker">TikTok Likes</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-righteous text-primary mb-2">1M+</h3>
            <p className="font-marker">Views</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h3 className="text-3xl font-righteous text-primary mb-2">∞</h3>
            <p className="font-marker">Smash Flips</p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave 
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-20 bg-white"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 75% 50%, 50% 0, 25% 50%, 0 0)"
        }}
        animate={{
          y: [0, 5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      /> */}
    </section>
  );
};

export default Social;
