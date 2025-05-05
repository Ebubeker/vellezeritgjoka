import React from 'react';
import { Leaf } from 'lucide-react';

const WhyUs = () => {
  return (
    <div className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center mb-16">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="bg-green-900 rounded-lg h-64 w-full"></div>
          </div>
          
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="flex items-center mb-4">
              <Leaf className="text-green-600 h-5 w-5 mr-2" />
              <span className="text-green-600 text-sm">Our Vision</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">Beautiful <span className="font-normal">and Sustainable Garden Spaces</span></h2>
            
            <p className="text-gray-700 mb-4">
              Our mission is to design and create beautiful, sustainable gardens that enhance
              your outdoor living space while respecting the environment.
            </p>
            
            <p className="text-gray-700">
              We are committed to quality, innovation, and eco-friendly practices to ensure your
              garden thrives for years to come. Through eco-friendly practices and careful
              planning, we ensure your garden not only looks stunning but also thrives for years
              to come.
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl mb-4">
              <span className="font-bold">Beautiful,</span> <span className="font-normal">Sustainable Gardens</span>
            </h2>
            
            <p className="text-gray-700 mb-4">
              Our vision is to create stunning, sustainable garden spaces that enhance your
              lifestyle and respect the environment.
            </p>
            
            <p className="text-gray-700">
              We aim to blend beauty and functionality, using eco-friendly practices and
              sustainable materials to ensure your garden remains a serene retreat. Our goal is
              to transform your outdoor area into a serene, environmentally responsible retreat
              that you can enjoy for years to come.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="bg-green-900 rounded-lg h-64 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;