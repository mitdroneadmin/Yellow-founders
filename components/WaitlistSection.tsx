export default function WaitlistSection() {
  return (
    <section className="py-20 bg-grey-light text-secondary relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-body-text">Join our community of visionary founders and investors</p>
        </div>

        <div className="bg-card border border-card-border rounded-lg p-8 shadow-soft">
          <form
            name="yfounders-waitlist"
            method="POST"
            action="/thank-you"
            data-netlify="true"
            netlify-honeypot="tell-me-more"
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="yfounders-waitlist" />
            <input type="text" name="tell-me-more" className="hidden" tabIndex={-1} autoComplete="off" />

            <div>
              <label className="block text-sm font-medium mb-2 text-small-label">Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-md bg-background border-input px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-body-text placeholder-grey-deep"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-small-label">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-md bg-background border-input px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-body-text placeholder-grey-deep"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-small-label">What brings you here?</label>
              <input
                name="interest"
                type="text"
                placeholder="Founder, investor, partner"
                className="w-full rounded-md bg-background border-input px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-body-text placeholder-grey-deep"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground hover:bg-primary-hover transition-transform duration-300 transform hover:-translate-y-1"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
