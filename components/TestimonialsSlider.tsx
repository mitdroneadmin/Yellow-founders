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
    <section className="py-20 bg-background text-secondary relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-xl text-body-text">Real stories from founders and investors</p>
        </div>

        <div className="relative bg-card border border-card-border rounded-lg p-8 shadow-soft">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 text-center px-8">
                  <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
                  <blockquote className="text-2xl md:text-3xl font-medium text-secondary mb-8">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="text-lg font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-body-text">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full bg-grey-light hover:bg-grey-medium transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
              className="p-2 rounded-full bg-grey-light hover:bg-grey-medium transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
