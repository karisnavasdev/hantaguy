import React from 'react';
import { Copy, Check, Wallet, DollarSign, RefreshCw } from 'lucide-react';
import { useState } from 'react';

const HowToBuy = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = 'abcdpump';
  const BUY_URL = 'https://pump.fun/coin/abcdpump';

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      icon: Wallet,
      title: '1. Get a Solana Wallet',
      description: 'Download Phantom, Backpack, or any Solana wallet and set up your wallet.'
    },
    {
      icon: DollarSign,
      title: '2. Get SOL',
      description: "If you don't have SOL yet, you can purchase from any CEX or swap, and send it to your Solana wallet."
    },
    {
      icon: RefreshCw,
      title: '3. Go To Pump.fun',
      description: 'After you have SOL in your wallet, head to Pump.fun to buy $HANTAGUY on Solana.'
    },
    {
      icon: () => <span className="text-4xl font-bold text-white">$</span>,
      title: '4. Buy $HANTAGUY',
      description: 'Connect your wallet and swap SOL for $HANTAGUY on Pump.fun.'
    }
  ];

  return (
    <div id="buy" className="how relative py-20">
      <div className="container mx-auto px-3">
        <div className="flex flex-wrap -mx-3">
          <div className="px-3 w-full">
            <div className="common-title text-center mb-12 md:mb-16">
              <h2 className="uppercase font-black text-black text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: 'Luckiest Guy, Impact, Arial Black, sans-serif', textShadow: '3px 3px 0px #1DA472' }}>
                How to Buy
              </h2>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="px-3 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="how-card group transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
                    <div className="bg-white rounded-2xl border-2 border-black shadow-[4px_8px_0px_0px_#000] p-6 h-full relative overflow-hidden">
                      <div className="icon flex items-center justify-center w-20 h-20 bg-[#1DA472] rounded-full border-2 border-black mx-auto mb-4 transition-transform group-hover:-translate-y-2 duration-300">
                        {typeof IconComponent === 'function' && IconComponent.name ? (
                          <IconComponent size={32} className="text-white" />
                        ) : (
                          <IconComponent />
                        )}
                      </div>
                      <h4 className="text-black font-bold text-lg md:text-xl uppercase mb-3 text-center transition-opacity group-hover:opacity-80 duration-300">
                        {step.title}
                      </h4>
                      <p className="text-[#1A1A1A] text-sm md:text-base text-center transition-opacity group-hover:opacity-80 duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contract Address */}
          <div className="px-3 w-full">
            <div className="token mx-auto text-center max-w-4xl">
              <p className="text-black leading-[140%] tracking-[2px] uppercase font-bold text-2xl mb-4">
                Contract Address
              </p>
              <div className="bg-white rounded-2xl border-2 border-black shadow-[4px_8px_0px_0px_#000] p-4 md:p-6">
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <p className="font-mono text-xs md:text-sm lg:text-base break-all font-bold text-[#137A55]">
                    {contractAddress}
                  </p>
                  <button
                    onClick={handleCopy}
                    className="bg-[#1DA472] text-white p-3 rounded-full border-2 border-black hover:bg-[#137A55] transition-colors flex-shrink-0"
                  >
                    {copied ? <Check size={20} /> : <Copy size={20} />}
                  </button>
                </div>
              </div>

              {/* CTA Buy button */}
              <div className="mt-8">
                <a
                  href={BUY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#1DA472] text-white px-10 py-4 rounded-full border-2 border-black shadow-[4px_8px_0px_0px_#000] hover:shadow-[2px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[4px] transition-all font-black uppercase text-lg tracking-wider"
                >
                  Buy $HANTAGUY Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
