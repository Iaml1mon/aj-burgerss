import { motion } from 'framer-motion';

const SpecialOffers = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center gap-8">

        {/* Heading */}
        <motion.h2
          className="text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 font-righteous"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Thursday Special 🍔🔥
        </motion.h2>
        <motion.div 
          className="w-32 h-1 bg-primary mx-auto rounded-full mb-6"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ duration: 1.2 }}
        />

        {/* Offer Image */}
        <motion.div
          className="max-w-2xl w-full mx-auto rounded-lg shadow-xl overflow-hidden border-4 border-primary/50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img 
            src="/images/bg4.jpg" 
            alt="Thursday Special Offer: $10 Burgers, $15 Combos" 
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Optional: Add a small note if needed */}
        <motion.p 
          className="text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          Show the post in-store to redeem the offer! (Thursdays Only)
        </motion.p>

      </div>
    </section>
  );
};

export default SpecialOffers;
