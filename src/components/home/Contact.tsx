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
  const initialFormData: FormData = { name: "", email: "", message: "" };
  const initialStatus: FormStatus = "idle";

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>(initialStatus);

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      details: "0481 833 224",
      link: "tel:0481833224",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Sefton Location",
      details: "107 Carlingford St, Sefton NSW",
      link: "https://www.google.com/maps/search/?api=1&query=107+Carlingford+St,+Sefton+NSW,+Australia",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Lidcombe Location",
      details: "90 Parramatta Rd, Lidcombe NSW",
      link: "https://www.google.com/maps/search/?api=1&query=90+Parramatta+Rd,+Lidcombe+NSW,+Australia",
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      title: "Instagram",
      details: "@ajburgers_",
      link: "https://www.instagram.com/ajburgers_/",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("idle");
    if (!validateForm()) return;

    setStatus("submitting");
    setErrors({});

    const scriptURL = "https://script.google.com/macros/s/AKfycbyzlqccBUa_Zo3JbWIkc83m-kyXhzWJoyLi2ywGXS5kONvoxjlkL1AyYxEig8szA_0_/exec";

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);

      const response = await fetch(scriptURL, {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        console.error("Error submitting form:", errorDetails);
        throw new Error(`Form submission failed: ${response.status}`);
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <section className="bg-white py-20" id="contact">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-5xl font-righteous font-bold text-center text-black mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-xl font-marker text-center text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Visit Us or Get Your Burger Fix! 🍔
        </motion.p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.a
              href={info.link}
              key={index}
              target={info.title.includes("Location") || info.title === "Instagram" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group bg-white border-2 border-primary/20 hover:border-primary transition-colors duration-300 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <h3 className="text-xl font-righteous text-black mb-2">{info.title}</h3>
              <p className="font-marker text-gray-600">{info.details}</p>
            </motion.a>
          ))}
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-righteous text-black mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full p-3 rounded-lg border-2 font-marker placeholder-gray-400 transition-colors
                  ${errors.name ? "border-red-500" : "border-primary/20 focus:border-primary"}`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-righteous text-black mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full p-3 rounded-lg border-2 font-marker placeholder-gray-400 transition-colors
                  ${errors.email ? "border-red-500" : "border-primary/20 focus:border-primary"}`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block font-righteous text-black mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={4}
              className={`w-full p-3 rounded-lg border-2 font-marker placeholder-gray-400 transition-colors
                ${errors.message ? "border-red-500" : "border-primary/20 focus:border-primary"}`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Status Messages */}
          <div className="mb-4 text-center h-6">
            {status === "submitting" && <p className="text-primary">Sending message...</p>}
            {status === "success" && <p className="text-green-600">Message sent successfully!</p>}
            {status === "error" && <p className="text-red-600">Failed to send message. Please try again.</p>}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3 px-6 rounded-lg font-righteous border-2 border-primary 
                       bg-black text-primary hover:bg-primary hover:text-black transition-colors
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
