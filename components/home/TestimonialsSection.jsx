"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const TestimonialsSection = ({
  backgroundImagePath = "/images/testimonials/garden-background.jpg"
}) => {
  // Sample testimonials data
  const testimonials = [
    {
      id: "1",
      name: "Annette Black",
      title: "Sr. Gardener",
      quote: "Our backyard has been completely transformed! The team was professional, attentive, and delivered beyond our expectations. the quality of work is outstanding."
    },
    {
      id: "2",
      name: "Robert Johnson",
      title: "Homeowner",
      quote: "I couldn't be happier with the results. The attention to detail and creative solutions transformed our outdoor space into a beautiful retreat we enjoy year-round."
    },
    {
      id: "3",
      name: "Emily Chen",
      title: "Property Manager",
      quote: "The landscaping team was exceptional from start to finish. They listened to our needs, provided valuable suggestions, and completed the project on time and within budget."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative py-24 min-h-[600px] overflow-hidden">
      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 bg-green-900 z-0"
        style={{
          backgroundImage: `url('https://images.immediate.co.uk/production/volatile/sites/10/2019/04/2048x1365-10-trees-to-grow-in-pots-LI3554348-fcbac6a.jpg?quality=90&fit=700,466')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'overlay',
        }}
      >
        {!backgroundImagePath && (
          <div className="w-full h-full flex items-center justify-center text-green-800/20 text-6xl font-bold" style={{
            backgroundImage: `url("https://images.immediate.co.uk/production/volatile/sites/10/2019/04/2048x1365-10-trees-to-grow-in-pots-LI3554348-fcbac6a.jpg?quality=90&fit=700,466")`,
            backgroundSize: 'cover'
          }}>
            1920 × 1080
          </div>
        )}
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row">
          {/* Left Empty Space (on mobile this will be below the testimonial) */}
          <div className="w-full md:w-1/2"></div>
          
          {/* Testimonial Content Area */}
          <div className="w-full md:w-1/2">
            <div className="bg-green-50 p-10 md:p-12 lg:p-16 rounded-lg">
              {/* Section Label */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-green-600 font-medium text-xl">Testimonials</span>
              </div>
              
              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-8">
                Our happy <span className="text-gray-700">client says</span>
              </h2>
              
              {/* Client Info */}
              <div className="flex items-center gap-4 mb-6">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-lg bg-green-900 overflow-hidden">
                  {testimonials[activeIndex].avatarPath ? (
                    <Image 
                      src={testimonials[activeIndex].avatarPath} 
                      alt={testimonials[activeIndex].name}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  ) : null}
                </div>
                
                {/* Name and Title */}
                <div>
                  <h3 className="font-bold text-gray-900">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[activeIndex].title}
                  </p>
                </div>
              </div>
              
              {/* Quote */}
              <div className="relative mb-8">
                
                
                <p className="text-gray-700 relative z-10 pr-6 italic">
                  "{testimonials[activeIndex].quote}"
                </p>
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex gap-3">
                <button 
                  onClick={goToPrevious}
                  className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-lg text-white flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={goToNext}
                  className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-lg text-white flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;