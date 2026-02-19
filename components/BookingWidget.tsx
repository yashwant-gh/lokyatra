import React, { useState } from 'react';
import { MapPin, Calendar, Search } from 'lucide-react';
import { Button } from './Button';

export const BookingWidget: React.FC = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching buses from ${source || 'Anywhere'} to ${destination || 'Anywhere'} on ${date || 'Anytime'}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8 -mt-24 relative z-20 border border-slate-100">
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 text-center md:text-left">
        Find Your Next Adventure
      </h2>
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-500 flex items-center gap-1">
            <MapPin size={16} /> From
          </label>
          <input 
            type="text" 
            placeholder="Delhi"
            className="w-full h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-500 flex items-center gap-1">
            <MapPin size={16} /> To
          </label>
          <input 
            type="text" 
            placeholder="Manali"
            className="w-full h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-500 flex items-center gap-1">
            <Calendar size={16} /> Travel Date
          </label>
          <input 
            type="date" 
            className="w-full h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-slate-700"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <Button type="submit" size="lg" className="w-full h-12">
          <Search className="mr-2" size={20} /> Search Buses
        </Button>
      </form>
    </div>
  );
};