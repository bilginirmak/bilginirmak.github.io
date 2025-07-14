import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const combos = [
    {
      title: "Face Threading Combo",
      price: "$20",
      originalPrice: "$26",
      popular: false,
      services: [
        "Forehead threading",
        "Chin threading", 
        "Upper lips threading",
        "Sideburns threading",
        "Chicks threading",
        "Eyebrows threading"
      ]
    },
    {
      title: "Face Waxing Combo",
      price: "$25",
      originalPrice: "$31",
      popular: true,
      services: [
        "Forehead waxing",
        "Chin waxing",
        "Upper lips waxing", 
        "Sideburns waxing",
        "Chicks waxing",
        "Eyebrows threading"
      ]
    },
    {
      title: "Body Waxing Combo",
      price: "$45",
      originalPrice: "$55",
      popular: false,
      services: [
        "Full legs waxing",
        "Full arms waxing",
        "Under arms waxing",
        "Eyebrows threading"
      ]
    },
    {
      title: "Full Body Waxing Combo",
      price: "$70",
      originalPrice: "$90",
      popular: true,
      services: [
        "Full legs waxing",
        "Full arms waxing", 
        "Under arms waxing",
        "Tummy waxing",
        "Back waxing",
        "Brazilian waxing",
        "Butts waxing"
      ]
    }
  ];

  const individualServices = {
    threading: [
      { service: "Eyebrows", price: "$5" },
      { service: "Forehead", price: "$3" },
      { service: "Upper lips", price: "$3" },
      { service: "Chin", price: "$3" },
      { service: "Chick", price: "$3" },
      { service: "Sides", price: "$5" }
    ],
    faceWax: [
      { service: "Eyebrows", price: "$10" },
      { service: "Forehead", price: "$4" },
      { service: "Upper lips", price: "$4" },
      { service: "Chin", price: "$4" },
      { service: "Chick", price: "$4" },
      { service: "Sides", price: "$4" },
      { service: "Neck", price: "$4" },
      { service: "Nose", price: "$3" }
    ],
    bodyWax: [
      { service: "Full leg", price: "$20" },
      { service: "Half legs", price: "$15" },
      { service: "Full arms", price: "$15" },
      { service: "Half arms", price: "$10" },
      { service: "Underarms", price: "$5" },
      { service: "Belly button", price: "$5" },
      { service: "Tummy", price: "$10" },
      { service: "Full back", price: "$12" },
      { service: "Half back", price: "$8" },
      { service: "Shoulders", price: "$5" },
      { service: "Back neck", price: "$3" },
      { service: "Butt", price: "$10" },
      { service: "Bikini", price: "$10" },
      { service: "Bikini line", price: "$15" },
      { service: "Brazilian", price: "$25" }
    ]
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            Pricing & Packages
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Competitive pricing with special combo packages. Get 10% off on all combos for your first visit!
          </p>
        </div>

        {/* Combo Packages */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-amber-900 text-center mb-12">Combo Packages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {combos.map((combo, index) => (
              <div
                key={index}
                className={`relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  combo.popular ? 'ring-4 ring-rose-200 scale-105' : ''
                }`}
              >
                {combo.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-amber-900 mb-2">{combo.title}</h4>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-rose-600">{combo.price}</div>
                    <div className="text-lg text-gray-500 line-through">{combo.originalPrice}</div>
                    <div className="text-sm text-green-600 font-semibold">
                      Save ${parseInt(combo.originalPrice.slice(1)) - parseInt(combo.price.slice(1))}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {combo.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-amber-700">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Services */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h4 className="text-2xl font-bold text-amber-900 mb-6 text-center">Threading</h4>
            <div className="space-y-4">
              {individualServices.threading.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-amber-700">{item.service}</span>
                  <span className="font-semibold text-rose-600">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h4 className="text-2xl font-bold text-amber-900 mb-6 text-center">Face Wax</h4>
            <div className="space-y-4">
              {individualServices.faceWax.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-amber-700">{item.service}</span>
                  <span className="font-semibold text-rose-600">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h4 className="text-2xl font-bold text-amber-900 mb-6 text-center">Body Wax</h4>
            <div className="space-y-4">
              {individualServices.bodyWax.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-amber-700">{item.service}</span>
                  <span className="font-semibold text-rose-600">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special Offer */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-rose-500 text-white p-12 rounded-3xl text-center">
          <h3 className="text-4xl font-bold mb-4">First Visit Special</h3>
          <p className="text-2xl mb-6">Get 10% OFF on all combo packages</p>
          <p className="text-lg opacity-90 mb-8">Valid for new clients only. Book your appointment today!</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-rose-600 px-12 py-4 rounded-full font-bold text-lg hover:bg-rose-50 transition-colors duration-200 shadow-lg"
          >
            Claim Your Discount
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;