import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <motion.section 
      className="py-20 bg-green-500 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 bg-white opacity-10 rounded-full"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-12 h-12 bg-white opacity-5 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-white mb-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Call To Action
        </motion.h2>
        
        <motion.p 
          className="text-white text-lg mb-8 max-w-4xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </motion.p>
        
        <motion.button 
          className="bg-white text-green-500 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(255,255,255,0.3)",
            y: -5
          }}
          whileTap={{ scale: 0.95 }}
        >
          Call To Action
        </motion.button>
      </div>
    </motion.section>
  );
};

export default CallToAction;