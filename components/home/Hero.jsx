import React from 'react';
import Link from 'next/link';
import Leaf from '@/assets/icons/Leaf';

const Hero = ({
  videoSrc,
  title,
  subtitle,
  description
}) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-green-900/60 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="relative z-20 h-full w-full flex flex-col items-start justify-center text-white pt-16 container mx-auto px-4">
        <div className="flex items-center mb-8">
          <span className="inline-block mr-3">
            <Leaf height={20} width={20} className="hover:bg-green-700"/>
          </span>
          <p className="text-xl font-medium">Passion for the nature</p>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-5xl">
          {title}
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mb-12">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/explore" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center transition-colors duration-300">
            Explore More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          
          <Link href="/how-it-works" className="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white px-6 py-3 rounded-full flex items-center transition-colors duration-300">
            Check Our Catalog
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;