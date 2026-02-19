import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Frequent Traveler",
    content: "The best bus service for Delhi-Manali route. The staff was polite, and the bus was super clean. Highly recommended!",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Solo Traveler",
    content: "I felt very safe traveling alone at night. The live tracking feature gave my parents peace of mind. Great job LokYatra!",
    avatar: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Business Traveler",
    content: "Punctuality is what matters to me, and LokYatra never disappoints. The WiFi speed was good enough to work during the trip.",
    avatar: "https://picsum.photos/100/100?random=3"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Happy Travelers</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here is what our passengers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic">"{t.content}"</p>
              <div className="flex items-center">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};