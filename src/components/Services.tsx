import React from 'react';
import { Zap, Eye, Heart, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Brazilian Waxing",
      description: "Complete Brazilian wax service with premium wax for sensitive skin. Professional technique ensuring comfort and long-lasting results.",
      price: "From $25",
      features: ["Premium wax", "Gentle technique", "Long-lasting results", "Aftercare included"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Body Waxing",
      description: "Full body waxing services including legs, arms, underarms, back, and bikini line. Smooth, professional results every time.",
      price: "From $5",
      features: ["Full body coverage", "Quality wax", "Expert application", "Smooth finish"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Face Threading",
      description: "Precise eyebrow shaping and facial hair removal using traditional threading technique for perfect definition.",
      price: "From $3",
      features: ["Precise shaping", "No chemicals", "Perfect definition", "Quick service"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Face Waxing",
      description: "Gentle facial waxing for eyebrows, upper lip, chin, and cheeks. Smooth results with minimal irritation.",
      price: "From $3",
      features: ["Gentle formula", "Smooth results", "Minimal irritation", "Professional care"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Professional beauty treatments in a comfortable, women-only environment. 
            Each service is performed with the highest standards of hygiene and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-rose-50 to-amber-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-rose-100"
            >
              <div className="bg-gradient-to-br from-rose-500 to-rose-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-amber-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-amber-700 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="text-2xl font-bold text-rose-600 mb-4">
                {service.price}
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-amber-700">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-rose-500 to-rose-600 text-white p-8 rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-4">Special Combo Packages Available</h3>
          <p className="text-xl mb-6">Save more with our carefully curated service combinations</p>
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors duration-200"
          >
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;