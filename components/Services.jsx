import React from 'react';

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Digital Architecture',
      description: 'Advanced AI-driven renovation of architectural photography, elevating property presentation through sophisticated digital enhancement and precise material simulation.'
    },
    {
      number: '02',
      title: 'Bespoke Interior Design',
      description: 'Curated design solutions featuring authentic luxury brands, artisanal craftsmanship, and bespoke furnishings tailored to the most discerning aesthetic preferences.'
    },
    {
      number: '03',
      title: 'Premium Marketing Assets',
      description: 'Comprehensive visual storytelling that transcends traditional property photography, creating compelling narratives for exclusive clientele and institutional buyers.'
    },
    {
      number: '04',
      title: 'Strategic Timeline Management',
      description: 'Precise project scheduling with 72-hour standard delivery and expedited protocols for time-sensitive transactions and competitive market positioning.'
    },
    {
      number: '05',
      title: 'Authentic Luxury Standards',
      description: 'Uncompromising commitment to genuine luxury specifications, featuring verified materials, authenticated brands, and industry-leading quality assurance protocols.'
    },
    {
      number: '06',
      title: 'Executive Broker Partnership',
      description: 'Dedicated collaboration framework designed exclusively for premier real estate professionals managing ultra-luxury portfolios and institutional transactions.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="w-16 h-px bg-amber-300 mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tight">
            Our <span className="gold-gradient-text font-normal">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            We deliver unparalleled digital renovation services for discerning clients in the
            ultra-luxury real estate market, combining cutting-edge technology with
            uncompromising standards of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-amber-200/10 p-10 rounded-xl hover:border-amber-300/30 transition-all duration-500 hover:bg-white/8"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-slate-900 font-bold text-lg">
                {service.number}
              </div>

              <div className="pt-4">
                <h3 className="text-2xl font-semibold text-white mb-6 tracking-wide">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed font-light text-lg">{service.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Premium differentiators */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-amber-200/20 p-12 rounded-2xl max-w-6xl mx-auto">
            <h3 className="text-3xl font-light gold-text mb-12 tracking-wide">Why Leading Brokers Choose Us</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="space-y-8">
                <div>
                  <h4 className="text-white text-xl font-semibold mb-3 tracking-wide">Authentic Luxury Materials</h4>
                  <p className="text-gray-300 font-light leading-relaxed">
                    Every renovation incorporates genuine luxury specifications, verified materials,
                    and authenticated brands that meet the expectations of the most sophisticated clientele.
                  </p>
                </div>

                <div>
                  <h4 className="text-white text-xl font-semibold mb-3 tracking-wide">Proprietary AI Technology</h4>
                  <p className="text-gray-300 font-light leading-relaxed">
                    Our advanced algorithms deliver photorealistic results that surpass traditional
                    visualization methods, ensuring uncompromising quality and precision.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-white text-xl font-semibold mb-3 tracking-wide">Expedited Delivery</h4>
                  <p className="text-gray-300 font-light leading-relaxed">
                    Strategic project management ensures 72-hour standard delivery with
                    immediate availability for urgent transactions and competitive market positioning.
                  </p>
                </div>

                <div>
                  <h4 className="text-white text-xl font-semibold mb-3 tracking-wide">Ultra-Luxury Specialization</h4>
                  <p className="text-gray-300 font-light leading-relaxed">
                    Exclusive focus on $3M+ residential properties with deep understanding of
                    institutional buyer requirements and luxury market dynamics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
