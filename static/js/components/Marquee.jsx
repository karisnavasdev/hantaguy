import React from 'react';

const Marquee = () => {
  const MarqueeContent = () => (
    <>
      {[...Array(12)].map((_, i) => (
        <span key={i} className="uppercase text-black font-bold text-2xl md:text-3xl lg:text-[38px] whitespace-nowrap mx-8">
          $HANTAGUY
        </span>
      ))}
    </>
  );

  return (
    <div className="marquee-wrapper relative z-30 py-8 md:py-12">
      {/* First Marquee - Normal Direction */}
      <div className="relative common-marquee bg-[#1DA472] shadow-[3px_6px_3px_0px_#000] md:shadow-[3px_9px_4px_0px_#000] py-4 md:py-5 lg:py-6 -ml-[20px] w-[calc(100%+40px)] rotate-[1.06deg] overflow-hidden mb-16 md:mb-20 lg:mb-24">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center">
            <MarqueeContent />
          </div>
          <div className="flex items-center">
            <MarqueeContent />
          </div>
        </div>
      </div>

      {/* Second Marquee - Reverse Direction */}
      <div className="relative common-marquee bg-white shadow-[3px_6px_3px_0px_#000] md:shadow-[3px_9px_4px_0px_#000] py-4 md:py-5 lg:py-6 -ml-[20px] w-[calc(100%+40px)] rotate-[-1.5deg] overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          <div className="flex items-center">
            <MarqueeContent />
          </div>
          <div className="flex items-center">
            <MarqueeContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
