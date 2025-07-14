import React from 'react';
import { Sparkles, Shield, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-rose-100 text-rose-800 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Women Only Studio
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
                Professional
                <span className="block text-rose-600">Brazilian Waxing</span>
                <span className="block text-amber-800">& Threading</span>
              </h1>
              <p className="text-xl text-amber-700 leading-relaxed">
                Experience luxury beauty treatments in a comfortable, women-only environment. 
                Expert Brazilian waxing, threading, and body wax services in Montreal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-rose-600 hover:to-rose-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Book Appointment
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-600 hover:text-white transition-all duration-200"
              >
                View Services
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-rose-100 to-rose-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="font-semibold text-amber-800 mb-1">Expert Care</h3>
                <p className="text-sm text-amber-600">Professional techniques</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-amber-800 mb-1">Safe & Clean</h3>
                <p className="text-sm text-amber-600">Hygienic environment</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-rose-100 to-amber-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="font-semibold text-amber-800 mb-1">By Appointment</h3>
                <p className="text-sm text-amber-600">Flexible scheduling</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-rose-200 to-amber-200 rounded-3xl p-8 h-96 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/3757951/pexels-photo-3757951.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional waxing treatment"
                className="rounded-2xl object-cover w-full h-full shadow-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600">10%</div>
                <div className="text-sm text-amber-800 font-medium">OFF First Visit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;