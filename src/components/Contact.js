"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4"
          >
            Get In <span className="text-gold">Touch</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-2xl font-bold mb-8 text-dark">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    { icon: <Phone className="text-gold" />, label: "Phone", value: "+91 8089978334" },
                    { icon: <Mail className="text-gold" />, label: "Email", value: "tourbee.kerala@gmail.com" },
                    { icon: <MapPin className="text-gold" />, label: "Location", value: "Kochi, Kerala, India" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="text-lg font-bold text-dark">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl overflow-hidden shadow-xl h-80 bg-gray-200"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.75945860715!2d76.22036724335938!3d9.982342799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582ca5844490b9!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1714480000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
