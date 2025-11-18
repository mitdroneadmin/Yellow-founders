export default function WaitlistSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300">Join our community of visionary founders and investors</p>
        </div>

        <div className="bg-white rounded-2xl p-8 text-black">
          <form name="yfounders-waitlist" method="POST" action="/thank-you" data-netlify="true" netlify-honeypot="tell-me-more" className="space-y-4">
            <input type="hidden" name="form-name" value="yfounders-waitlist" />
            <input type="text" name="tell-me-more" className="hidden" tabIndex={-1} autoComplete="off" />
            
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input 
                name="name" 
                type="text" 
                required 
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                name="email" 
                type="email" 
                required 
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">What brings you here?</label>
              <input 
                name="interest" 
                type="text" 
                placeholder="Founder, investor, partner" 
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full rounded-2xl bg-primary px-4 py-3 font-semibold text-black hover:bg-primary-500 transition-colors"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}