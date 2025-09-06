import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.17, 0.67, 0.83, 0.67], // easeOut
    },
  },
};

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="pt-16 min-h-screen flex items-center overflow-hidden relative bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-gray-800 mb-6 leading-tight"
            variants={itemVariants}
          >
            Elegant and creative <br />
            <span className="text-green-500">solutions</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-xl"
            variants={itemVariants}
          >
            We are a team of talented designers making websites with Bootstrap
          </motion.p>

          <motion.button
            className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-600 transition-all duration-300 mr-4"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)",
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>

          <motion.button
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-lg font-medium text-gray-700 hover:text-green-500 transition-all duration-300"
            variants={itemVariants}
          >
            ▶ Watch Video
          </motion.button>
        </motion.div>

        {/* Right Column - Floating Image */}
        <motion.div
          className="flex justify-center"
          variants={itemVariants}
          animate={{
            y: [0, -20, 0], // floating up/down
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="/hero-img.png" // ✅ from public folder
            alt="Hero Illustration"
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
