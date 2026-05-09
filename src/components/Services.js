"use client";
import React from "react";
import { motion } from "framer-motion";
import { Plane, CarTaxiFront, Map, Route } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Pickup",
    desc: "Punctual and professional airport transfers across all Kerala airports."
  },
  {
    icon: CarTaxiFront,
    title: "Tourist Taxi",
    desc: "Premium cabs for sightseeing with knowledgeable local drivers."
  },
  {
    icon: Map,
    title: "Custom Tours",
    desc: "Tailor-made holiday packages designed specifically for your needs."
  },
  {
    icon: Route,
    title: "Local & Outstation",
    desc: "Reliable rides for both short city hops and long-distance journeys."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gold"
          >
            Our Services
          </motion.h2>


          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center"
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-8 transform group-hover:scale-110 transition-transform duration-300">
                  <Icon size={40} className="text-gray-400 group-hover:text-gold" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


export default Services;
