import dynamic from 'next/dynamic';
import DiscoverHeader from '@/components/DiscoverHeader';
import CampaignFilters from '@/components/CampaignFilters';

const DiscoverGrid = dynamic(() => import('@/components/DiscoverGrid'));

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DiscoverHeader />
        <CampaignFilters />
        <DiscoverGrid />
      </div>
    </div>
  );
}