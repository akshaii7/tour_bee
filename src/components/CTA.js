"use client";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Background image overlay */}
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero.png')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-transparent opacity-80"></div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
              Plan Your Trip <span className="text-gold">Today</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to explore Kerala in comfort? Contact us now to get a customized quote for your dream journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+918089978334" className="flex items-center justify-center gap-3 bg-gold hover:bg-gold-dark text-black px-10 py-5 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-gold/20">
                <Phone size={20} /> CALL NOW
              </a>
              <a href="https://wa.me/918089978334" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-green-500/20">
                <MessageCircle size={20} /> WHATSAPP BOOKING
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
