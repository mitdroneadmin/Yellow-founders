import { CheckCircle, Eye, Heart } from 'lucide-react';

export default function CoreValues() {
  const values = [
    {
      icon: CheckCircle,
      title: 'Compliant',
      description: 'We operate within regulatory frameworks to ensure safe and legal investment opportunities.'
    },
    {
      icon: Eye,
      title: 'Transparent',
      description: 'Full disclosure and clear communication at every step of the investment process.'
    },
    {
      icon: Heart,
      title: 'High Trust',
      description: 'Building lasting relationships between founders and investors based on mutual respect.'
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <value.icon className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}