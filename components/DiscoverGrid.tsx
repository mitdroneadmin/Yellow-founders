export default function DiscoverGrid() {
  const campaigns = [
    { name: 'FarmAI', pitch: 'AI-powered crop optimization for African farmers', progress: 75, sector: 'AgriTech', raised: '$45K', goal: '$60K' },
    { name: 'CleanGrid', pitch: 'Solar microgrids for rural communities', progress: 60, sector: 'Clean Energy', raised: '$72K', goal: '$120K' },
    { name: 'MedLink', pitch: 'Telemedicine platform for underserved areas', progress: 85, sector: 'HealthTech', raised: '$85K', goal: '$100K' },
    { name: 'EduTech', pitch: 'Digital learning platform for African students', progress: 40, sector: 'Education', raised: '$20K', goal: '$50K' },
    { name: 'WaterSense', pitch: 'IoT water quality monitoring systems', progress: 90, sector: 'CleanTech', raised: '$90K', goal: '$100K' },
    { name: 'PayFlow', pitch: 'Mobile payments for the unbanked', progress: 55, sector: 'FinTech', raised: '$110K', goal: '$200K' },
    { name: 'FarmMind', pitch: 'Smart irrigation systems for small farms', progress: 30, sector: 'AgriTech', raised: '$15K', goal: '$50K' },
    { name: 'VoiceFlow', pitch: 'Voice-based interfaces for local languages', progress: 70, sector: 'AI/ML', raised: '$35K', goal: '$50K' },
    { name: 'KaziMatchAI', pitch: 'AI job matching for blue-collar workers', progress: 45, sector: 'HR Tech', raised: '$22K', goal: '$50K' },
    { name: 'GreenCycle', pitch: 'Waste management platform for cities', progress: 65, sector: 'CleanTech', raised: '$32K', goal: '$50K' },
    { name: 'HealthBot', pitch: 'WhatsApp health assistance for rural areas', progress: 80, sector: 'HealthTech', raised: '$40K', goal: '$50K' },
    { name: 'LearnHub', pitch: 'Offline-first educational content delivery', progress: 35, sector: 'Education', raised: '$17K', goal: '$50K' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {campaigns.map((campaign, index) => (
        <div 
          key={index} 
          className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-black font-bold text-lg">{campaign.name[0]}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">{campaign.name}</h3>
              <span className="text-sm text-primary font-medium">{campaign.sector}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4 text-sm">{campaign.pitch}</p>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{campaign.raised}</span>
              <span className="text-gray-900 font-medium">{campaign.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${campaign.progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500">Goal: {campaign.goal}</p>
          </div>

          <button className="w-full bg-primary hover:bg-primary-500 text-black px-4 py-2 rounded-xl font-semibold transition-colors">
            Invest
          </button>
        </div>
      ))}
    </div>
  );
}