'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">Y</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Yellow Founders</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/discover" className="text-gray-700 hover:text-primary transition-colors">
              Discover
            </Link>
            <Link href="/create" className="text-gray-700 hover:text-primary transition-colors">
              Create
            </Link>
            <Link href="/investors" className="text-gray-700 hover:text-primary transition-colors">
              Investors
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <button className="text-gray-700 hover:text-primary transition-colors">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/discover" className="text-gray-700 hover:text-primary transition-colors">
                Discover
              </Link>
              <Link href="/create" className="text-gray-700 hover:text-primary transition-colors">
                Create
              </Link>
              <Link href="/investors" className="text-gray-700 hover:text-primary transition-colors">
                Investors
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
                About
              </Link>
              <button className="text-gray-700 hover:text-primary transition-colors text-left">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}