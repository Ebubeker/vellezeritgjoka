import React from "react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation",
      description:
        "Meet with our team to discuss your vision, needs, and preferences for your garden.",
    },
    {
      number: 2,
      title: "Site Assessment",
      description:
        "Evaluate your outdoor space to understand existing conditions and design opportunities.",
    },
    {
      number: 3,
      title: "Design Proposal",
      description:
        "Create a customized garden design plan that reflects your style and functional requirement.",
    },
    {
      number: 4,
      title: "Material Selection",
      description:
        "Choose high-quality materials and plant that align with the design and your preferences.",
    },
  ];

  return (
    <section className="bg-green-900 py-20 text-white relative overflow-hidden" style={{
      backgroundImage: `url("https://www.marthastewart.com/thmb/lqi0cyBSjOsDwaxUQcRbY8QfoIk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-664807408-332df7a2a2844fcc9fdbbb76c8b248a4.jpg")`,
      backgroundSize: 'cover' 
    }}>
      <div className="absolute bg-green-900/80 w-full h-full top-0 left-0"/>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Leaf Icon */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-green-400 font-medium text-xl">How It Works</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          How Our Garden <span className="block md:inline">Landscaping</span>{" "}
          <span className="block">Process Works</span>
        </h2>

        {/* Description */}
        <p className="text-gray-200 mb-16 max-w-3xl text-lg">
          Our garden landscaping process includes consultation, design,
          installation, and maintenance, ensuring your outdoor space is
          beautifully transformed.
        </p>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines for Desktop */}
          <div className="hidden lg:block absolute top-[24px] left-0 w-3/4 h-px border-t-2 border-dashed border-green-700 z-0"></div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div>
                <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 relative z-10 border-[10px] border-green-900">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Circular Blossoms Badge - Right Side */}
        {/* <div className="absolute right-4 md:right-16 top-24 md:top-16">
          <CircularBadge className="w-32 h-32 md:w-40 md:h-40" />
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorksSection;
