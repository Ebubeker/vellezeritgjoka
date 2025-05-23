"use client"; // Add this if using app directory

import { galleryImages } from "@/assets/data/galleryData";
import FilterTabs from "@/components/gallery/FilterTabs";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryHero from "@/components/gallery/GalleryHero";
import ImageModal from "@/components/gallery/ImageModel";
import StatsSection from "@/components/gallery/StatsSection";
import VideoText from "@/components/gallery/VideoText";
import { useState } from "react";

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState([]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleImageClick = (index, filteredImages) => {
    setCurrentImageIndex(index);
    setModalImages(filteredImages);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev < modalImages.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const filteredImages = galleryImages.filter(
    (image) => activeFilter === "all" || image.category === activeFilter
  );

  return (
    <div>
      <GalleryHero />

      <VideoText
        videoUrl="/aday.mp4"
        title={
          <>
            A day
            <span className="text-green-600 ml-2 font-light">with our diverse and beautiful plants!</span>
          </>
        }
        description="At Vëllezërit Gjoka, we combine traditional methods with modern techniques to grow our plants naturally and sustainably. In our state-of-the-art greenhouses, each plant receives optimal care without the use of harmful chemicals, ensuring healthy growth from seedling to maturity. Our careful packaging and handling procedures guarantee that our plants reach international markets in perfect condition, maintaining the highest quality standards throughout their journey."
      />

      <StatsSection />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <FilterTabs
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
          <GalleryGrid
            images={galleryImages}
            activeFilter={activeFilter}
            onImageClick={(index) => handleImageClick(index, filteredImages)}
          />
        </div>
      </section>

      <ImageModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        images={modalImages}
        currentIndex={currentImageIndex}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </div>
  );
};

export default GalleryPage;
