import Hero from '@/components/yf-academy/Hero';
import StarterPack from '@/components/yf-academy/StarterPack';
import CampaignPage from '@/components/yf-academy/CampaignPage';
import InvestorOutreach from '@/components/yf-academy/InvestorOutreach';
import MomentumEngine from '@/components/yf-academy/MomentumEngine';
import ComplianceGuide from '@/components/yf-academy/ComplianceGuide';
import ResourceHub from '@/components/yf-academy/ResourceHub';
import FounderStories from '@/components/yf-academy/FounderStories';
import Community from '@/components/yf-academy/Community';
import EndCTA from '@/components/yf-academy/EndCTA';

export default function YFAcademyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <StarterPack />
      <CampaignPage />
      <InvestorOutreach />
      <MomentumEngine />
      <ComplianceGuide />
      <ResourceHub />
      <FounderStories />
      <Community />
      <EndCTA />
    </div>
  );
}
