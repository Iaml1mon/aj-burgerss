import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

// Function to generate random properties for emojis
const randomProps = () => ({
  x: Math.random() * 100 - 50, // Random horizontal position (-50 to 50)
  y: Math.random() * 100 - 50, // Random vertical position (-50 to 50)
  scale: Math.random() * 0.5 + 0.5, // Random scale (0.5 to 1.0)
  rotate: Math.random() * 360 - 180, // Random rotation (-180 to 180)
  duration: Math.random() * 5 + 5, // Random duration (5 to 10 seconds)
  delay: Math.random() * 2, // Random delay (0 to 2 seconds)
});

const FloatingEmoji = ({ emoji }: { emoji: string }) => {
  const props = randomProps();
  return (
    <motion.div
      className="absolute text-4xl md:text-5xl opacity-30"
      style={{ 
        top: `${Math.random() * 80 + 10}%`, // Random top position (10% to 90%)
        left: `${Math.random() * 80 + 10}%`, // Random left position (10% to 90%)
      }}
      initial={{ y: 0, x: 0, scale: props.scale, rotate: props.rotate }}
      animate={{
        y: [0, props.y, 0],
        x: [0, props.x, 0],
      }}
      transition={{
        duration: props.duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: props.delay,
      }}
    >
      {emoji}
    </motion.div>
  );
};

const Hero = () => {
  const emojis = ['🍔', '🍟', '🍔', '🍟', '🍔', '🍟']; // Add more emojis if desired

  return (
    <div className="relative min-h-[70vh] bg-black overflow-hidden pt-32">
      {/* Floating Emojis */}
      {emojis.map((emoji, index) => (
        <FloatingEmoji key={index} emoji={emoji} />
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 relative z-10"> {/* Ensure content is above emojis */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-righteous font-bold mb-6 text-white tracking-wider"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              AJ <span className="text-primary relative inline-block">Burgers</span>
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl mb-8 text-white/90 font-marker"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              AJ Burgers & Cheese Are Bound To Please
            </motion.p>
            
            {/* Order Now Button Link */}
            <motion.a
              href="https://www.ubereats.com/au/store/aj-burgers/sHkTeYksRNeA1PGfFcbQrQ?srsltid=AfmBOoonR0YppL9Slr7nd7MQoNefmHxtnGmA-G75oT133MZvkRii-n-6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                className="bg-primary text-black px-8 py-4 rounded-full text-xl font-semibold
                           hover:bg-primary/90 transform transition-all
                           flex items-center space-x-2"
              >
                <span>Order Now</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaHeart className="text-black" />
                </motion.span>
              </motion.button>
            </motion.a>
          </motion.div>

          {/* AJ Burger Logo */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img 
              src="/images/aj-logo.png" 
              alt="AJ Burgers Logo" 
              className="w-3/4 md:w-full max-w-md h-auto"
            />
          </motion.div>
        </div> {/* Closing the flex container div */}
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute bottom-[-0.5rem] left-0 w-full h-24 bg-white z-10" /* Ensure wave is above emojis */
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
      />
    </div>
);
};

export default Hero;

