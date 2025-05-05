import React from 'react';

const WhoAreWe = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-wrap items-center">
        {/* Left column with decorative circle */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 relative">
          <div className="bg-green-900 rounded-full h-64 w-64 mt-20 ml-16 relative">
            {/* No leaf or other decorative elements as requested */}
          </div>
        </div>
        
        {/* Right column with content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Sowing dreams, <span className="font-normal">growing landscapes</span></h2>
          
          <p className="text-gray-700 mb-6">
            We transform your landscaping dreams into reality, crafting beautiful, tranquil 
            outdoor spaces that reflect your vision and enhance your lifestyle. Let us grow 
            beauty and joy in every garden.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-1 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm">We Are Experience Gardening</span>
            </div>
            
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-1 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm">We Are Experience Gardening</span>
            </div>
            
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-1 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm">We Adapt Your Need</span>
            </div>
            
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-1 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm">We Adapt Your Need</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;