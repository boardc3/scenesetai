'use client';

import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Sophisticated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-amber-200/30 rounded-full"></div>
        <div className="absolute top-40 right-32 w-48 h-48 border border-amber-200/20 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 border border-amber-200/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-amber-200/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-amber-200/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Premium logo/branding */}
          <div className="mb-8">
            <h2 className="gold-text text-lg font-light tracking-widest uppercase mb-2">Scene Set AI</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto"></div>
          </div>

          <h1 className="text-6xl md:text-8xl font-light text-white mb-8 leading-none tracking-tight">
            Elevate Your
            <span className="block gold-text-metallic font-normal mt-2 text-7xl md:text-9xl">Luxury Portfolio</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Transform exceptional properties into extraordinary marketing assets through
            sophisticated AI-driven digital renovation, featuring bespoke materials and
            world-class design for the most discerning clientele.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-12 py-5 rounded-lg font-semibold text-lg tracking-wide hover:from-amber-300 hover:to-amber-500 transition-all duration-300 shadow-2xl shadow-amber-500/25 hover:shadow-amber-400/40 hover:scale-105"
            >
              Begin Transformation
            </button>
            <button
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-amber-300 text-amber-300 px-12 py-5 rounded-lg hover:bg-amber-300 hover:text-slate-900 transition-all duration-300 text-lg font-semibold tracking-wide"
            >
              Explore Portfolio
            </button>
          </div>

          {/* Premium statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-amber-200/20 p-8 rounded-xl hover:border-amber-300/40 transition-all duration-300">
              <div className="gold-text-glow text-4xl font-light mb-3 tracking-wide">72h</div>
              <div className="text-white text-sm font-medium uppercase tracking-wider mb-1">Delivery Time</div>
              <div className="text-gray-400 text-sm">Standard Processing</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-amber-200/20 p-8 rounded-xl hover:border-amber-300/40 transition-all duration-300">
              <div className="gold-text-glow text-4xl font-light mb-3 tracking-wide">$3M+</div>
              <div className="text-white text-sm font-medium uppercase tracking-wider mb-1">Property Value</div>
              <div className="text-gray-400 text-sm">Exclusive Focus</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-amber-200/20 p-8 rounded-xl hover:border-amber-300/40 transition-all duration-300">
              <div className="gold-text-glow text-4xl font-light mb-3 tracking-wide">AI</div>
              <div className="text-white text-sm font-medium uppercase tracking-wider mb-1">Technology</div>
              <div className="text-gray-400 text-sm">Enterprise Grade</div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-amber-300 to-transparent mx-auto mb-4"></div>
        <div className="text-amber-300 text-xs font-light tracking-widest uppercase">Discover More</div>
      </div>
    </section>
  );
};

export default Hero;
