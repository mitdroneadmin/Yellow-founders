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
          <div key={index} className="bg-card border border-card-border rounded-lg shadow-soft p-8 text-center transition-transform duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
              <feature.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">{feature.title}</h3>
            <p className="text-body-text leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
