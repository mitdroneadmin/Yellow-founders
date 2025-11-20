export default function CommunityStats() {
  const stats = [
    { value: '5,000+', label: 'Active Students', description: 'Learning and growing together' },
    { value: '200+', label: 'Startups Launched', description: 'By our academy graduates' },
    { value: '$50M+', label: 'Capital Raised', description: 'By academy alumni' },
    { value: '25', label: 'Countries', description: 'Across Africa and diaspora' }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-text mb-4 animate-shimmer">Community Impact</h2>
        <p className="text-xl text-gray-300">Building Africa's next generation of tech leaders</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="glass border-sleek rounded-2xl p-8 text-center hover-lift shadow-sleek">
            <div className="text-4xl font-bold gradient-text mb-2 animate-shimmer">{stat.value}</div>
            <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
            <div className="text-gray-400 text-sm">{stat.description}</div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-primary hover:bg-primary-500 text-black px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover-lift animate-glow shadow-sleek">
          Join Our Community
        </button>
      </div>
    </section>
  );
}