/* eslint-disable @next/next/no-img-element */
"use client"
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "RazerPro99",
      role: "Professional Valorant Player",
      content: "This community took my gameplay to the next level. The coaching and tournaments helped me go pro within a year!",
      rating: 5,
      avatar: "teams/phoenix.png"
    },
    {
      id: 2,
      name: "LunaGamer",
      role: "CS:GO Streamer",
      content: "The esports network I found here was incredible. Met my current team through this platform.",
      rating: 4,
      avatar: "teams/phoenix.png"
    },
    {
      id: 3,
      name: "ShadowAssassin",
      role: "Dota 2 Coach",
      content: "As a coach, I've found so many talented players through this community. The competitive scene is thriving!",
      rating: 5,
      avatar: "teams/phoenix.png"
    }
  ];

  return (
    <div className="bg-[#0F0A1E] text-white rounded-2xl"> {/* Dark purple base */}
      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#1E0B4F] to-[#0F0A1E] rounded-2xl">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-300">
              What Our Esports Community Says
            </h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Hear from professional players, streamers, and coaches about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-[#1E1346] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#2A1D5A] border-l-4 border-violet-500"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center">
                      {testimonial.avatar ? (
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full rounded-full object-cover" />
                      ) : (
                        <span className="text-xl font-bold text-white">{testimonial.name.charAt(0)}</span>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-purple-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <FaQuoteLeft className="text-violet-400 text-xl mb-2" />
                  <p className="text-purple-100 italic">{testimonial.content}</p>
                </div>

                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`text-xl ${i < testimonial.rating ? 'text-amber-400' : 'text-[#2A1D5A]'}`} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-purple-300">
              Ready to Join Our Esports Community?
            </h3>
            <button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-violet-900/50">
              Sign Up Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;