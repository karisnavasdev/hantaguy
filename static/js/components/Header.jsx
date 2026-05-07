import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const BUY_URL = 'https://pump.fun/coin/ETJyRyneEbzZQHpv9mtPHxnTBBC4JwSCC6eGCamBpump';
  const X_URL = 'https://x.com/i/communities/2039105098056372560';
  const TELEGRAM_URL = 'https://t.me/uncscamsol';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6 lg:pt-8">
      <div className="container mx-auto px-3">
        <div className="bg-white rounded-2xl py-2 px-4 md:py-4 md:px-7 border-2 border-solid border-black shadow-[2px_5px_0px_0px_#000] flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="logo flex-shrink-0">
            <img src="/UNCSCAM-logo.png" alt="UNCSCAM Logo" className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-black object-cover bg-[#1DA472]" />
          </a>

          {/* Desktop Menu - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-8">
            <button onClick={() => scrollToSection('lore')} className="uppercase font-bold text-sm hover:text-[#1DA472] transition-colors">
              Lore
            </button>
            <button onClick={() => scrollToSection('buy')} className="uppercase font-bold text-sm hover:text-[#1DA472] transition-colors">
              How to Buy
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="bg-[#1DA472] text-white px-6 py-2 rounded-full border-2 border-black shadow-[2px_4px_0px_0px_#000] hover:shadow-[1px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[2px] transition-all font-bold uppercase text-sm">
              Buy Now
            </a>
            <a href={X_URL} target="_blank" rel="noopener noreferrer" aria-label="X" className="bg-black text-white w-11 h-11 flex items-center justify-center rounded-full border-2 border-black shadow-[2px_4px_0px_0px_#000] hover:shadow-[1px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[2px] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="bg-[#229ED9] text-white w-11 h-11 flex items-center justify-center rounded-full border-2 border-black shadow-[2px_4px_0px_0px_#000] hover:shadow-[1px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[2px] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-2xl p-6 border-2 border-black shadow-[2px_5px_0px_0px_#000]">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('lore')} className="uppercase font-bold text-sm hover:text-[#1DA472] transition-colors text-left">
                Lore
              </button>
              <button onClick={() => scrollToSection('buy')} className="uppercase font-bold text-sm hover:text-[#1DA472] transition-colors text-left">
                How to Buy
              </button>
              <div className="flex flex-col gap-3 pt-4">
                <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="bg-[#1DA472] text-white px-6 py-2 rounded-full border-2 border-black shadow-[2px_4px_0px_0px_#000] font-bold uppercase text-sm text-center">
                  Buy Now
                </a>
                <a href={X_URL} target="_blank" rel="noopener noreferrer" aria-label="X" className="bg-black text-white px-6 py-2 rounded-full border-2 border-black shadow-[2px_4px_0px_0px_#000] font-bold uppercase text-sm text-center flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  Follow on X
                </a>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="bg-[#229ED9] text-white px-6 py-2 rounded-full border-2 border-black shadow-[2px_4px_0px_0px_#000] font-bold uppercase text-sm text-center">
                  Join Telegram
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
