import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      details: "0481 833 224",
      link: "tel:0481833224"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Sefton Location",
      details: "107 Carlingford St, Sefton NSW",
      link: "https://www.google.com/maps/search/?api=1&query=107+Carlingford+St,+Sefton+NSW,+Australia"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Lidcombe Location",
      details: "90 Parramatta Rd, Lidcombe NSW",
      link: "https://www.google.com/maps/search/?api=1&query=90+Parramatta+Rd,+Lidcombe+NSW,+Australia"
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      title: "Instagram",
      details: "@ajburgers_",
      link: "https://www.instagram.com/ajburgers_/"
    }
    // Removed Email as it wasn't found
  ];

  return (
    <section className="bg-white py-20" id="contact">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-5xl font-righteous font-bold text-center text-black mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        
        <motion.p 
          className="text-xl font-marker text-center text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Visit Us or Get Your Burger Fix! 🍔
        </motion.p>

        {/* Adjusted grid columns for 4 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.a
              href={info.link}
              key={index}
              className="bg-white border-2 border-primary/20 p-6 rounded-xl text-center group 
                         hover:border-primary transition-colors duration-300 shadow-lg flex flex-col items-center justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              target={info.title.includes("Location") || info.title === "Instagram" ? "_blank" : undefined}
              rel={info.title.includes("Location") || info.title === "Instagram" ? "noopener noreferrer" : undefined}
            >
              <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <h3 className="text-xl font-righteous text-black mb-2">
                {info.title}
              </h3>
              <p className="font-marker text-gray-600">
                {info.details}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form - Placeholder, may not be functional without backend */}
        <motion.form 
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block font-righteous text-black mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-white border-2 border-primary/20 rounded-lg p-3 
                         text-black font-marker placeholder-gray-400
                         focus:border-primary focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block font-righteous text-black mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-white border-2 border-primary/20 rounded-lg p-3 
                         text-black font-marker placeholder-gray-400
                         focus:border-primary focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block font-righteous text-black mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-white border-2 border-primary/20 rounded-lg p-3 
                       text-black font-marker placeholder-gray-400
                       focus:border-primary focus:outline-none transition-colors"
              placeholder="Your message..."
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-black text-primary font-righteous py-3 px-6 rounded-lg
                     hover:bg-primary hover:text-black transition-colors border-2 border-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

