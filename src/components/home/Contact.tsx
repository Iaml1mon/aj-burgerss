import { motion } from "framer-motion";
import { FaPhone, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

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
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    // Clear the error for this field when the user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle"); // Reset status on new submission attempt

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    setStatus("submitting");
    setErrors({}); // Clear previous errors

    // Google Apps Script Web App URL provided by the user
    const scriptURL = "https://script.google.com/macros/s/AKfycbzA4S83cX5a8We9yrAcjzHf67ERxGqDPincx-h_vEy7COxEL_oUbMjteJDuRwP_VEsw/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // Change to no-cors to avoid preflight issues
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Since no-cors doesn't give us access to the response status or body,
      // we'll assume success if no error is thrown
      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      // Optionally set a general error message
      // setErrors({ form: "An error occurred. Please try again later." });
    }
  };

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

        {/* Contact Info Grid */}
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

        {/* Contact Form */}
        <motion.form 
          className="mt-16 max-w-2xl mx-auto"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block font-righteous text-black mb-2" htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-white border-2 rounded-lg p-3 
                         text-black font-marker placeholder-gray-400
                         focus:border-primary focus:outline-none transition-colors 
                         ${errors.name ? "border-red-500" : "border-primary/20"}`}
                placeholder="Your name"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block font-righteous text-black mb-2" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-white border-2 rounded-lg p-3 
                         text-black font-marker placeholder-gray-400
                         focus:border-primary focus:outline-none transition-colors 
                         ${errors.email ? "border-red-500" : "border-primary/20"}`}
                placeholder="your@email.com"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block font-righteous text-black mb-2" htmlFor="message">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`w-full bg-white border-2 rounded-lg p-3 
                       text-black font-marker placeholder-gray-400
                       focus:border-primary focus:outline-none transition-colors 
                       ${errors.message ? "border-red-500" : "border-primary/20"}`}
              placeholder="Your message..."
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Status Messages */}
          <div className="mb-4 h-6 text-center">
            {status === "submitting" && <p className="text-primary">Sending message...</p>}
            {status === "success" && <p className="text-green-600">Message sent successfully!</p>}
            {status === "error" && <p className="text-red-600">Failed to send message. Please try again.</p>}
          </div>

          <motion.button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-black text-primary font-righteous py-3 px-6 rounded-lg
                     hover:bg-primary hover:text-black transition-colors border-2 border-primary
                     disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={status !== "submitting" ? { scale: 1.02 } : {}}
            whileTap={status !== "submitting" ? { scale: 0.98 } : {}}
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

