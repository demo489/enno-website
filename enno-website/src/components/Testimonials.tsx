import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { id: 1, name: "Sara Wilsson", position: "Designer", image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150", quote: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid." },
    { id: 2, name: "Jena Karlis", position: "Store Owner", image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150", quote: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla." },
    { id: 3, name: "Matt Brendon", position: "Freelancer", image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150", quote: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export." },
    { id: 4, name: "Saul Goodman", position: "CEO & Founder", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150", quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitor entum suscipit." },
    { id: 5, name: "John Larson", position: "Entrepreneur", image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150", quote: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor." },
    { id: 6, name: "Emily Carter", position: "Photographer", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150", quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut." },
    { id: 7, name: "Michael Scott", position: "Manager", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150", quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." },
    { id: 8, name: "Olivia Brown", position: "Content Creator", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150", quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt." },
    { id: 9, name: "David Johnson", position: "Developer", image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150", quote: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus." }
  ];

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 3) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Slice the testimonials to show 3 at a time
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3)
    .concat(
      currentIndex + 3 > testimonials.length
        ? testimonials.slice(0, (currentIndex + 3) % testimonials.length)
        : []
    );

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">TESTIMONIALS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </motion.div>

        <AnimatePresence mode="sync">
          <motion.div 
            key={currentIndex}
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            {visibleTestimonials.map((t) => (
              <motion.div 
                key={t.id}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
                whileHover={{ scale: 1.03 }}
              >
                <Quote className="text-green-500 mx-auto mb-4" size={32} />
                <p className="text-gray-600 italic mb-6">"{t.quote}"</p>
                <div className="flex flex-col items-center">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mb-3" />
                  <h4 className="font-bold text-gray-800">{t.name}</h4>
                  <p className="text-gray-500 text-sm">{t.position}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
