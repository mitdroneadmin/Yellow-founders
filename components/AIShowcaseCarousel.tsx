'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Image from 'next/image';

export default function AIShowcaseCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const projects = [
    {
      id: 1,
      title: 'AI EduTech',
      category: 'Education',
      description: 'Personalized learning with AI technology',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 2,
      title: 'AI FinTech',
      category: 'Finance',
      description: 'Digital payments and financial inclusion',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 3,
      title: 'AI HealthTech',
      category: 'Healthcare',
      description: 'Revolutionary healthcare solutions for Africa',
      image: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-grey-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-secondary mb-6">Powering Africa's AI Revolution</h2>
          <p className="text-xl text-body-text max-w-3xl mx-auto">
            Discover cutting-edge AI projects transforming African industries
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-soft border border-grey-medium">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="z-0"
                />
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="relative h-full flex items-center justify-center text-center text-white p-8 z-20">
                  <div className="max-w-2xl animate-fade-up">
                    <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
                      {project.category}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h3>
                    <p className="text-xl md:text-2xl opacity-90">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-secondary p-3 rounded-full shadow-md transition-transform duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-secondary p-3 rounded-full shadow-md transition-transform duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 bg-background/80 hover:bg-background text-secondary p-3 rounded-full shadow-md transition-transform duration-300 hover:scale-110"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>

          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-primary' : 'bg-grey-deep hover:bg-primary'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
