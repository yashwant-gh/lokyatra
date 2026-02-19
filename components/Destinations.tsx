import React from 'react';
import { Destination } from '../types';
import { Clock, IndianRupee, ArrowRight } from 'lucide-react';

const destinations: Destination[] = [
  {
    id: 1,
    name: "Delhi to Manali",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop",
    price: "1200",
    duration: "14h 30m",
    description: "Experience the majestic Himalayas with our premium Volvo sleeper coaches."
  },
  {
    id: 2,
    name: "Delhi to Jaipur",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1000&auto=format&fit=crop",
    price: "600",
    duration: "6h 00m",
    description: "Visit the Pink City in comfort. Frequent departures every hour."
  },
  {
    id: 3,
    name: "Delhi to Shimla",
    image: "https://images.unsplash.com/photo-1562649846-ab413ca01712?q=80&w=1000&auto=format&fit=crop",
    price: "900",
    duration: "8h 45m",
    description: "Winding roads and pine forests await. AC Seater coaches available."
  },
  {
    id: 4,
    name: "Delhi to Udaipur",
    image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1000&auto=format&fit=crop",
    price: "1400",
    duration: "12h 15m",
    description: "Overnight sleeper buses to the City of Lakes. Clean bedding guaranteed."
  }
];

export const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Popular Routes</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover the most loved destinations across North India. Daily services with best-in-class amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-orange-600 flex items-center shadow-sm">
                  <IndianRupee size={14} className="mr-0.5" /> {dest.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{dest.name}</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{dest.description}</p>
                
                <div className="flex items-center justify-between text-slate-400 text-sm border-t border-slate-100 pt-4">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1.5" />
                    {dest.duration}
                  </div>
                  <button className="text-orange-600 font-medium hover:text-orange-700 flex items-center transition-colors">
                    Book <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};