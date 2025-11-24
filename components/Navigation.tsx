'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import AuthModal from './AuthModal'; // Import the new AuthModal

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<'signIn' | 'signUp' | null>(null);

  const openModal = (type: 'signIn' | 'signUp') => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-grey-medium z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src="/Untitled design.png"
                  alt="Yellow Founders Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-xl text-secondary">Yellow Founders</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/discover" className="text-secondary hover:text-primary transition-colors font-medium">
                Discover
              </Link>
              <Link href="/create" className="text-secondary hover:text-primary transition-colors font-medium">
                Create
              </Link>
              <Link href="/investors" className="text-secondary hover:text-primary transition-colors font-medium">
                Investors
              </Link>
              <Link href="/yf-academy" className="text-secondary hover:text-primary transition-colors font-medium">
                Y-F Academy
              </Link>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => openModal('signIn')}
                  className="bg-background border border-primary text-primary px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-primary/10 hover:-translate-y-0.5"
                >
                  Sign In
                </button>
                <button
                  onClick={() => openModal('signUp')}
                  className="bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm transition-transform duration-300 transform hover:-translate-y-0.5"
                >
                  Sign Up
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X className="h-6 w-6 text-secondary" /> : <Menu className="h-6 w-6 text-secondary" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-grey-medium">
              <div className="flex flex-col space-y-4">
                <Link href="/discover" className="text-secondary hover:text-primary transition-colors font-medium block">
                  Discover
                </Link>
                <Link href="/create" className="text-secondary hover:text-primary transition-colors font-medium block">
                  Create
                </Link>
                <Link href="/investors" className="text-secondary hover:text-primary transition-colors font-medium block">
                  Investors
                </Link>
                <Link href="/yf-academy" className="text-secondary hover:text-primary transition-colors font-medium block">
                  Y-F Academy
                </Link>
                <button
                  onClick={() => openModal('signIn')}
                  className="text-left w-full text-secondary hover:text-primary transition-colors font-medium"
                >
                  Sign In
                </button>
                <button
                  onClick={() => openModal('signUp')}
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {modalType && <AuthModal isOpen={!!modalType} onClose={closeModal} type={modalType} />}
    </>
  );
}
