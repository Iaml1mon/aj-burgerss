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
          We're Growing! 🚚
        </motion.h2>

        {/* Small Text */}
        <motion.p
          className="text-lg font-marker text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Our brand new food truck is launching this week! Get ready for more delicious burgers!
        </motion.p>

        {/* Image Card */}
        <motion.div
          className="relative bg-gray-100 rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
        >
          <img
            src="/images/anou.jpg"
            alt="AJ Burgers New Truck Announcement"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
        >
          <a
            href="https://www.instagram.com/ajburgers_/reel/DI59fMeJzG7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-black font-righteous rounded-full hover:bg-primary/90 transition duration-300"
          >
            Watch the Trailer
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
