import React from 'react';

const GalleryHero = () => {
  return (
    <section className="relative h-[60vh] bg-gradient-to-br from-green-900/90 to-green-600/80 flex items-center justify-center text-center text-white overflow-hidden pt-22">

      <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-500 opacity-20"></div>      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">Our Work Gallery</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed animate-fade-in-up [animation-delay:0.3s]">
          Explore our portfolio of stunning landscape transformations. From intimate 
          garden designs to expansive outdoor spaces, see how we bring natural beauty to life.
        </p>
      </div>
    </section>
  );
};

export default GalleryHero;