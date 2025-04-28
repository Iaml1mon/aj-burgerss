import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Years Serving Sefton', value: '3+' }, // Placeholder
    { label: 'Burger Varieties', value: '10+' }, // Based on menu
    { label: 'Happy Customers Daily', value: '100+' }, // Placeholder
    { label: 'Halal Certified', value: 'Yes' } // From info
  ];

  return (
    <section className="bg-black py-20 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 py-16 overflow-hidden">
        <motion.h2 
          className="text-5xl font-righteous font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Story
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-righteous text-primary mb-4">
              Serving Up Sefton's Best Burgers
            </h3>
            <p className="text-lg font-marker leading-relaxed text-white">
              AJ Burgers started with a simple mission: to bring the best, juiciest, and most satisfying burgers to the heart of Sefton. We believe in quality ingredients, hand-smashed patties, and flavours that make you say "Wow!".
            </p>
            <p className="text-lg font-marker leading-relaxed text-white">
              From our classic Cheeseburger to the towering AJ Tower Burger, every item on our menu is crafted with passion. We're proud to be a local favourite, serving up delicious Halal burgers and loaded fries that keep our community coming back for more. AJ Burgers & Cheese are bound to please!
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-black/50 border border-primary/20 text-white p-6 rounded-xl text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-4xl font-righteous text-primary mb-2">
                  {stat.value}
                </h4>
                <p className="font-marker text-sm text-white/80">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

