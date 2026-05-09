"use client";
import { motion } from "framer-motion";
import { Car, Camera, Calendar, MapPin } from "lucide-react";

const highlights = [
  {
    icon: <Car className="w-8 h-8" />,
    title: "Comfortable Vehicles",
    desc: "Pristine, well-maintained luxury SUVs and sedans for a smooth journey."
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Driver + Photographer",
    desc: "Our drivers capture stunning photos of your trip at no extra cost."
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Flexible Trips",
    desc: "Customizable itineraries that adapt to your pace and preferences."
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "All Kerala Coverage",
    desc: "From the hills of Munnar to the beaches of Kovalam, we go everywhere."
  }
];

const Highlights = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-dark rounded-xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
