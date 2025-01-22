import React, { useState } from 'react';

const CommunityPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '../assets/Million Minds Img/Student1.jpg',
    '../assets/Million Minds Img/Student3.jpg',
    '/path/to/image3.png',
    '/path/to/image4.png',
    '/path/to/image5.png',
    '/path/to/image6.png',
    '/path/to/image7.png',
    '/path/to/image8.png'
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Community</h1>
        <p className="mb-8 text-gray-400 text-lg">
          <span className="text-blue-500">Modern-Connect</span> is a platform dedicated to bridge the gap by <br />
          connecting skilled professionals with opportunities that create <br />
          meaningful impact.
        </p>
        <div className="mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
            Join Us
          </button>
        </div>

        <div className="flex justify-center gap-8 mb-16">
          <div className="relative text-center w-32 h-32">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="25.5" cy="24.5" rx="25.5" ry="24.5" fill="#4B0082" />
            </svg>
            <div className="relative z-10">
              <div className="text-3xl font-bold">12K+</div>
              <div className="text-sm text-gray-300">Clients</div>
            </div>
          </div>
          <div className="relative text-center w-32 h-32">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="25.5" cy="24.5" rx="25.5" ry="24.5" fill="#4B0082" />
            </svg>
            <div className="relative z-10">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-gray-300">Freelancers</div>
            </div>
          </div>
          <div className="relative text-center w-32 h-32">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="25.5" cy="24.5" rx="25.5" ry="24.5" fill="#4B0082" />
            </svg>
            <div className="relative z-10">
              <div className="text-3xl font-bold">60+</div>
              <div className="text-sm text-gray-300">Projects</div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Our Current Works</h2>
        <div className="overflow-hidden shadow-lg rounded-lg bg-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
            <div className="">
              <h3 className="text-lg font-semibold mb-2 text-purple-500 flex justify-between items-center">New Works <span className="text-purple-500 text-2xl font-bold">+</span></h3>
              <ul>
                <li className="bg-gray-700 p-3 mb-2 rounded text-blue-400">Project Name <div className="text-sm text-gray-500">Project description in ...</div></li>
                <li className="bg-gray-700 p-3 mb-2 rounded text-blue-400">Project Name <div className="text-sm text-gray-500">Project description in ...</div></li>
                <li className="bg-gray-700 p-3 mb-2 rounded text-blue-400">Project Name <div className="text-sm text-gray-500">Project description in ...</div></li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-lg font-semibold mb-2 text-purple-500 flex justify-between items-center">In Progress <span className="text-purple-500 text-2xl font-bold">+</span></h3>
              <ul>
                <li className="bg-gray-700 p-3 mb-2 rounded text-blue-400">Project Name <div className="text-sm text-gray-500">Project description in ...</div></li>
                <li className="bg-gray-700 p-3 mb-2 rounded text-blue-400">Project Name <div className="text-sm text-gray-500">Project description in ...</div></li>
                <li className="bg-gray-700 p-3 mb-2 rounded text-blue-400">Project Name <div className="text-sm text-gray-500">Project description in ...</div></li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-lg font-semibold mb-2 text-purple-500 flex justify-between items-center">Our Releases <span className="text-purple-500 text-2xl font-bold">+</span></h3>
              <ul>
                <li className="bg-gray-700 p-3 mb-2 rounded text-blue-400">Project Name <div className="text-sm text-gray-500">Project description in ...</div></li>
                <li className="bg-gray-700 p-3 mb-2 rounded text-blue-400">Project Name <div className="text-sm text-gray-500">Project description in ...</div></li>
                <li className="bg-gray-700 p-3 mb-2 rounded text-blue-400">Project Name <div className="text-sm text-gray-500">Project description in ...</div></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Meet Our Members Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Members</h2>
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center">
              <img src="/path/to/logo.png" alt="Logo" className="w-16 h-16 rounded-full" />
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="absolute h-full w-0.5 bg-purple-500"></div>
            <div className="space-y-12 w-full max-w-4xl">
              {[
                { name: "Bharath Kumar", role: "CEO & Founder", side: "left" },
                { name: "Deva Harshar", role: "COO", side: "right" },
                { name: "Dharani Daran", role: "PR-Team Lead", side: "left" },
                { name: "Bharath Sivanesh", role: "CTO", side: "right" },
                { name: "Soorya Akileshwaran", role: "Backend Lead", side: "left" },
                { name: "Sahana", role: "PR-Team Lead", side: "right" }
              ].map((member, index) => (
                <div key={index} className={`flex ${member.side === "left" ? "justify-between" : "justify-between flex-row-reverse"} items-center`}>
                  <div className="w-1/2 px-4">
                    <div className="bg-gray-800 rounded-lg p-4 shadow-lg flex items-center">
                      <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden mr-4">
                        <img src="/path/to/member-image.png" alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex items-center">
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                          <ellipse cx="6.5" cy="6" rx="6.5" ry="6" fill="#0D99FF" />
                        </svg>
                        <div>
                          <h3 className="text-xl font-semibold">{member.name}</h3>
                          <p className="text-sm text-gray-400">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-blue-700 text-lg font-semibold">Motrent</p>
        </div>

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
                  alt={`Slide ${currentIndex + 1}`}
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
              {images.map((image, index) => (
                <div key={index} className="w-20 h-16 overflow-hidden rounded-lg border-2 border-transparent">
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-full h-full object-cover cursor-pointer ${index === currentIndex ? 'border-purple-500' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
