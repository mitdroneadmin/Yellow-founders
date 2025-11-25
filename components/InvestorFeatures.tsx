import { Shield, Brain, Globe } from 'lucide-react';

export default function InvestorFeatures() {
  const features = [
    {
      icon: Shield,
      title: 'Trustworthy Curation',
      description: 'Every startup is thoroughly vetted by our team of experts and industry professionals.'
    },
    {
      icon: Brain,
      title: 'Tech-Driven Verification',
      description: 'Advanced due diligence powered by AI and comprehensive background checks.'
    },
    {
      icon: Globe,
      title: 'High Impact Opportunities',
      description: 'Invest in solutions addressing real problems across African markets.'
    }
  ];

  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <feature.icon className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}