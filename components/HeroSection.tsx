'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage:
            'radial-gradient(circle at top left, #35556E 20%, transparent 20%), radial-gradient(circle at bottom right, #35556E 20%, transparent 20%)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 z-10">
        <div className="text-center mb-16">
          {/* Hero Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6 animate-fade-up">
            Empowering African Innovation
          </h1>

          <p className="text-xl md:text-2xl text-body-text mb-12 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Invest in African founders you believe in their Dream.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/discover"
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-transform duration-300 transform hover:-translate-y-1"
            >
              Explore Startups
            </Link>
            <Link
              href="/create-campaign"
              className="bg-background border border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary/10 hover:-translate-y-1"
            >
              Submit Your Startup
            </Link>
          </div>
        </div>

        {/* Featured Campaigns Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: 'FarmAI', pitch: 'AI-powered crop optimization for African farmers', progress: 75, sector: 'AgriTech' },
            { name: 'CleanGrid', pitch: 'Solar microgrids for rural communities', progress: 60, sector: 'Clean Energy' },
            { name: 'MedLink', pitch: 'Telemedicine platform for underserved areas', progress: 85, sector: 'HealthTech' },
          ].map((campaign, index) => (
            <div
              key={index}
              className="bg-card border border-card-border rounded-lg shadow-soft p-6 transition-transform duration-300 transform hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-grey-light rounded-xl flex items-center justify-center mr-4">
                  <span className="text-secondary font-bold text-lg">{campaign.name[0]}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">{campaign.name}</h3>
                  <span className="text-accent-foreground bg-accent px-2 py-1 rounded-full text-sm font-semibold">{campaign.sector}</span>
                </div>
              </div>
              <p className="text-body-text mb-4">{campaign.pitch}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-small-label">{campaign.progress}% funded</span>
                </div>
                <div className="w-full bg-grey-medium rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
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
