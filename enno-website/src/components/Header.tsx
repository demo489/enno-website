import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // detect active section in viewport
      const sections = ["hero", "about", "services", "portfolio", "team", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Animations
  const menuVariants: Variants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" },
  };

  const menuItemVariants: Variants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-gray-800 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => scrollToSection("hero")}
          >
            eNno
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Portfolio", id: "portfolio" },
              { name: "Team", id: "team" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative ${
                  activeSection === item.id
                    ? "text-green-500 font-medium"
                    : "text-gray-700"
                } hover:text-green-500 transition-colors duration-300`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500"
                    layoutId="activeTab"
                  />
                )}
              </motion.button>
            ))}

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <motion.button
                className="flex items-center text-gray-700 hover:text-green-500 transition-colors"
                whileHover={{ y: -2 }}
              >
                Dropdown <ChevronDown size={16} className="ml-1" />
              </motion.button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                      Option 1
                    </button>
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                      Option 2
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white border-t overflow-hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-4">
                {[
                  { name: "Home", id: "hero" },
                  { name: "About", id: "about" },
                  { name: "Services", id: "services" },
                  { name: "Portfolio", id: "portfolio" },
                  { name: "Team", id: "team" },
                  { name: "Contact", id: "contact" },
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left ${
                      activeSection === item.id
                        ? "text-green-500 font-medium"
                        : "text-gray-700"
                    } hover:text-green-500 transition-colors duration-300`}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.button
                  className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 w-full"
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
