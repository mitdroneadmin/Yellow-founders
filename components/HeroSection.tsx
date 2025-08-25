'use client';

import { useState } from 'react';
import { Rocket, Play } from 'lucide-react';
import WaitlistModal from './WaitlistModal';
import Link from 'next/link';

export default function HeroSection() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary-300"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-16">
          {/* Beta Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Rocket className="w-4 h-4" />
            <span className="font-medium">🚀 Beta Access Now Open</span>
          </div>

          {/* Hero Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Fuel Africa's Future
            <br />
            <span className="text-primary">with Bold Ideas</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in">
            Invest in African founders you believe in their Dream.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <button
              onClick={() => setShowWaitlist(true)}
              className="bg-primary hover:bg-primary-500 text-black px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Join Waitlist
            </button>
            <Link
              href="/create"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
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
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                <span className="text-black font-bold text-lg">{campaign.name[0]}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{campaign.name}</h3>
              <p className="text-gray-600 mb-4">{campaign.pitch}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">{campaign.progress}% funded</span>
                  <span className="text-primary font-medium">{campaign.sector}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WaitlistModal isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
    </section>
  );
}