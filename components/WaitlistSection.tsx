'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function WaitlistSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      interest: formData.get('interest') as string,
    };

    try {
      if (!supabase) {
        throw new Error('Supabase not configured');
      }
      
      const { error } = await supabase
        .from('waitlist')
        .insert([data]);

      if (error) throw error;

      setMessage('Successfully joined the waitlist!');
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      setMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300">Join our community of visionary founders and investors</p>
        </div>

        <div className="bg-white rounded-2xl p-8 text-black">
          {message && (
            <div className={`p-3 rounded-lg mb-4 ${message.includes('Successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} name="yfounders-waitlist" method="POST" action="/thank-you" data-netlify="true" netlify-honeypot="tell-me-more" className="space-y-4">
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
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-primary px-4 py-3 font-semibold text-black hover:bg-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}