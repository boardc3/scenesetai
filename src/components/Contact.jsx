import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    company: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        address: '',
        company: '',
        timeline: '',
        message: ''
      });
    }, 2000);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-r from-white/10 via-white/15 to-white/10 backdrop-blur-sm border border-amber-200/30 p-16 rounded-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2 className="text-4xl font-light gold-text mb-6 tracking-wide">Inquiry Received</h2>
              <p className="text-white text-xl mb-8 leading-relaxed font-light">
                Thank you for your interest in our premium digital renovation services.
                A member of our executive team will contact you within two hours to discuss
                your ultra-luxury property requirements.
              </p>
              <p className="text-gray-300 mb-12 leading-relaxed font-light">
                Our specialization in $3M+ residential properties ensures we understand
                the unique demands of discerning clientele and institutional buyers.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold tracking-wide hover:from-amber-300 hover:to-amber-500 transition-all duration-300"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-amber-300 mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tight">
              Initiate Your <span className="gold-text-metallic font-normal">Transformation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Partner with us to elevate your ultra-luxury property portfolio through
              sophisticated digital renovation and premium marketing assets.
            </p>
          </div>

          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-900 font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <div className="text-white font-semibold text-lg mb-2 tracking-wide">Consultation</div>
              <div className="text-gray-400 text-sm leading-relaxed">Initial assessment of your property requirements and objectives</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-900 font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <div className="text-white font-semibold text-lg mb-2 tracking-wide">Digital Enhancement</div>
              <div className="text-gray-400 text-sm leading-relaxed">AI-powered renovation using authentic luxury specifications</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-900 font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <div className="text-white font-semibold text-lg mb-2 tracking-wide">Delivery</div>
              <div className="text-gray-400 text-sm leading-relaxed">Premium marketing assets delivered within your specified timeline</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-amber-200/20 p-12 md:p-16 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-white font-semibold text-lg tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-amber-200/30 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20 text-lg"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="block text-white font-semibold text-lg tracking-wide">
                    Firm/Organization *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-amber-200/30 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20 text-lg"
                    placeholder="Your brokerage or firm name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="block text-white font-semibold text-lg tracking-wide">
                  Property Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-amber-200/30 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20 text-lg"
                  placeholder="Complete property address"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="timeline" className="block text-white font-semibold text-lg tracking-wide">
                  Required Timeline *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-amber-200/30 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20 text-lg"
                >
                  <option value="" className="bg-slate-900">Select preferred timeline</option>
                  <option value="rush" className="bg-slate-900">Immediate - Same business day if available</option>
                  <option value="24h" className="bg-slate-900">24 hours - Expedited service</option>
                  <option value="72h" className="bg-slate-900">72 hours - Standard processing</option>
                  <option value="1week" className="bg-slate-900">One week - Extended timeline</option>
                  <option value="flexible" className="bg-slate-900">Flexible - No specific deadline</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-white font-semibold text-lg tracking-wide">
                  Project Specifications
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white/10 border border-amber-200/30 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20 text-lg resize-none"
                  placeholder="Please describe your property, specific renovation requirements, target market, or any particular design preferences..."
                ></textarea>
              </div>

              <div className="text-center pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-16 py-6 rounded-lg font-semibold text-xl tracking-wide hover:from-amber-300 hover:to-amber-500 transition-all duration-300 shadow-2xl shadow-amber-500/25 hover:shadow-amber-400/40 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Inquiry...
                    </span>
                  ) : (
                    'Initiate Transformation'
                  )}
                </button>
              </div>

              <div className="text-center pt-8 border-t border-amber-200/20">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Upon submission, you will receive confirmation within two hours.
                  Standard processing time is 72 hours with expedited services available for urgent requirements.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
