import { motion } from 'framer-motion';

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  category: 'burgers' | 'fries';
}

const menuItems: MenuItem[] = [
  // Burgers
  { name: "AJ Tower Burger", description: "2 smashed beef patties, lettuce, tomato, American cheese, pickles, and AJ's sauce.", price: "18", category: 'burgers' },
  { name: "AJ Special Burger", description: "Smashed beef patty, American cheese, caramelized onion, pickles, lettuce.", price: "16", category: 'burgers' },
  { name: "AJ Chicken Burger", description: "Chicken patty, shredded mix cheese, lettuce, chilli, and mayonnaise on a soft bun.", price: "16", category: 'burgers' },
  { name: "AJ Wagyu Burger", description: "Wagyu patty, American cheese, grilled onion, tomato, lettuce, beetroot, and AJ's sauce.", price: "18", category: 'burgers' },
  { name: "AJ Whop Whop", description: "Smashed beef patty, double American cheese.", price: "16", category: 'burgers' },
  { name: "AJ Cheeseburger", description: "Smashed beef patty, grilled onion, pickles, ketchup, and mustard sauce on a soft milk bun.", price: "14", category: 'burgers' },
  { name: "AJ Pounder", description: "Smashed beef patty, double American cheese, raw onions, pickles, ketchup.", price: "16", category: 'burgers' },
  { name: "AJ Bunless Burger", description: "Lettuce, tomato, shredded mixed cheese, grilled onion, pickles, and AJ's sauce.", price: "15", category: 'burgers' },

  // Fries
  { name: "Loaded Chicken Fries", description: "Fries topped with chicken, melted shredded cheese, and AJ special sauce.", price: "12", category: 'fries' },
  { name: "Loaded Meat Fries", description: "Fries topped with meat, melted shredded cheese, and AJ special sauce.", price: "12", category: 'fries' },
  { name: "Fries", description: "Crispy golden fries.", price: "5.00", category: 'fries' },
  { name: "Cheesy Fries", description: "Fries topped with melted shredded cheese.", price: "9.00", category: 'fries' },
];

const Menu = () => {
  return (
    <div className="bg-white py-20 relative overflow-hidden" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-righteous font-bold text-black mb-4">
            AJ Burgers Menu 🍔
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Burgers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black rounded-2xl p-6 shadow-xl"
          >
            <h3 className="text-2xl font-righteous text-primary mb-6">
              Burgers
            </h3>
            <div className="space-y-4">
              {menuItems
                .filter(item => item.category === 'burgers')
                .map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-righteous">{item.name}</h4>
                      <span className="text-primary font-marker">A${item.price}</span>
                    </div>
                    {item.description && (
                      <p className="text-sm font-marker text-white/70 mt-1">{item.description}</p>
                    )}
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Fries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black rounded-2xl p-6 shadow-xl"
          >
            <h3 className="text-2xl font-righteous text-primary mb-6">
              Fries & Loaded Fries
            </h3>
            <div className="space-y-4">
              {menuItems
                .filter(item => item.category === 'fries')
                .map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-righteous">{item.name}</h4>
                      <span className="text-primary font-marker">A${item.price}</span>
                    </div>
                    {item.description && (
                      <p className="text-sm font-marker text-white/70 mt-1">{item.description}</p>
                    )}
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>

        {/* Order Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href="https://www.ubereats.com/au/store/aj-burgers/sHkTeYksRNeA1PGfFcbQrQ?srsltid=AfmBOoonR0YppL9Slr7nd7MQoNefmHxtnGmA-G75oT133MZvkRii-n-6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              className="bg-primary text-black px-8 py-4 rounded-full text-xl font-righteous
                       hover:bg-primary/90 transition-all inline-flex items-center space-x-2"
            >
              <span>Order Now</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                🍔
              </motion.span>
            </motion.button>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;

