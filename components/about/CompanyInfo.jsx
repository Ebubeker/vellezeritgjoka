import React from 'react';
import { Phone } from 'lucide-react';

const CompanyInfo = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center">
        <div className="bg-green-900 rounded-lg p-2 mr-4">
          <img 
            src="/api/placeholder/40/40" 
            alt="CEO" 
            className="rounded-md w-10 h-10" 
          />
        </div>
        
        <div>
          <p className="font-bold">Arlene McCoy</p>
          <p className="text-sm text-gray-600">CEO & Founder</p>
        </div>
        
        <div className="ml-8 bg-green-100 rounded-full p-2">
          <Phone className="text-green-600 h-5 w-5" />
        </div>
        
        <div className="ml-2">
          <p className="text-xs text-gray-600">Call Us Any Time</p>
          <p className="text-sm font-semibold">(+01) 789 987 645</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;