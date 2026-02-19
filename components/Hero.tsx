import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop" 
          alt="Indian Bus Travel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-[-100px]">
        <span className="inline-block py-1 px-3 rounded-full bg-orange-600/90 text-white text-sm font-semibold mb-6 tracking-wide uppercase">
          #1 Bus Operator in North India
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Explore India with <br/>
          <span className="text-orange-400">LokYatra</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
          Premium bus services connecting Delhi, Himachal, Punjab, and Rajasthan. Experience comfort, safety, and punctuality on every mile.
        </p>
      </div>
    </div>
  );
};