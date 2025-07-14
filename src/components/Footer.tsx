import React from 'react';
import { Phone, Mail, MapPin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-900 to-rose-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              ASTRID
              <div className="text-sm font-light opacity-80 tracking-wider">
                BEAUTY HOME STUDIO
              </div>
            </div>
            <p className="text-rose-100 leading-relaxed">
              Professional Brazilian waxing and threading services for women only. 
              Experience luxury treatments in a comfortable, private environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Pricing', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-rose-100 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-rose-100">
              <li>Brazilian Waxing</li>
              <li>Body Waxing</li>
              <li>Face Threading</li>
              <li>Face Waxing</li>
              <li>Combo Packages</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span className="text-rose-100">+1 (514) 625-5598</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span className="text-rose-100">astridbeauty55@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-4 h-4" />
                <span className="text-rose-100">@astridbeauty_montreal</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-rose-100 text-sm">
                  Sherbrooke & Hutchison<br />
                  Montreal, QC
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-rose-800" />

        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-rose-100">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-rose-400" />
            <span>for women's beauty and comfort</span>
          </div>
          <p className="text-rose-200 text-sm">
            © 2024 Astrid Beauty Home Studio. All rights reserved. | Women Only Studio | By Appointment Only
          </p>
          <p className="text-rose-300 text-xs">
            Professional Brazilian waxing, threading, and beauty services in Montreal, Quebec
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;