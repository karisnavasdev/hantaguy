import React from 'react';

const Hero = () => {
  return (
    <div className="banner relative pt-[120px] md:pt-[160px] lg:pt-[180px] xl:pt-[200px] pb-32 md:pb-40 lg:pb-48">
      {/* Background Shape */}
      <div className="shape absolute w-full h-auto left-1/2 -translate-x-1/2 -mt-[15%] opacity-40 pointer-events-none">
        <svg className="w-full h-auto" width="1943" height="1955" viewBox="0 0 1943 1955" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4"
            d="M1141.62 1942.76L971.229 977.113L1303.57 1899.09L1141.62 1942.76ZM887.386 1954.24L1141.62 1942.76L971.229 977.137L887.386 1954.24ZM800.816 1942.76L971.204 977.113L638.861 1899.12L800.816 1942.76ZM638.861 1899.12L971.229 977.113L413.018 1781.16L638.861 1899.12ZM343.727 1727.7L971.204 977.137L225.182 1608.4L343.727 1727.7ZM225.182 1608.4L971.229 977.113L88.1987 1392.64L225.182 1608.4ZM54.7934 1311.47L971.204 977.113L0 1061.47L54.7934 1311.47ZM0 1061.47L971.204 977.137L0 892.785V1061.47ZM11.4107 805.684L971.229 977.113L82.1495 557.213L11.4107 805.684ZM88.1987 561.608L971.204 977.137L172.042 415.528L88.1987 561.608ZM225.182 345.816L971.204 977.113L343.727 226.551L225.182 345.816ZM343.727 226.551L971.229 977.137L558.215 88.7349L343.727 226.551ZM638.861 55.1265L971.204 977.113L800.816 11.4801L638.861 55.1265ZM800.816 11.4801L971.204 977.113L1055.05 0L800.816 11.4801ZM1141.62 11.4523L971.229 977.113L1303.55 55.1265L1141.62 11.4523ZM1303.55 55.1265L971.204 977.113L1529.42 173.088L1303.55 55.1265ZM1598.68 226.551L971.204 977.113L1717.23 345.816L1598.68 226.551ZM1717.23 345.816L971.204 977.113L1854.21 561.58L1717.23 345.816ZM1887.65 642.745L971.204 977.113L1931.03 805.684L1887.65 642.745ZM1931.03 805.684L971.229 977.113L1942.44 1061.43L1931.03 805.684ZM1931.03 1148.56L971.204 977.137L1887.62 1311.5L1931.03 1148.56ZM1887.62 1311.5L971.204 977.113L1770.39 1538.72L1887.62 1311.5ZM1717.25 1608.4L971.204 977.113L1598.68 1727.66L1717.25 1608.4ZM1598.68 1727.66L971.204 977.113L1384.23 1865.48L1598.68 1727.66Z"
            fill="url(#paint0_radial_23_1181)"></path>
          <defs>
            <radialGradient id="paint0_radial_23_1181" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="translate(971.221 918.943) rotate(90) scale(922.975 917.402)">
              <stop stopColor="#1DA472"></stop>
              <stop offset="1" stopColor="#1DA472" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-3 relative z-10">
        <div className="text-center">
          <h1 className="uppercase font-black mb-2 text-black text-5xl md:text-7xl lg:text-8xl tracking-wider animate-fade-in" style={{ fontFamily: 'Luckiest Guy, Impact, Arial Black, sans-serif', textShadow: '4px 4px 0px #1DA472' }}>
            HANTAGUY
          </h1>
          <p className="uppercase font-black mb-8 text-[#1DA472] text-3xl md:text-5xl lg:text-6xl tracking-wider animate-fade-in" style={{ fontFamily: 'Luckiest Guy, Impact, Arial Black, sans-serif', textShadow: '3px 3px 0px #000' }}>
            $HANTAGUY
          </p>
          <div className="w-full max-w-3xl mx-auto animate-slide-up">
            <div className="bg-white rounded-3xl border-4 border-black shadow-[6px_12px_0px_0px_#000] p-4 md:p-6 overflow-hidden">
              <div className="w-full aspect-square rounded-2xl border-2 border-black overflow-hidden bg-[#1DA472]">
                <img
                  src="/UNCSCAM-hero.png"
                  alt="HANTAGUY"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
