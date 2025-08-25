export default function MediaMentions() {
  const mentions = [
    { name: 'TechCrunch', logo: 'TC' },
    { name: 'StartupGrind', logo: 'SG' },
    { name: 'African Business', logo: 'AB' },
    { name: 'Forbes Africa', logo: 'FA' }
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Media Mentions</h2>
      
      <div className="bg-gray-100 rounded-2xl p-8">
        <p className="text-center text-gray-600 mb-8">Featured in leading publications</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {mentions.map((mention, index) => (
            <div key={index} className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">{mention.logo}</span>
              </div>
              <span className="text-gray-600 font-semibold">{mention.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}