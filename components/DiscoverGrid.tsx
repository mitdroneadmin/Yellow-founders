'use client';

import { useState, useEffect } from 'react';
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

export default function DiscoverGrid() {
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
        { id: '7', name: 'FarmMind', pitch: 'Smart irrigation systems for small farms', progress: 30, sector: 'AgriTech', funding_goal: 50000, amount_raised: 15000 },
        { id: '8', name: 'VoiceFlow', pitch: 'Voice-based interfaces for local languages', progress: 70, sector: 'AI/ML', funding_goal: 50000, amount_raised: 35000 },
        { id: '9', name: 'KaziMatchAI', pitch: 'AI job matching for blue-collar workers', progress: 45, sector: 'HR Tech', funding_goal: 50000, amount_raised: 22000 },
        { id: '10', name: 'GreenCycle', pitch: 'Waste management platform for cities', progress: 65, sector: 'CleanTech', funding_goal: 50000, amount_raised: 32000 },
        { id: '11', name: 'HealthBot', pitch: 'WhatsApp health assistance for rural areas', progress: 80, sector: 'HealthTech', funding_goal: 50000, amount_raised: 40000 },
        { id: '12', name: 'LearnHub', 'Offline-first educational content delivery', progress: 35, sector: 'Education', funding_goal: 50000, amount_raised: 17000 },
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 animate-pulse">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-xl"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-16"></div>
              </div>
            </div>
            <div className="h-4 bg-gray-300 rounded mb-4"></div>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <div className="h-3 bg-gray-300 rounded w-16"></div>
                <div className="h-3 bg-gray-300 rounded w-12"></div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2"></div>
              <div className="h-3 bg-gray-300 rounded w-20"></div>
            </div>
            <div className="w-full h-8 bg-gray-300 rounded-xl"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {campaigns.map((campaign, index) => (
        <div 
          key={campaign.id || index} 
          className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-black font-bold text-lg">{campaign.name[0]}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">{campaign.name}</h3>
              <span className="text-sm text-primary font-medium">{campaign.sector}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4 text-sm">{campaign.pitch}</p>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{formatCurrency(campaign.amount_raised)}</span>
              <span className="text-gray-900 font-medium">{campaign.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${campaign.progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500">Goal: {formatCurrency(campaign.funding_goal)}</p>
          </div>

          <button className="w-full bg-primary hover:bg-primary-500 text-black px-4 py-2 rounded-xl font-semibold transition-colors">
            Invest
          </button>
        </div>
      ))}
    </div>
  );
}