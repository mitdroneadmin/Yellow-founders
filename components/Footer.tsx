import { Mail, Phone, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background text-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src="/Untitled design.png"
                  alt="Yellow Founders Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-xl text-secondary">Yellow Founders</span>
            </Link>
            <p className="text-body-text mb-6 max-w-md">
              Empowering African entrepreneurs to raise capital from people who believe in their dreams.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-grey-light rounded-full hover:bg-primary/10 transition-colors">
                <Twitter className="w-5 h-5 text-body-text hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-2 bg-grey-light rounded-full hover:bg-primary/10 transition-colors">
                <Linkedin className="w-5 h-5 text-body-text hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-2 bg-grey-light rounded-full hover:bg-primary/10 transition-colors">
                <Instagram className="w-5 h-5 text-body-text hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-body-text" />
                <span className="text-body-text">hello@yellowfounders.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-body-text" />
                <span className="text-body-text">+234 8156668529</span>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">About</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-body-text hover:text-primary transition-colors">
                Our Story
              </Link>
              <Link href="/about" className="block text-body-text hover:text-primary transition-colors">
                Mission & Vision
              </Link>
              <Link href="/about" className="block text-body-text hover:text-primary transition-colors">
                Team
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Legal</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-body-text hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="block text-body-text hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
