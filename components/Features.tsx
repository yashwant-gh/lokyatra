import React from 'react';
import { Wifi, ShieldCheck, Armchair, Coffee, BatteryCharging, Map } from 'lucide-react';

const features = [
  {
    icon: <Armchair className="w-8 h-8" />,
    title: "Luxury Sleeper Seats",
    description: "Extra legroom and 135° reclining seats for maximum comfort during long journeys."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Safety First",
    description: "GPS tracking, CCTV surveillance, and verified professional drivers for your peace of mind."
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Free Wi-Fi",
    description: "Stay connected with high-speed onboard Wi-Fi throughout your journey."
  },
  {
    icon: <BatteryCharging className="w-8 h-8" />,
    title: "Charging Points",
    description: "Personal USB charging ports at every seat to keep your devices powered up."
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Snacks & Water",
    description: "Complimentary water bottle and snack box included with every premium ticket."
  },
  {
    icon: <Map className="w-8 h-8" />,
    title: "Live Tracking",
    description: "Track your bus in real-time and share your location with loved ones."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose LokYatra?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We redefine bus travel in India. It's not just about reaching the destination; it's about enjoying the journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};