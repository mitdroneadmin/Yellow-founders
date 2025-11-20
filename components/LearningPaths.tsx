import { Code, DollarSign, Lightbulb, TrendingUp } from 'lucide-react';

export default function LearningPaths() {
  const paths = [
    {
      icon: Code,
      title: 'Tech Founder Track',
      description: 'Learn to build and scale tech products from idea to market',
      duration: '12 weeks',
      level: 'Beginner to Advanced',
      gradient: 'from-blue-600 to-purple-700'
    },
    {
      icon: DollarSign,
      title: 'Fundraising Mastery',
      description: 'Master the art of raising capital for African startups',
      duration: '8 weeks',
      level: 'Intermediate',
      gradient: 'from-green-600 to-teal-700'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Strategy',
      description: 'Develop breakthrough solutions for African markets',
      duration: '6 weeks',
      level: 'All Levels',
      gradient: 'from-yellow-600 to-orange-700'
    },
    {
      icon: TrendingUp,
      title: 'Growth & Scale',
      description: 'Scale your startup across African markets',
      duration: '10 weeks',
      level: 'Advanced',
      gradient: 'from-purple-600 to-pink-700'
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-text mb-4 animate-shimmer">Learning Paths</h2>
        <p className="text-xl text-gray-300">Choose your journey to startup success</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {paths.map((path, index) => (
          <div key={index} className="glass border-sleek rounded-2xl p-8 hover-lift group shadow-sleek">
            <div className={`w-16 h-16 bg-gradient-to-r ${path.gradient} rounded-2xl flex items-center justify-center mb-6 animate-glow`}>
              <path.icon className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">{path.title}</h3>
            <p className="text-gray-300 mb-6">{path.description}</p>
            
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-primary font-medium">{path.duration}</span>
              <span className="text-sm text-gray-400">{path.level}</span>
            </div>
            
            <button className="w-full bg-primary hover:bg-primary-500 text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover-lift">
              Start Learning
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}