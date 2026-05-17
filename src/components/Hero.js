"use client";
import { motion } from "framer-motion";
import { Car, Camera, Clock, MapPin } from "lucide-react";

const Hero = () => {
  const highlights = [
    { icon: <Car className="text-gold" size={32} />, title: "Comfortable Vehicles", desc: "Well maintained and AC vehicles" },
    { icon: <Camera className="text-gold" size={32} />, title: "Driver + Photographer", desc: "We capture your best travel moments" },
    { icon: <Clock className="text-gold" size={32} />, title: "Flexible Trips", desc: "2 Hours to 1 Month trips" },
    { icon: <MapPin className="text-gold" size={32} />, title: "All Kerala Coverage", desc: "Explore every beautiful destination" },
  ];

  return (
    <section id="home" className="relative h-auto bg-white pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between py-10 lg:py-12 gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 z-10"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-center lg:text-left">
              <span className="text-brand-blue">Travel Kerala</span> <br />
              <span className="text-gold">with Comfort & Style</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 mb-10 font-medium leading-relaxed text-center lg:text-left">
              Premium Taxi & Tour Experience <br className="hidden sm:block" />
              with Photographer Drivers
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
              <a href="#packages" className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-gold/30 inline-block text-center min-w-[200px]">
                Book Your Ride
              </a>
              <a href="#packages" className="w-full sm:w-auto border-2 border-gold/40 hover:border-gold text-gold px-10 py-4 rounded-xl font-bold transition-all duration-300 bg-white shadow-sm inline-block text-center min-w-[200px]">
                Explore Packages
              </a>
            </div>

            {/* Highlights (Desktop) */}
            <div className="hidden lg:grid grid-cols-4 gap-6 pt-10 border-t border-gray-100">
              {highlights.map((h, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center">
                    {h.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800 leading-tight">{h.title}</h4>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-bold">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image with Fade */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[500px] w-full"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/20 to-transparent hidden lg:block"></div>
            <img 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/vehicle.png`} 
              alt="Premium Taxi Kerala" 
              className="w-full h-full object-cover rounded-[2rem] sm:rounded-[3rem] shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Highlights (Mobile) */}
        <div className="lg:hidden grid grid-cols-2 gap-8 pb-12">
          {highlights.map((h, i) => (
            <div key={i} className="text-center flex flex-col items-center">
              <div className="mb-4">{h.icon}</div>
              <h4 className="text-sm font-bold text-gray-800">{h.title}</h4>
              <p className="text-xs text-gray-400 mt-1">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Hero;
