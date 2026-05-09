"use client";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <span className="text-3xl font-bold tracking-wider mb-6 block">
              TOUR <span className="text-gold">BEE</span>
            </span>
            <p className="text-gray-400 leading-relaxed mb-8">
              Premium travel and taxi services across Kerala. We don't just drive; we create memories and capture them for a lifetime.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/tourbee.kerala?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a 
                href="https://wa.me/918089978334" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-13.5 8.38 8.38 0 0 1 3.8.9L21 3z"/></svg>
              </a>
              <a 
                href="mailto:tourbee.kerala@gmail.com" 
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-gold">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Our Services", "Packages", "Contact"].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-gold group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-gold">Our Services</h4>
            <ul className="space-y-4">
              {["Airport Pickup", "Tourist Taxi", "Custom Tours", "Munnar Special", "Alleppey Houseboat"].map((service, i) => (
                <li key={i} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-gold">Stay Updated</h4>
            <p className="text-gray-400 mb-6">Subscribe to get special offers and travel tips.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold outline-none transition-all text-sm"
              />
              <button className="bg-gold text-black px-8 py-4 sm:py-0 rounded-2xl font-bold text-sm transition-transform active:scale-95">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Tour Bee. All Rights Reserved. Designed with Love for Kerala.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
