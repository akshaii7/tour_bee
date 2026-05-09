"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, MessageCircle, Star } from "lucide-react";

const packages = [
  {
    title: "Varkala Beach Escape",
    image: "/images/varkala.jpg",
    duration: "2 Days / 1 Night",
    location: "Varkala, Kerala",
    desc: "Enjoy the beautiful cliff views, beach sunset, and peaceful coastal vibes of Varkala.",
    rating: 4.9
  },
  {
    title: "Munnar Misty Hills",
    image: "/images/munnar.jpg",
    duration: "2 Days / 1 Night",
    location: "Munnar, Kerala",
    desc: "Explore tea gardens, cool mountain weather, viewpoints, and nature beauty in Munnar.",
    rating: 4.8
  },
  {
    title: "Kanyakumari Sunrise Trip",
    image: "/images/kanyakumari-sunrise.png",
    duration: "2 Days / 1 Night",
    location: "Kanyakumari, Tamil Nadu",
    desc: "Visit the southern tip of India, sunrise point, Vivekananda Rock, and beach views.",
    rating: 4.7
  }
];

const Packages = () => {
  const handleWhatsApp = (pkg) => {
    const phoneNumber = "918089978334";
    const message = `Hello, I am interested in this travel package.

Package: ${pkg.title}
Location: ${pkg.location}
Duration: ${pkg.duration}

Please share more details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800"; // Beautiful landscape fallback
  };

  return (
    <section id="packages" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-semibold tracking-wider uppercase text-sm"
          >
            Explore Our Packages
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mt-3 mb-4"
          >
            <span className="text-brand-blue">Popular</span> <span className="text-gold">Destinations</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-gold mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  onError={handleImageError}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold text-gray-800">{pkg.rating}</span>
                </div>
                <div className="absolute bottom-5 left-5 bg-gold/90 backdrop-blur-md text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {pkg.location.split(',')[0]}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gold text-sm font-bold mb-3">
                  <Clock size={16} /> {pkg.duration}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 mb-6 sm:mb-8 line-clamp-2 text-sm leading-relaxed">
                  {pkg.desc}
                </p>
                
                <div className="mt-auto">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-6 pb-6 border-b border-gray-50">
                    <MapPin size={16} className="text-gold" />
                    {pkg.location}
                  </div>

                  <button 
                    onClick={() => handleWhatsApp(pkg)}
                    className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-200"
                  >
                    <MessageCircle size={22} fill="white" />
                    Book on WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;


