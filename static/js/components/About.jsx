import React from 'react';

const About = () => {
  return (
    <div id="lore" className="about bg-white relative overflow-hidden py-16 md:py-20 lg:py-24 border-y-4 border-black">
      <div className="container mx-auto px-3">
        <div className="common-title text-center mb-10 md:mb-14">
          <h2 className="uppercase font-black text-black text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: 'Luckiest Guy, Impact, Arial Black, sans-serif', textShadow: '3px 3px 0px #1DA472' }}>
            The Lore
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="flex justify-center">
            <div className="bg-[#1DA472] rounded-3xl border-4 border-black shadow-[6px_12px_0px_0px_#000] p-4 md:p-6 w-full max-w-md">
              <img
                src="/UNCSCAM-logo.png"
                alt="HANTAGUY Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Lore text */}
          <div className="text-black">
            <h3 className="uppercase font-black text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Luckiest Guy, Impact, Arial Black, sans-serif' }}>
              HANTAGUY...
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed mb-6 font-semibold">
              That&apos;s it.
            </p>
            <p className="text-lg md:text-xl leading-relaxed font-bold">
              a.k.a. <span className="text-[#1DA472]">Hantavirus + chillguy = Hantaguy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
