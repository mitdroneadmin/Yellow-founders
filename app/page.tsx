import HeroSection from '@/components/HeroSection';
import AIShowcaseCarousel from '@/components/AIShowcaseCarousel';
import CampaignGrid from '@/components/CampaignGrid';
import TrustSignals from '@/components/TrustSignals';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import WaitlistSection from '@/components/WaitlistSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hidden Netlify Forms for build-time registration */}
      <form name="yfounders-waitlist" method="POST" data-netlify="true" netlify-honeypot="tell-me-more" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="interest" />
      </form>

      <form name="yfounders-startup-submission" method="POST" data-netlify="true" netlify-honeypot="tell-me-more" hidden>
        <input type="text" name="founderName" />
        <input type="email" name="founderEmail" />
        <input type="text" name="startupName" />
        <input type="text" name="fundingGoal" />
        <textarea name="pitch"></textarea>
      </form>

      <HeroSection />
      <AIShowcaseCarousel />
      <CampaignGrid />
      <TrustSignals />
      <TestimonialsSlider />
      <WaitlistSection />
    </div>
  );
}