import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-8">
            We&apos;ve received your submission. Our team will review it and get back to you within 48 hours.
          </p>
          <Link 
            href="/"
            className="inline-block bg-primary px-6 py-3 rounded-2xl font-semibold text-black hover:bg-primary-500 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}