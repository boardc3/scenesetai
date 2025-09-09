import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-amber-200/20">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/25">
              <span className="text-slate-900 font-bold text-xl tracking-wide">SS</span>
            </div>
            <div>
              <h1 className="text-2xl font-semibold gold-text tracking-wide">Scene Set AI</h1>
              <p className="text-xs text-gray-400 font-light tracking-widest uppercase">Digital Architecture</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-white hover:text-amber-300 transition-colors duration-300 font-medium tracking-wide">Home</a>
            <a href="#services" className="text-white hover:text-amber-300 transition-colors duration-300 font-medium tracking-wide">Expertise</a>
            <a href="#portfolio" className="text-white hover:text-amber-300 transition-colors duration-300 font-medium tracking-wide">Portfolio</a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-6 py-3 rounded-lg font-semibold tracking-wide hover:from-amber-300 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/25"
            >
              Begin Project
            </a>
          </nav>

          <button className="md:hidden text-white hover:text-amber-300 transition-colors duration-300">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
