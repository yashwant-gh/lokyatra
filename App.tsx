import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingWidget } from './components/BookingWidget';
import { Destinations } from './components/Destinations';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main>
        <Hero />
        <div className="px-4">
          <BookingWidget />
        </div>
        <Destinations />
        <Features />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

export default App;