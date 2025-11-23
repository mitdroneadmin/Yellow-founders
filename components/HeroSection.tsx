'use client';

import { Rocket, Play } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary animate-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/10 to-transparent animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-16">
          {/* Hero Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            <span className="gradient-text animate-shimmer">Empowering African Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in">
            Invest in African founders you believe in their Dream.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Link
              href="/discover"
              className="bg-primary hover:bg-primary-500 text-black px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover-lift animate-glow shadow-sleek"
            >
              Explore Startups
            </Link>
            <Link
              href="/create"
              className="glass-dark text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover-lift shadow-sleek hover:bg-primary hover:text-black"
            >
              Submit Your Startup
            </Link>
          </div>
        </div>

        {/* Featured Campaigns Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { name: 'FarmAI', pitch: 'AI-powered crop optimization for African farmers', progress: 75, sector: 'AgriTech' },
            { name: 'CleanGrid', pitch: 'Solar microgrids for rural communities', progress: 60, sector: 'Clean Energy' },
            { name: 'MedLink', pitch: 'Telemedicine platform for underserved areas', progress: 85, sector: 'HealthTech' },
          ].map((campaign, index) => (
            <div key={index} className="glass border-sleek rounded-2xl shadow-sleek p-6 hover-lift animate-fade-in">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 animate-pulse-glow">
                <span className="text-black font-bold text-lg">{campaign.name[0]}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{campaign.name}</h3>
              <p className="text-gray-300 mb-4">{campaign.pitch}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">{campaign.progress}% funded</span>
                  <span className="text-primary font-medium">{campaign.sector}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-primary-400 h-2 rounded-full transition-all duration-500 animate-shimmer"
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
