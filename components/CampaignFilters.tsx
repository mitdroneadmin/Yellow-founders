'use client';

import { useState } from 'react';

export default function CampaignFilters() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'AgriTech', 'HealthTech', 'Clean Energy', 'FinTech', 'EduTech', 'PayFlow'];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
            activeFilter === filter
              ? 'bg-primary text-black shadow-lg'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}