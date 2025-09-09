import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-slate-900 border-t border-amber-200/20 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/25">
                <span className="text-slate-900 font-bold text-xl tracking-wide">SS</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold gold-text tracking-wide">Scene Set AI</h3>
                <p className="text-sm text-gray-400 font-light tracking-widest uppercase">Digital Architecture</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 max-w-lg leading-relaxed font-light">
              Elevating ultra-luxury real estate marketing through sophisticated AI-driven digital
              architecture. We specialize in transforming exceptional properties for discerning
              clientele and institutional buyers.
            </p>

            <div className="flex flex-col space-y-2">
              <p className="text-amber-300 font-medium tracking-wide">72-HOUR STANDARD DELIVERY</p>
              <p className="text-gray-400 text-sm">Expedited services available for urgent requirements</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="font-light">Digital Architecture</li>
              <li className="font-light">Bespoke Interior Design</li>
              <li className="font-light">Premium Marketing Assets</li>
              <li className="font-light">Strategic Timeline Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Executive Contact</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="font-light">executive@sceneset.ai</li>
              <li className="font-light">(555) 123-4567</li>
              <li className="font-light">Available 24/7</li>
              <li className="font-light">Emergency protocols active</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-200/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-light mb-4 md:mb-0">
              © 2024 Scene Set AI. All rights reserved. | Elevating luxury real estate through digital excellence.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors duration-300">
                <span className="sr-only">Privacy Policy</span>
                <span className="text-sm font-light tracking-wide">Privacy</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors duration-300">
                <span className="sr-only">Terms of Service</span>
                <span className="text-sm font-light tracking-wide">Terms</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
