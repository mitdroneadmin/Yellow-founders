export default function InstructorSpotlight() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-text mb-4 animate-shimmer">Meet Our Instructors</h2>
        <p className="text-xl text-gray-300">Learn from successful African entrepreneurs and industry experts</p>
      </div>

      <div className="glass border-sleek rounded-3xl p-8 shadow-sleek-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
              <span className="text-2xl font-bold text-black">SO</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sarah Okafor</h3>
            <p className="text-primary font-medium mb-2">Tech Entrepreneur</p>
            <p className="text-gray-400 text-sm">Founded 3 successful startups, raised $50M+</p>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
              <span className="text-2xl font-bold text-black">DK</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">David Kenyatta</h3>
            <p className="text-primary font-medium mb-2">Investment Expert</p>
            <p className="text-gray-400 text-sm">Former VC partner, 100+ startup investments</p>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
              <span className="text-2xl font-bold text-black">AH</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Amina Hassan</h3>
            <p className="text-primary font-medium mb-2">Market Research Guru</p>
            <p className="text-gray-400 text-sm">15+ years in African market analysis</p>
          </div>
        </div>
      </div>
    </section>
  );
}