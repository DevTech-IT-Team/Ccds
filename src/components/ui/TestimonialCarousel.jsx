import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const TestimonialCarousel = ({ className = '' }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div className="bg-white rounded-2xl shadow-card border border-blue-pale/60 p-8 md:p-10 relative overflow-hidden">
        {/* bg decoration */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-pale/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          {/* Stars */}
          <div className="flex gap-1 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-blue fill-blue" />
            ))}
          </div>

          <p className="text-lg md:text-xl text-navy-mid italic leading-relaxed mb-6 min-h-[80px]">
            "{testimonials[current].quote}"
          </p>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue to-blue-btn flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              {testimonials[current].name.charAt(0)}
            </div>
            <span className="font-semibold text-navy-mid">{testimonials[current].name}</span>
          </div>
        </div>
      </div>

      {/* Nav buttons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-5 bg-white rounded-full p-2.5 shadow-card border border-blue-pale hover:bg-blue-pale hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-blue/40"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 text-navy-mid" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-5 bg-white rounded-full p-2.5 shadow-card border border-blue-pale hover:bg-blue-pale hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-blue/40"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 text-navy-mid" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-6 h-2 bg-blue' : 'w-2 h-2 bg-blue-pale hover:bg-blue-glow'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
