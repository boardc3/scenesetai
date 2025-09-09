'use client';

import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Beverly Hills Estate',
      originalPrice: '$8.5M',
      description: 'Sophisticated interior renovation featuring authentic Italian marble and bespoke Baccarat crystal installations, creating an atmosphere of unparalleled elegance.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80',
      location: 'Beverly Hills, CA'
    },
    {
      id: 2,
      title: 'Malibu Oceanfront Residence',
      originalPrice: '$12.2M',
      description: 'Panoramic coastal property enhanced with sustainable luxury materials and intelligent design solutions, harmonizing natural beauty with architectural sophistication.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
      location: 'Malibu, CA'
    },
    {
      id: 3,
      title: 'Hollywood Hills Compound',
      originalPrice: '$15.8M',
      description: 'Award-winning architectural masterpiece integrated with state-of-the-art smart home technology and meticulously curated bespoke furnishings.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Hollywood Hills, CA'
    },
    {
      id: 4,
      title: 'Pacific Palisades Villa',
      originalPrice: '$6.9M',
      description: 'Mediterranean-inspired architectural vision enhanced with infinity-edge aquatic features and premium outdoor sanctuary design.',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Pacific Palisades, CA'
    },
    {
      id: 5,
      title: 'Westside Urban Penthouse',
      originalPrice: '$9.3M',
      description: 'Ultra-contemporary metropolitan residence featuring floor-to-ceiling architectural glass and precision-engineered Italian appliance integration.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Westside, CA'
    },
    {
      id: 6,
      title: 'Santa Monica Grand Residence',
      originalPrice: '$18.5M',
      description: 'Architectural masterpiece comprising eight distinctive bedroom suites, private cinema facilities, and resort-caliber amenity integration.',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Santa Monica, CA'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="w-16 h-px bg-amber-300 mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tight">
            Distinguished <span className="gold-text-metallic font-normal">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Curated selection of ultra-luxury properties transformed through our sophisticated
            AI-driven digital architecture, serving discerning clientele and institutional investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-amber-200/10 rounded-xl overflow-hidden hover:border-amber-300/30 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                  {item.originalPrice}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Location overlay */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-amber-300 text-sm font-medium tracking-wide">{item.location}</p>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4 tracking-wide">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed font-light text-lg mb-6">{item.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-amber-300 text-sm font-medium tracking-wider uppercase">Digital Architecture</span>
                  <button className="text-amber-300 hover:text-white transition-colors duration-300 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Hover effect bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-amber-200/20 p-12 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-light gold-text-glow mb-6 tracking-wide">Ready to Elevate Your Portfolio?</h3>
            <p className="text-gray-300 mb-8 leading-relaxed font-light">
              Partner with us to transform your exceptional properties into extraordinary marketing assets
              that command the attention of the most discerning clientele.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-12 py-5 rounded-lg font-semibold text-lg tracking-wide hover:from-amber-300 hover:to-amber-500 transition-all duration-300 shadow-2xl shadow-amber-500/25 hover:shadow-amber-400/40 hover:scale-105"
            >
              Initiate Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
