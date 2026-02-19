import React, { useState } from 'react';
import { Menu, X, BusFront } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BusFront className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              LokYatra
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Destinations</a>
            <a href="#features" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Services</a>
            <a href="#testimonials" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Reviews</a>
            <a href="#contact" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Contact</a>
            <Button variant="primary" size="sm">Manage Booking</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-orange-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#destinations" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:bg-orange-50 hover:text-orange-600 rounded-md">Destinations</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:bg-orange-50 hover:text-orange-600 rounded-md">Services</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:bg-orange-50 hover:text-orange-600 rounded-md">Reviews</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:bg-orange-50 hover:text-orange-600 rounded-md">Contact</a>
            <div className="pt-2">
              <Button variant="primary" className="w-full">Manage Booking</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};