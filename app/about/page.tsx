import VisionSection from '@/components/VisionSection';
import CoreValues from '@/components/CoreValues';
import FounderBio from '@/components/FounderBio';
import MediaMentions from '@/components/MediaMentions';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Yellow Founders</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building the infrastructure to unlock Africa's innovation economy
          </p>
        </div>
        <VisionSection />
        <CoreValues />
        <FounderBio />
        <MediaMentions />
      </div>
    </div>
  );
}