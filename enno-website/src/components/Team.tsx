import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

interface SocialLinks {
  twitter: string;
  facebook: string;
  instagram: string;
  linkedin: string;
}

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  social: SocialLinks;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Walter White",
      position: "Chief Executive Officer",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      social: { twitter: "#", facebook: "#", instagram: "#", linkedin: "#" },
    },
    {
      id: 2,
      name: "Sarah Jhonson",
      position: "Product Manager",
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300",
      social: { twitter: "#", facebook: "#", instagram: "#", linkedin: "#" },
    },
    {
      id: 3,
      name: "William Anderson",
      position: "CTO",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      social: { twitter: "#", facebook: "#", instagram: "#", linkedin: "#" },
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
    exit: { opacity: 0, y: 50 }, // 👈 add exit animation
  };

  const socialIconVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">TEAM</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </motion.div>

        {/* Team grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* ⬇️ Wrap map in AnimatePresence */}
          <AnimatePresence mode="sync">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                exit={{ opacity: 0, y: 50 }}
              >
                {/* Member Image + Social Overlay */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4"
                      initial="hidden"
                      whileHover="visible"
                      variants={{
                        visible: { transition: { staggerChildren: 0.1 } },
                      }}
                    >
                      {[
                        { Icon: Twitter, link: member.social.twitter },
                        { Icon: Facebook, link: member.social.facebook },
                        { Icon: Instagram, link: member.social.instagram },
                        { Icon: Linkedin, link: member.social.linkedin },
                      ].map(({ Icon, link }, idx) => (
                        <motion.a
                          key={idx}
                          href={link}
                          className="text-white hover:text-green-300 transition-colors p-2 bg-white bg-opacity-20 rounded-full backdrop-blur-sm"
                          variants={socialIconVariants}
                          whileHover={{
                            scale: 1.2,
                            rotate: 360,
                            backgroundColor: "rgba(34, 197, 94, 0.8)",
                          }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon size={20} />
                        </motion.a>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Member Info */}
                <motion.div
                  className="p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.h3
                    className="text-xl font-bold text-gray-800 mb-2"
                    whileHover={{ color: "#22C55E" }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-gray-600">{member.position}</p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
