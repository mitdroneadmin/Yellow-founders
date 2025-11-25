'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

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
      gradient: 'from-blue-600 to-purple-700'
    },
    {
      id: 2,
      title: 'AI FinTech',
      category: 'Finance',
      description: 'Digital payments and financial inclusion',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-purple-600 to-pink-700'
    },
    {
      id: 3,
      title: 'AI HealthTech',
      category: 'Healthcare',
      description: 'Revolutionary healthcare solutions for Africa',
      image: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-green-600 to-teal-700'
    },
    {
      id: 4,
      title: 'AI AgriTech',
      category: 'Agriculture',
      description: 'Smart farming with artificial intelligence',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-yellow-600 to-orange-700'
    },
    {
      id: 5,
      title: 'AI CleanTech',
      category: 'Clean Energy',
      description: 'Sustainable energy solutions powered by AI',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-cyan-600 to-blue-700'
    },
    {
      id: 6,
      title: 'AI TransTech',
      category: 'Transportation',
      description: 'Smart mobility for African cities',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-indigo-600 to-purple-700'
    },
    {
      id: 7,
      title: 'AI RetailTech',
      category: 'Retail',
      description: 'Next-generation commerce platforms',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-pink-600 to-red-700'
    }
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
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6 animate-shimmer">Powering Africa's AI Revolution</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge AI projects transforming African industries
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel Container */}
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-sleek-lg border border-primary/20 animate-glow">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              >
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-80`}></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center justify-center text-center text-white p-8">
                  <div className="max-w-2xl">
                    <div className="inline-block glass border-sleek text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-fade-in hover-lift">
                      {project.category}
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                      {project.title}
                    </h3>
                    <p className="text-xl md:text-2xl opacity-90 animate-fade-in">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass hover:bg-primary/20 text-white p-3 rounded-full transition-all duration-300 hover-lift border-sleek"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass hover:bg-primary/20 text-white p-3 rounded-full transition-all duration-300 hover-lift border-sleek"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 glass hover:bg-primary/20 text-white p-3 rounded-full transition-all duration-300 hover-lift border-sleek"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125 animate-glow' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="w-full bg-gray-700 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-primary to-primary-400 h-1 rounded-full transition-all duration-300 animate-shimmer"
                style={{ width: `${((currentSlide + 1) / projects.length) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>{currentSlide + 1} of {projects.length}</span>
              <span>{projects[currentSlide].category}</span>
            </div>
          </div>
        </div>

        {/* Project Grid Preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => goToSlide(index)}
              className={`relative h-20 rounded-xl overflow-hidden transition-all duration-300 hover-lift border-sleek ${
                index === currentSlide ? 'ring-2 ring-primary animate-glow' : ''
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-60`}></div>
              </div>
              <div className="relative h-full flex items-center justify-center">
                <span className="text-white text-xs font-semibold text-center px-2">
                  {project.title.replace('AI ', '')}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}