import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "A108 Adam Street, New York, NY 535022",
      color: "bg-green-100",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 5589 55488 55",
      color: "bg-blue-100",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@example.com",
      color: "bg-purple-100",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </motion.div>

        {/* two-column grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* left: info */}
          <div className="space-y-8">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                className="flex items-start space-x-4"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <div className={`${info.color} p-3 rounded-full`}>
                  <info.icon className="text-green-500" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{info.title}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* right: form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <input
                name="subject"
                type="text"
                required
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />

              <textarea
                name="message"
                required
                rows={6}
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-500 text-white px-8 py-3 rounded-full font-medium hover:bg-green-600 transition disabled:opacity-50"
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ------------------------------------------------------------------
          Google-map card – now properly spaced
      ------------------------------------------------------------------- */}
      <div className="mt-24 max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* map */}
          <div className="w-full h-64 md:h-80 lg:h-96">
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9032292345954!2d-74.0060150845936!3d40.712775979330554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3160b5a4c5%3A0x7d79e60c6d9f7f90!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* footer bar */}
          <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between text-sm">
            <span className="text-gray-700">Downtown Conference Center</span>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-sm bg-yellow-400 relative">
                <span className="absolute inset-0.5 rounded-sm bg-yellow-500" />
              </span>
              <a
                href="https://maps.google.com/?q=Downtown+Conference+Center"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View larger map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
