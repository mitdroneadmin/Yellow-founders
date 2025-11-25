export default function WaitlistSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary animate-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary animate-pulse-glow"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4 animate-shimmer">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300">Join our community of visionary founders and investors</p>
        </div>

        <div className="glass border-sleek rounded-2xl p-8 text-white shadow-sleek-lg hover-lift">
          <form name="yfounders-waitlist" method="POST" action="/thank-you" data-netlify="true" netlify-honeypot="tell-me-more" className="space-y-4">
            <input type="hidden" name="form-name" value="yfounders-waitlist" />
            <input type="text" name="tell-me-more" className="hidden" tabIndex={-1} autoComplete="off" />
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
              <input 
                name="name" 
                type="text" 
                required 
                className="w-full rounded-xl glass-dark border-sleek px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400" 
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
              <input 
                name="email" 
                type="email" 
                required 
                className="w-full rounded-xl glass-dark border-sleek px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400" 
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">What brings you here?</label>
              <input 
                name="interest" 
                type="text" 
                placeholder="Founder, investor, partner" 
                className="w-full rounded-xl glass-dark border-sleek px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400" 
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full rounded-2xl bg-primary px-4 py-3 font-semibold text-black hover:bg-primary-500 transition-all duration-300 hover-lift animate-glow shadow-sleek"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}