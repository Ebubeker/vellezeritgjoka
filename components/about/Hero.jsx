import React from 'react';

const Hero = () => {
  return (
    <div className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
        <div className="flex items-center space-x-2 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <span>/</span>
          <span>About Us</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;