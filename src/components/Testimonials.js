"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Akshai ",
    role: "Travel Blogger",
    content: "The driver was incredibly professional and knew all the best spots for photos. The car was spotless and the ride was very smooth. Best Kerala trip ever!",
    rating: 5
  },
  {
    name: "Aswin ",
    role: "Solo Traveler",
    content: "Tour Bee made my trip so easy. I didn't have to worry about navigation or missing the sunset. Plus, I got some amazing photos for my Instagram!",
    rating: 5
  },
  {
    name: "Zreenath",
    role: "Family Trip",
    content: "Perfect for families. The driver was patient, the vehicle was spacious, and we felt safe throughout our 5-day tour of Munnar and Alleppey.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-dark text-white overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            What Our <span className="text-gold">Guests Say</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] relative hover:bg-white/10 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 text-gold/20 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">"{item.content}"</p>
              <div>
                <h4 className="font-bold text-xl">{item.name}</h4>
                <p className="text-gold text-sm uppercase tracking-widest">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
