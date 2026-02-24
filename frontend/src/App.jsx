import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import ContactAndFooter from './components/ContactAndFooter';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-inter selection:bg-white/20 selection:text-white">
      <Hero />
      <Features />
      <Pricing />
      <ContactAndFooter />
    </div>
  );
}

export default App;
