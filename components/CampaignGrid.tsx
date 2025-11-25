import Link from "next/link";
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
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4 animate-shimmer">Featured Campaigns</h2>
          <p className="text-xl text-gray-300">Support the next generation of African innovation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <div 
              key={index} 
              className="glass border-sleek rounded-2xl shadow-sleek p-6 hover-lift group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center animate-pulse-glow">
                  <span className="text-black font-bold text-lg">{campaign.name[0]}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{campaign.name}</h3>
                  <span className="text-sm text-primary font-medium">{campaign.sector}</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{campaign.pitch}</p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">{campaign.raised} raised</span>
                  <span className="text-white font-medium">{campaign.progress}% of {campaign.goal}</span>
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

        <div className="text-center mt-12">
          <Link 
            href="/discover"
            className="inline-block glass-dark text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover-lift shadow-sleek hover:bg-primary hover:text-black border-sleek"
          >
            View All Campaigns
          </Link>
        </div>
      </div>
    </section>
  );
}