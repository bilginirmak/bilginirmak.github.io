import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Clock, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hi! I'd like to book an appointment at Astrid Beauty Home Studio.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/15146255598?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-rose-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Ready to experience professional Brazilian waxing and beauty treatments? 
            Contact us today to schedule your appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-rose-500 to-rose-600 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-amber-900">Phone</div>
                    <div className="text-amber-700">+1 (514) 625-5598</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-amber-900">Email</div>
                    <div className="text-amber-700">astridbeauty55@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-rose-500 to-amber-600 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-amber-900">Instagram</div>
                    <div className="text-amber-700">@astridbeauty_montreal</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-amber-500 to-rose-600 w-12 h-12 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-amber-900">Location</div>
                    <div className="text-amber-700">
                      Opp. Hilton Garden Inn<br />
                      Rue Sherbrooke and Rue Hutchison intersection<br />
                      Montreal, QC
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white p-8 rounded-3xl">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">By Appointment Only</h3>
              </div>
              <p className="text-rose-100 mb-4">
                We operate exclusively by appointment to ensure personalized attention and privacy for each client.
              </p>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Flexible scheduling available</span>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">Quick Booking Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Your phone"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Service Interested *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="Brazilian Waxing">Brazilian Waxing</option>
                  <option value="Face Threading Combo">Face Threading Combo</option>
                  <option value="Face Waxing Combo">Face Waxing Combo</option>
                  <option value="Body Waxing Combo">Body Waxing Combo</option>
                  <option value="Full Body Waxing Combo">Full Body Waxing Combo</option>
                  <option value="Individual Service">Individual Service</option>
                  <option value="Consultation">Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="Any special requests or questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-rose-600 hover:to-rose-700 transition-all duration-200 shadow-lg"
              >
                Send Message via WhatsApp
              </button>
            </form>

            <div className="mt-6 p-4 bg-rose-50 rounded-xl">
              <p className="text-sm text-rose-800 text-center">
                <strong>Remember:</strong> Get 10% off on all combos for your first visit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;