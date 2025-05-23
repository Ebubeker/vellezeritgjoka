import React from 'react';

const VideoText = ({ videoUrl, title, description }) => {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-30 flex flex-col md:flex-row gap-12 items-center">
      <div className="w-full md:w-1/2">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <video 
            className="w-full h-[450px] object-cover"
            controls={false}
            autoPlay={true}
            muted
            loop
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-green-800">{title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default VideoText;