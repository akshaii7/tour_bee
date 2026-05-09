"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const UniqueFeature = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/feature.png" 
                alt="Driver acting as photographer" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              <span className="text-brand-blue">We Capture</span> <br />
              <span className="text-gold">Your Journey</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              At Tour Bee, we believe every mile should be a memory. Our professional drivers are trained in basic travel photography, ensuring you get high-quality photos of your trip without having to ask a stranger.
            </p>
            <ul className="space-y-4 mb-10 inline-block text-left">
              {[
                "Professional DSLR quality perspective",
                "Candid shots during your exploration",
                "Group photos at every scenic spot",
                "High-res digital copies delivered instantly"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-dark font-medium text-sm sm:text-base">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <button className="bg-dark text-white hover:bg-gold hover:text-black px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                LEARN MORE
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeature;
