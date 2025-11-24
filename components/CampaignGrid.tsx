import Link from 'next/link';

export default function CampaignGrid() {
  const campaigns = [
    { name: 'FarmAI', pitch: 'AI-powered crop optimization for African farmers', progress: 75, sector: 'AgriTech', raised: '$45K', goal: '$60K' },
    { name: 'CleanGrid', pitch: 'Solar microgrids for rural communities', progress: 60, sector: 'Clean Energy', raised: '$72K', goal: '$120K' },
    { name: 'MedLink', pitch: 'Telemedicine platform for underserved areas', progress: 85, sector: 'HealthTech', raised: '$85K', goal: '$100K' },
    { name: 'EduTech', pitch: 'Digital learning platform for African students', progress: 40, sector: 'Education', raised: '$20K', goal: '$50K' },
    { name: 'WaterSense', pitch: 'IoT water quality monitoring systems', progress: 90, sector: 'CleanTech', raised: '$90K', goal: '$100K' },
    { name: 'PayFlow', pitch: 'Mobile payments for the unbanked', progress: 55, sector: 'FinTech', raised: '$110K', goal: '$200K' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Featured Campaigns</h2>
          <p className="text-xl text-body-text">Support the next generation of African innovation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-card border border-card-border rounded-lg shadow-soft p-6 transition-transform duration-300 transform hover:scale-105 animate-fade-up"
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
              <p className="text-body-text mb-6 h-16">{campaign.pitch}</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-small-label">{campaign.raised} raised</span>
                  <span className="text-secondary font-medium">{campaign.progress}% of {campaign.goal}</span>
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

        <div className="text-center mt-12">
          <Link
            href="/discover"
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-transform duration-300 transform hover:-translate-y-1"
          >
            View All Campaigns
          </Link>
        </div>
      </div>
    </section>
  );
}
