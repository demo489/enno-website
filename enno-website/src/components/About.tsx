import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { motion, easeOut, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    support: 0,
    workers: 0,
  });

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    const targets = {
      clients: 232,
      projects: 521,
      support: 1453,
      workers: 32,
    };

    Object.entries(targets).forEach(([key, value]) => {
      animate(0, value, {
        duration: 2,
        onUpdate: (latest) => {
          setCounters((prev) => ({ ...prev, [key]: Math.floor(latest) }));
        },
      });
    });
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const checkItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">ABOUT</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/about.png"
              alt="About illustration"
              className="rounded-2xl shadow-lg mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </motion.div>

          {/* Right side text + checklist */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl font-bold text-gray-800 mb-6"
              variants={itemVariants}
            >
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </motion.h3>

            <motion.p className="text-gray-600 mb-6" variants={itemVariants}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>

            <motion.div className="space-y-4 mb-8" variants={itemVariants}>
              {[
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Duis aute irure dolor in reprehenderit in voluptate velit.",
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  variants={checkItemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check
                      className="text-green-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                  </motion.div>
                  <p className="text-gray-600">{text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p className="text-blue-600" variants={itemVariants}>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </motion.p>
          </motion.div>
        </div>

        {/* Counters */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { value: counters.clients, label: "Clients", color: "text-green-500" },
            { value: counters.projects, label: "Projects", color: "text-green-500" },
            { value: counters.support, label: "Hours Of Support", color: "text-red-500" },
            { value: counters.workers, label: "Workers", color: "text-green-500" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
                animate={{ scale: inView ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
