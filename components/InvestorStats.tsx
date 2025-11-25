export default function InvestorStats() {
  const stats = [
    { value: '500+', label: 'Early Signups' },
    { value: '20+', label: 'Campaigns in Review' },
    { value: '$100K+', label: 'Pledged by Community' },
    { value: '15', label: 'Countries Represented' }
  ];

  return (
    <section className="py-16">
      <div className="bg-gray-900 rounded-2xl p-12 text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Platform Statistics</h2>
          <p className="text-gray-400">Growing community of innovators and investors</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}