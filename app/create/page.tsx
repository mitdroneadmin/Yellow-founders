import CreateCampaignFlow from '@/components/CreateCampaignFlow';

export default function CreatePage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Create Your Campaign</h1>
          <p className="text-xl text-body-text">Share your vision with investors who believe in African innovation</p>
        </div>
        <CreateCampaignFlow />
      </div>
    </div>
  );
}
