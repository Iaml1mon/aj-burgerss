import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaSnapchat } from 'react-icons/fa';

const Footer = () => {
 const socialLinks = [
  { icon: <FaInstagram />, url: "https://www.instagram.com/ajburgers_/" },
  { icon: <FaTiktok />, url: "https://www.tiktok.com/@ajburgers_" },
  { icon: <FaSnapchat />, url: "https://www.snapchat.com/add/aj_burgers1" },
];

  const quickLinks = [
    { name: "Menu", href: "#menu" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-righteous text-primary">AJ Burgers</h3>
            <p className="font-marker text-white/80">
              AJ Burgers & Cheese Are Bound To Please! 🍔
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-righteous text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="font-marker text-white/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-righteous text-primary">Hours</h3>
            <div className="space-y-2 font-marker text-white/80">
            <p>Sefton: Wednesday - Sunday: 5:00 PM - 12:00 AM</p>
            <p>Lidcombe: Wednesday - Sunday: 6:00 PM - 1:00 AM</p>
            <p>Monday - Tuesday: Closed</p>
          </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-righteous text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-black transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-4">
          <p className="text-center font-marker text-white/60">
            AJ Burgers &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

