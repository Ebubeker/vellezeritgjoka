import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryGrid = ({ images, activeFilter, onImageClick }) => {
  const filteredImages = images.filter(image => 
    activeFilter === 'all' || image.category === activeFilter
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {images.map((image, index) => (
        <GalleryItem
          key={image.id}
          image={image}
          isVisible={activeFilter === 'all' || image.category === activeFilter}
          onClick={() => onImageClick(index, filteredImages)}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;