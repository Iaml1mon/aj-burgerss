import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Last night I went here. It was a very delicious burger. Got special treat from the owner cause he always bought the food container and napkins at my workplace. He’s such a wonderful brother. I will come back next time and bring my friends. THE BEST BURGER EVERR!!",
    author: "Lopa Anas",
  },
  {
    text: "The burgers here are amazing! They have so much flavour and you can tell they use quality ingredients. Highly recommend. The staff are friendly which makes it an enjoyable experience.",
    author: "Michael",
  },
  {
    text: "Best burgers, quick and fresh! Very friendly staff!! The best part is that it was very worth the hype 100%!!",
    author: "Malika",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-black text-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-righteous text-center text-primary mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          What Our Customers Say
        </motion.h2>

        {/* Testimonial Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl flex flex-col items-center shadow-lg hover:shadow-primary transition duration-300 text-center"
              whileHover={{ scale: 1.03 }}
            >
              {/* Animated Stars */}
              <motion.div
                className="flex mb-4 text-yellow-400 text-2xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {Array(5)
                  .fill("⭐")
                  .map((star, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="mx-0.5"
                    >
                      {star}
                    </motion.span>
                  ))}
              </motion.div>

              {/* Testimonial Text */}
              <p className="text-lg font-marker italic text-gray-300 mb-4 leading-relaxed">
                “{testimonial.text}”
              </p>

              {/* Author */}
              <span className="text-primary font-bold text-xl mt-2">
                {testimonial.author}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <p className="text-lg font-marker text-gray-400 mb-4">
            Want to share your experience?
          </p>
          <a
            href="https://www.google.com/maps/place/AJ+Burgers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-black font-righteous rounded-lg hover:bg-primary/90 transition duration-300"
          >
            Leave a Review
          </a>
        </motion.div>
      </div>

      {/* Decorative Wave */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-20 bg-white"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 75% 50%, 50% 0, 25% 50%, 0 0)",
        }}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Testimonial;
