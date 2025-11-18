'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { supabase } from '@/lib/supabase';

interface Campaign {
  id: string;
  name: string;
  pitch: string;
  sector: string;
  funding_goal: number;
  amount_raised: number;
  progress: number;
}

export default function CampaignGrid() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const { data, error } = await supabase
        .from('campaigns')
        .select('*')
        .eq('status', 'active')
        .limit(6)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCampaigns(data || []);
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      // Fallback to static data if Supabase fails
      setCampaigns([
        { id: '1', name: 'FarmAI', pitch: 'AI-powered crop optimization for African farmers', progress: 75, sector: 'AgriTech', funding_goal: 60000, amount_raised: 45000 },
        { id: '2', name: 'CleanGrid', pitch: 'Solar microgrids for rural communities', progress: 60, sector: 'Clean Energy', funding_goal: 120000, amount_raised: 72000 },
        { id: '3', name: 'MedLink', pitch: 'Telemedicine platform for underserved areas', progress: 85, sector: 'HealthTech', funding_goal: 100000, amount_raised: 85000 },
        { id: '4', name: 'EduTech', pitch: 'Digital learning platform for African students', progress: 40, sector: 'Education', funding_goal: 50000, amount_raised: 20000 },
        { id: '5', name: 'WaterSense', pitch: 'IoT water quality monitoring systems', progress: 90, sector: 'CleanTech', funding_goal: 100000, amount_raised: 90000 },
        { id: '6', name: 'PayFlow', pitch: 'Mobile payments for the unbanked', progress: 55, sector: 'FinTech', funding_goal: 200000, amount_raised: 110000 },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return `$${(amount / 1000).toFixed(0)}K`;
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Campaigns</h2>
            <p className="text-xl text-gray-600">Support the next generation of African innovation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 animate-pulse">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-xl"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-16"></div>
                  </div>
                </div>
                <div className="h-4 bg-gray-300 rounded mb-6"></div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <div className="h-3 bg-gray-300 rounded w-16"></div>
                    <div className="h-3 bg-gray-300 rounded w-12"></div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Campaigns</h2>
          <p className="text-xl text-gray-600">Support the next generation of African innovation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <div 
              key={campaign.id || index} 
              className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-black font-bold text-lg">{campaign.name[0]}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{campaign.name}</h3>
                  <span className="text-sm text-primary font-medium">{campaign.sector}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{campaign.pitch}</p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">{formatCurrency(campaign.amount_raised)} raised</span>
                  <span className="text-gray-900 font-medium">{campaign.progress}% of {formatCurrency(campaign.funding_goal)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-500 group-hover:bg-primary-400"
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/discover"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg"
          >
            View All Campaigns
          </Link>
        </div>
      </div>
    </section>
  );
}