import React, { useState } from 'react';

const CommunityPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnailStart, setThumbnailStart] = useState(0); // Controls the start of visible thumbnails
  const images = [
    '/path/to/image1.png',
    '/path/to/image2.png',
    '/path/to/image3.png',
    '/path/to/image4.png',
    '/path/to/image5.png',
    '/path/to/image6.png',
    '/path/to/image7.png',
    '/path/to/image8.png'
  ];
  
  const THUMBNAILS_VISIBLE = 4; // Show 4 thumbnails at a time

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    if (currentIndex >= thumbnailStart + THUMBNAILS_VISIBLE - 1) {
      setThumbnailStart((prevStart) => (prevStart + 1) % images.length);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    if (currentIndex <= thumbnailStart) {
      setThumbnailStart((prevStart) => (prevStart - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Life at Motrent Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center"># Life At Motrent</h2>
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="flex justify-center items-center mb-4">
            <button
              className="text-white bg-purple-500 hover:bg-purple-600 px-3 py-1 rounded-full"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <div className="w-96 h-56 mx-4 overflow-hidden rounded-lg">
              <img
                src={images[currentIndex]}
                alt={Slide ${currentIndex + 1}}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              className="text-white bg-purple-500 hover:bg-purple-600 px-3 py-1 rounded-full"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
          <div className="flex justify-center gap-2">
            {images.slice(thumbnailStart, thumbnailStart + THUMBNAILS_VISIBLE).map((image, index) => (
              <div key={index} className="w-20 h-16 overflow-hidden rounded-lg border-2 border-transparent">
                <img
                  src={image}
                  alt={Thumbnail ${index + thumbnailStart + 1}}
                  className={`w-full h-full object-cover cursor-pointer ${
                    thumbnailStart + index === currentIndex ? 'border-purple-500' : ''
                  }`}
                  onClick={() => setCurrentIndex(thumbnailStart + index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;