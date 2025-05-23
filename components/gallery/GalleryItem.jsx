import React from 'react';
import Image from 'next/image';

const GalleryItem = ({ image, isVisible, onClick }) => {
  return (
    <div 
      className={`group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        !isVisible ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      onClick={onClick}
    >
      <div className="relative h-80 bg-gradient-to-br from-green-600 to-green-800 overflow-hidden">
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          // Placeholder for demo
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 group-hover:from-green-500 group-hover:to-green-700 transition-all duration-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <svg className="w-full h-full opacity-20" viewBox="0 0 400 320">
              <circle fill="currentColor" fillOpacity="0.3" cx="100" cy="220" r="80"/>
              <circle fill="currentColor" fillOpacity="0.4" cx="300" cy="120" r="60"/>
              <path fill="currentColor" fillOpacity="0.2" d="M0,250 Q200,180 400,250 V320 H0 Z"/>
            </svg>
          </div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-green-900 mb-1 group-hover:text-green-700 transition-colors">
          {image.title}
        </h3>
        <div className="flex justify-between items-center text-sm">
          <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full font-semibold text-xs">
            {image.categoryLabel}
          </span>
          <span className="text-gray-500">{image.year}</span>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;