import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import HowToBuy from './components/HowToBuy';

function App() {
  return (
    <div className="App min-h-screen" style={{ background: 'linear-gradient(180deg, #E8F8F0 0%, #C8EBDB 50%, #E8F8F0 100%)' }}>
      <Header />
      <Hero />
      <Marquee />
      <About />
      <HowToBuy />

      {/* Footer */}
      <footer className="py-12 text-center text-black">
        <div className="container mx-auto px-3">
          <p className="text-lg font-bold mb-2">&copy; 2026 $HANTAGUY</p>
          <p className="text-sm opacity-80">HANTAGUY... Hantavirus + chillguy = Hantaguy</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
