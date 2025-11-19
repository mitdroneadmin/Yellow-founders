import Link from "next/link";
import InvestorFeatures from '@/components/InvestorFeatures';
import InvestorStats from '@/components/InvestorStats';

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Why Invest in African Innovation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of the movement that&apos;s transforming Africa&apos;s tech landscape. Support visionary founders
            building solutions for a continent of over 1.4 billion people.
          </p>
        </div>
        <InvestorFeatures />
        <InvestorStats />
      </div>
    </div>
  );
}