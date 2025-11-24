'use client';

import { X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'signIn' | 'signUp';
}

export default function AuthModal({ isOpen, onClose, type }: AuthModalProps) {
  if (!isOpen) return null;

  const title = type === 'signIn' ? 'Sign In' : 'Sign Up';
  const subtitle = type === 'signIn' ? 'Welcome back!' : 'Create your account';
  const buttonText = type === 'signIn' ? 'Sign In' : 'Sign Up';
  const switchText =
    type === 'signIn' ? "Don't have an account?" : 'Already have an account?';
  const switchLinkText = type === 'signIn' ? 'Sign Up' : 'Sign In';

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-card-border rounded-lg max-w-md w-full p-8 relative shadow-soft">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-grey-light rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-secondary mb-2">{title}</h2>
        <p className="text-body-text mb-6">{subtitle}</p>

        <form className="space-y-4">
          {type === 'signUp' && (
            <div>
              <label className="block text-sm font-medium mb-2 text-small-label">Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-md bg-background border-input px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-body-text placeholder-grey-deep"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2 text-small-label">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-md bg-background border-input px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-body-text placeholder-grey-deep"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-small-label">Password</label>
            <input
              name="password"
              type="password"
              required
              className="w-full rounded-md bg-background border-input px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-body-text placeholder-grey-deep"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground hover:bg-primary-hover transition-transform duration-300 transform hover:-translate-y-1"
          >
            {buttonText}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-small-label">
            {switchText}{' '}
            <button className="text-primary hover:underline">{switchLinkText}</button>
          </p>
        </div>
      </div>
    </div>
  );
}
