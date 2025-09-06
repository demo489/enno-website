import React from "react";
import {
  Activity,
  Wifi,
  Monitor,
  Square,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Activity className="text-white" size={32} />,
      title: "Nesciunt Mete",
      description:
        "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
    },
    {
      icon: <Wifi className="text-white" size={32} />,
      title: "Eosle Commodi",
      description:
        "Ut autem aut autem non a. Sint sit sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
    },
    {
      icon: <Monitor className="text-white" size={32} />,
      title: "Ledo Markt",
      description:
        "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
    },
    {
      icon: <Square className="text-white" size={32} />,
      title: "Asperiores Commodit",
      description:
        "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
    },
    {
      icon: <Calendar className="text-white" size={32} />,
      title: "Velit Doloremque",
      description:
        "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
    },
    {
      icon: <MessageSquare className="text-white" size={32} />,
      title: "Dolori Architecto",
      description:
        "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">SERVICES</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300"
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="bg-green-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                  boxShadow: "0 10px 25px rgba(34, 197, 94, 0.4)",
                }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-gray-800 mb-4"
                whileHover={{ color: "#22C55E" }}
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
