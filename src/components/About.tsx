import React from 'react';
import { Shield, Heart, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
                Why Choose Astrid Beauty Home Studio?
              </h2>
              <p className="text-xl text-amber-700 leading-relaxed">
                We specialize in providing premium Brazilian waxing and beauty services exclusively for women. 
                Our home studio offers a comfortable, private environment where you can relax and receive 
                professional treatments with the highest standards of care and hygiene.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-gradient-to-br from-rose-100 to-rose-200 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="font-bold text-amber-900">Women Only</h3>
                <p className="text-sm text-amber-700">Safe, comfortable environment designed exclusively for women</p>
              </div>

              <div className="space-y-3">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-amber-900">Expert Care</h3>
                <p className="text-sm text-amber-700">Professional esthetician with years of experience</p>
              </div>

              <div className="space-y-3">
                <div className="bg-gradient-to-br from-rose-100 to-amber-200 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="font-bold text-amber-900">Premium Products</h3>
                <p className="text-sm text-amber-700">High-quality wax and products for sensitive skin</p>
              </div>

              <div className="space-y-3">
                <div className="bg-gradient-to-br from-amber-100 to-rose-200 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-amber-900">Flexible Hours</h3>
                <p className="text-sm text-amber-700">Appointments available to fit your schedule</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-50 to-amber-50 p-8 rounded-2xl border border-rose-100">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Our Commitment</h3>
              <p className="text-amber-700 leading-relaxed">
                Every treatment is performed with meticulous attention to hygiene and comfort. We use only 
                premium-quality products and maintain the highest standards of cleanliness. Your comfort 
                and satisfaction are our top priorities.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-rose-200 to-amber-200 rounded-3xl p-8">
              <img
                src="https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional beauty treatment environment"
                className="rounded-2xl object-cover w-full h-96 shadow-xl"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-1">100%</div>
                <div className="text-sm text-amber-800 font-medium">Women Only</div>
                <div className="text-xs text-amber-600">Safe & Private</div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">5+</div>
                <div className="text-sm text-amber-800 font-medium">Years</div>
                <div className="text-xs text-amber-600">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;