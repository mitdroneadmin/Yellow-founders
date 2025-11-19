'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "This is the future of African tech funding.",
      author: "Sarah Okafor",
      role: "Investor, Lagos Angels"
    },
    {
      quote: "I found my first backer in under a week.",
      author: "David Kenyatta",
      role: "Founder, AgriTech Kenya"
    },
    {
      quote: "Finally, a platform built for us, by us.",
      author: "Amina Hassan",
      role: "CEO, HealthTech Ghana"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-primary animate-glow"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4 animate-shimmer">What Our Community Says</h2>
          <p className="text-xl text-gray-400">Real stories from founders and investors</p>
        </div>

        <div className="relative glass border-sleek rounded-3xl p-8 shadow-sleek-lg">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 text-center px-8">
                  <Quote className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse-glow" />
                  <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div>
                    <p className="text-lg font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full glass-dark hover:bg-primary/20 transition-all duration-300 hover-lift border-sleek"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
              className="p-2 rounded-full glass-dark hover:bg-primary/20 transition-all duration-300 hover-lift border-sleek"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary animate-glow' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}