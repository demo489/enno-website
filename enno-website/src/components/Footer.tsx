import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.17, 0.67, 0.83, 0.67], // ✅ easeOut cubic-bezier
    },
  },
};

const Footer = () => {
  const socialIcons = [
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  const usefulLinks = [
    { name: "Home", href: "#" },
    { name: "About us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Terms of service", href: "#" },
    { name: "Privacy policy", href: "#" },
  ];

  const services = [
    { name: "Web Design", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "Product Management", href: "#" },
    { name: "Marketing", href: "#" },
    { name: "Graphic Design", href: "#" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-2xl font-bold mb-4"
              whileHover={{ color: "#22C55E", scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              eNno
            </motion.h3>
            <p className="text-gray-300 mb-4">
              A108 Adam Street<br />
              New York, NY 535022<br />
              United States
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Phone:</strong> +1 5589 55488 55
            </p>
            <p className="text-gray-300">
              <strong>Email:</strong> info@example.com
            </p>
          </motion.div>

          {/* Useful Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <motion.li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                    whileHover={{ x: 5, color: "#22C55E" }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li key={index}>
                  <motion.a
                    href={service.href}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                    whileHover={{ x: 5, color: "#22C55E" }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <p className="text-gray-300 mb-4">
              Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="text-gray-300 hover:text-green-400 transition-colors p-2 bg-gray-700 rounded-full"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    backgroundColor: "#22C55E",
                    color: "#FFFFFF",
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer bottom */}
        <motion.div
          className="border-t border-gray-700 mt-8 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            © Copyright <strong>eNno</strong>. All Rights Reserved
          </p>
          <p className="text-gray-400 mt-2">
            Designed by{' '}
            <motion.a
              href="#"
              className="text-green-400 hover:text-green-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              BootstrapMade
            </motion.a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
