import { BookOpen, Users, Award } from 'lucide-react';

export default function AcademyHero() {
  return (
    <section className="text-center mb-20">
      <div className="glass border-sleek rounded-3xl p-12 shadow-sleek-lg">
        <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-8 animate-glow">
          <BookOpen className="w-10 h-10 text-black" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 animate-shimmer">
          Y-F Academy
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Master the skills to build, fund, and scale African tech startups
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">5,000+</h3>
            <p className="text-gray-400">Active Learners</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
            <p className="text-gray-400">Expert Courses</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">95%</h3>
            <p className="text-gray-400">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}