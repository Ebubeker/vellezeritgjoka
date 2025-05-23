import React from 'react';
import Image from 'next/image';

const WhyChooseUsSection= ({
  imagePath = "/images/garden-image.jpg",
  backgroundClassName = "bg-green-50"
}) => {
  // Features data
  const features = [
    {
      id: "expertise",
      title: "Expertise & Experience",
      description: "Years of expertise in crafting beautiful gardens.",
      iconPath: "/icons/expertise.svg"
    },
    {
      id: "craftsmanship",
      title: "High-Quality Craftsmanship",
      description: "Top-notch craftsmanship with premium materials and attention.",
      iconPath: "/icons/craftsmanship.svg"
    },
    {
      id: "customization",
      title: "Personalized Solutions",
      description: "Custom designs tailored to your specific needs and preferences.",
      iconPath: "/icons/customization.svg"
    },
    {
      id: "reliability",
      title: "Reliability & Timeliness",
      description: "Projects completed on schedule with consistent communication.",
      iconPath: "/icons/reliability.svg"
    }
  ];

  // Only show the first 2 features in this component to match the design
  const visibleFeatures = features.slice(0, 2);

  return (
    <section className={`${backgroundClassName} py-40 overflow-hidden relative`}>
      {/* Background Circle Decoration */}
      <div className="absolute -right-48 -bottom-48 w-96 h-96 rounded-full border-2 border-green-200 opacity-30"></div>
      <div className="absolute right-16 bottom-16 w-64 h-64 rounded-full border-2 border-green-200 opacity-30"></div>
      <div className="absolute right-64 top-64 w-16 h-16 rounded-full bg-green-100 opacity-50"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left Column (Image) */}
          <div className="w-full lg:w-1/2 relative">
            {/* Main image */}
            <div className="bg-green-900 w-full aspect-square rounded-none relative !rounded-[20px]">
              {imagePath ? (
                <Image
                  src={imagePath}
                  alt="Beautiful garden landscape"
                  fill
                  className="object-cover !rounded-[20px]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-green-800/20 text-4xl font-medium">
                  456 × 636
                </div>
              )}
            </div>
          </div>
          
          {/* Right Column (Content) */}
          <div className="w-full lg:w-1/2">
            {/* Section Header with Leaf Icon */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-green-600 font-medium text-xl">Why Choose Us</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Why choose us <span className="text-green-700 font-light">for your landscaping needs?</span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-700 mb-12 text-lg">
              Choose us for expert landscaping: personalized designs, quality craftsmanship, 
              and dedicated service to make your outdoor space exceptional.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 gap-y-10">
              {visibleFeatures.map((feature) => (
                <div key={feature.id} className="flex gap-5 w-full">
                  {/* Feature Icon */}
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-5">
                    {
                      <svg className="w-7 h-7 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                      </svg>
                    }
                  </div>
                  <div>
                    {/* Feature Title and Description */}
                    <h3 className="text-xl font-bold text-green-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;