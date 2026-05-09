"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Packages", href: "#packages" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`} alt="Tour Bee Logo" className="h-16 md:h-24 w-auto transition-all duration-300" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-gold transition-colors duration-300 text-xs lg:text-sm font-bold tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            <a href="#packages" className="bg-gold hover:bg-gold-dark text-white px-7 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-gold/20 inline-block text-center">
              Book Now
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gold transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>


      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-dark bg-opacity-95 backdrop-blur-xl absolute top-full left-0 w-full shadow-2xl border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gold block px-3 py-4 text-base font-medium border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a href="#packages" onClick={() => setIsOpen(false)} className="w-full bg-gold text-black px-6 py-3 rounded-full font-bold inline-block text-center">
                  BOOK NOW
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
