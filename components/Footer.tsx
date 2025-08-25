import { Mail, Phone, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">Y</span>
              </div>
              <span className="font-bold text-xl">Yellow Founders</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering African entrepreneurs to raise capital from people who believe in their dreams.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
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

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Yellow Founders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}