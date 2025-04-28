import { motion } from 'framer-motion';

const Careers = () => {

  // Form fields based on Chebbos example
  const formFields = [
    { label: "First Name *", placeholder: "Enter your first name", id: "firstName", type: "text" },
    { label: "Surname *", placeholder: "Enter your surname", id: "surname", type: "text" },
    { label: "Address Suburb *", placeholder: "Enter your address", id: "address", type: "text" },
    { label: "Email *", placeholder: "Enter your email address", id: "email", type: "email" },
    { label: "Phone *", placeholder: "Enter your phone number", id: "phone", type: "tel" },
    { label: "Age *", placeholder: "Enter your age", id: "age", type: "number" },
  ];

  const selectFields = [
    {
      label: "Store Preference *",
      id: "storePreference",
      options: ["Sefton", "Lidcombe", "Any"]
    },
    {
      label: "What type of position are you looking for?",
      id: "positionType",
      options: ["Full-time or more", "Part-time or less", "Casual position"]
    }
  ];

  const radioFields = [
    {
      label: "Are you available on weekends? *",
      id: "weekends",
      options: ["Yes", "No"]
    },
    {
      label: "Do you have hospitality experience? *",
      id: "experience",
      options: ["Yes", "No"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h1 
            className="text-6xl font-righteous text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Join the <span className="text-primary">AJ Burgers</span> Team
          </motion.h1>
          <motion.p 
            className="text-2xl font-marker text-center text-primary mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Smash It? Apply Below! 🍔
          </motion.p>
        </div>
        
        {/* Wave Animation */}
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
        />
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-righteous text-center text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Apply Now
          </motion.h2>
          
          <motion.p 
            className="text-xl font-marker text-center text-primary mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Simply Fill Out The Details Below And We'll Be In Touch!
          </motion.p>

          <motion.form 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {formFields.map((field) => (
                <div key={field.id}>
                  <label className="block font-righteous text-black mb-2" htmlFor={field.id}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    className="w-full bg-white border-2 border-primary/20 rounded-lg p-3 
                             text-black font-marker placeholder-gray-400
                             focus:border-primary focus:outline-none transition-colors"
                    placeholder={field.placeholder}
                    required
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {selectFields.map((field) => (
                <div key={field.id}>
                  <label className="block font-righteous text-black mb-2" htmlFor={field.id}>
                    {field.label}
                  </label>
                  <select
                    id={field.id}
                    name={field.id}
                    className="w-full bg-white border-2 border-primary/20 rounded-lg p-3 
                             text-black font-marker 
                             focus:border-primary focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Select an option</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {radioFields.map((field) => (
                <div key={field.id}>
                  <label className="block font-righteous text-black mb-2">{field.label}</label>
                  <div className="flex gap-4">
                    {field.options.map((option) => (
                      <label key={option} className="flex items-center font-marker text-black">
                        <input 
                          type="radio" 
                          name={field.id} 
                          value={option} 
                          className="mr-2 text-primary focus:ring-primary"
                          required 
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mb-6">
              <label className="block font-righteous text-black mb-2" htmlFor="message">
                Tell us about yourself / Why you want to work at AJ Burgers?
              </label>
              <textarea
                id="message"
                name="message"
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
              Submit Application
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Careers;

