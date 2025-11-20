import { Mail, Phone, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary animate-glow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden animate-pulse-glow">
                <img 
                  src="/Untitled design.png" 
                  alt="Yellow Founders Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-xl gradient-text">Yellow Founders</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering African entrepreneurs to raise capital from people who believe in their dreams.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 glass-dark rounded-full hover:bg-primary/20 transition-all duration-300 hover-lift cursor-pointer">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
              </div>
              <div className="p-2 glass-dark rounded-full hover:bg-primary/20 transition-all duration-300 hover-lift cursor-pointer">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
              </div>
              <div className="p-2 glass-dark rounded-full hover:bg-primary/20 transition-all duration-300 hover-lift cursor-pointer">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">hello@yellowfounders.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">+234 8156668529</span>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                Our Story
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                Mission & Vision
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                Team
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}