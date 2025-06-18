import { motion } from 'framer-motion';

const Images = () => {
  const burgerImages = [
    '/images/bg.jpg',
    '/images/bg1.jpg',
    '/images/bg2.jpg',
    '/images/bg3.jpg',
    '/images/bg5.jpeg',
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.h2
          className="text-5xl font-righteous mb-16 text-primary text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Burger Gallery 🍔
        </motion.h2>

        {/* Responsive Image Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {burgerImages.map((src, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <img
                src={src}
                alt={`Burger ${index + 1}`}
                className="w-full aspect-[4/3] object-cover transform transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Images;
