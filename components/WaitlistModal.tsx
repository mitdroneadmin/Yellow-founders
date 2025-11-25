'use client';

import { X } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the Movement</h2>
        <p className="text-gray-600 mb-6">Be among the first to invest in Africa's brightest founders.</p>

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
  );
}