import React from 'react';
import { BusFront, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <BusFront className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">LokYatra</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Connecting North India with safe, reliable, and comfortable bus journeys. Experience travel like never before.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#destinations" className="hover:text-orange-500 transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Safety Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Popular Routes</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Delhi to Manali</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Delhi to Shimla</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Jaipur to Delhi</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Chandigarh to Manali</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-orange-500 mt-0.5" />
                <span>Sector 62, Noida,<br/>Uttar Pradesh, India - 201309</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-orange-500" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-orange-500" />
                <span>support@lokyatra.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} LokYatra Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};