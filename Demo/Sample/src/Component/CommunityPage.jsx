
import React, { useState } from 'react';

const CommunityPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnailStart, setThumbnailStart] = useState(0);
  const images = [
    '../assets/Million Minds Img/Student1.jpg',
    '../assets/Million Minds Img/Student2.jpg',
    '../assets/Million Minds Img/Student3.jpg',
    '../assets/Million Minds Img/Student4.jpg',
    '../assets/Million Minds Img/Student3.jpg',
    '../assets/Million Minds Img/Student1.jpg',
    '../assets/Million Minds Img/Student4.jpg',
    '../assets/Million Minds Img/Student2.jpg',
  ];

  const THUMBNAILS_VISIBLE = 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    if (currentIndex >= thumbnailStart + THUMBNAILS_VISIBLE - 1) {
      setThumbnailStart((prevStart) => (prevStart + 1) % images.length);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    if (currentIndex <= thumbnailStart) {
      setThumbnailStart((prevStart) => {
        if (prevStart > 0) {
          return (prevStart - 1) % images.length;
        } else {
          return prevStart;
        }
      });
    }
  };

  const ProgressBar = () => (
    <svg width="53" height="3" viewBox="0 0 53 3" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="53" height="3" rx="1.5" fill="#9747FF"/>
      <rect width="53" height="3" rx="1.5" fill="#9747FF"/>
      <rect width="53" height="3" rx="1.5" fill="#9747FF"/>
      <rect width="53" height="3" rx="1.5" fill="#9747FF"/>
      <rect width="53" height="3" rx="1.5" fill="#9747FF"/>
    </svg>
  );

  return (
    <div className="bg-[#030303] text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Community</h1>
        <p className="mb-8 text-gray-400 text-lg">
          <span className="text-blue-500">Modern-Connect</span> is a platform dedicated to bridge the gap by <br />
          connecting skilled professionals with opportunities that create <br />
          meaningful impact.
        </p>
        <div className="mb-12">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-10 rounded text-xl mb-8">
            Join Us
          </button>
        </div>

        <div className="flex justify-center gap-32 mb-16">
          <div className="relative text-center w-32 h-32">
            <svg className="absolute inset-0 w-full h-full" viewBox="2 0 60 90 " fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="15.5" cy="15.5" rx="15.5" ry="15.5" fill="#250DFF" />
            </svg>
            <div className="relative z-10">
              <div className="text-3xl font-bold">12K+</div>
              <div className="text-3xl text-gray-200 font-semibold mt-10 pr-10">Clients</div>
            </div>
          </div>
          <div className="relative text-center w-32 h-32">
            <svg className="absolute inset-0 w-full h-full" viewBox="2 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="14" cy="14" rx="14" ry="14" fill="#C918C6" />
            </svg>
            <div className="relative z-10">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-3xl text-gray-200 font-semibold mt-10 pr-10">Freelancers</div>
            </div>
          </div>
          <div className="relative text-center w-32 h-32">
            <svg className="absolute inset-0 w-full h-full" viewBox="2 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="14" cy="14" rx="14" ry="14" fill="#0D99FF" />
            </svg>
            <div className="relative z-10">
              <div className="text-3xl font-bold">60+</div>
              <div className="text-3xl text-gray-200 font-semibold mt-10">Projects</div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 items-start flex p-2">Our Current Works</h2>
        <div className="overflow-hidden shadow-lg rounded-lg bg-[#1F1F1F]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-10">
            <div className="">
              <h3 className="text-lg font-semibold mb-2 text-purple-500 flex justify-between items-center">New Works <span className="text-purple-500 text-2xl font-bold">+</span></h3>
              <ul>
                <li className="bg-[#141313] p-3 mb-2 rounded text-blue-400 flex items-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#250DFF" />
                  </svg>
                  <div className="ml-2">
                    Project Name
                    <div className="text-sm text-gray-500">Project description in ...</div>
                  </div>
                </li>
                <li className="bg-[#141313] p-3 mb-2 rounded text-blue-400 flex items-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#250DFF" />
                  </svg>
                  <div className="ml-2">
                    Project Name
                    <div className="text-sm text-gray-500">Project description in ...</div>
                  </div>
                </li>
                <li className="bg-[#141313] p-3 mb-2 rounded text-blue-400 flex items-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#250DFF" />
                  </svg>
                  <div className="ml-2">
                    Project Name
                    <div className="text-sm text-gray-500">Project description in ...</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-lg font-semibold mb-2 text-purple-500 flex justify-between items-center">In Progress <span className="text-purple-500 text-2xl font-bold">+</span></h3>
              <ul>
                <li className="bg-[#141313] p-3 mb-2 rounded text-blue-400 flex items-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#250DFF" />
                  </svg>
                  <div className="ml-2">
                    Project Name
                    <div className="text-sm text-gray-500">Project description in ...</div>
                  </div>
                </li>
                <ProgressBar />
                <li className="bg-[#141313] p-3 mb-2 rounded text-blue-400 flex items-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#250DFF" />
                  </svg>
                  <div className="ml-2">
                    Project Name
                    <div className="text-sm text-gray-500">Project description in ...</div>
                  </div>
                </li>
                <ProgressBar />
                <li className="bg-[#141313] p-3 mb-2 rounded text-blue-400 flex items-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#250DFF" />
                  </svg>
                  <div className="ml-2">
                    Project Name
                    <div className="text-sm text-gray-500">Project description in ...</div>
                  </div>
                </li>
                <ProgressBar />
              </ul>
            </div>
            <div className="">
              <h3 className="text-lg font-semibold mb-2 text-purple-500 flex justify-between items-center">Our Releases <span className="text-purple-500 text-2xl font-bold">+</span></h3>
              <ul>
                <li className="bg-[#141313] p-3 mb-2 rounded text-blue-400 flex justify-between items-center">
                  <div>
                    Project Name
                    <div className="text-sm text-gray-500">Project description in ...</div>
                  </div>
                  <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.90775 13.6687L9.19567 8.81248C9.38494 8.63901 9.5351 8.43297 9.63755 8.20615C9.74001 7.97932 9.79274 7.73617 9.79274 7.4906C9.79274 7.24504 9.74001 7.00188 9.63755 6.77506C9.5351 6.54823 9.38494 6.34219 9.19567 6.16873L3.90775 1.31248C2.6215 0.149976 0.416504 0.974977 0.416504 2.64373V12.3375C0.416504 14.025 2.6215 14.85 3.90775 13.6687Z" fill="#9747FF"/>
                  </svg>
                </li>
                <li className="bg-[#141313] p-3 mb-2 rounded text-blue-400 flex justify-between items-center">
                  <div>
                    Project Name
                    <div className="text-sm text-gray-500">Project description in ...</div>
                  </div>
                  <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.90775 13.6687L9.19567 8.81248C9.38494 8.63901 9.5351 8.43297 9.63755 8.20615C9.74001 7.97932 9.79274 7.73617 9.79274 7.4906C9.79274 7.24504 9.74001 7.00188 9.63755 6.77506C9.5351 6.54823 9.38494 6.34219 9.19567 6.16873L3.90775 1.31248C2.6215 0.149976 0.416504 0.974977 0.416504 2.64373V12.3375C0.416504 14.025 2.6215 14.85 3.90775 13.6687Z" fill="#9747FF"/>
                  </svg>
                </li>
                <li className="bg-[#141313] p-3 mb-2 rounded text-blue-400 flex justify-between items-center">
                  <div>
                    Project Name
                    <div className="text-sm text-gray-500">Project description in ...</div>
                  </div>
                  <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.90775 13.6687L9.19567 8.81248C9.38494 8.63901 9.5351 8.43297 9.63755 8.20615C9.74001 7.97932 9.79274 7.73617 9.79274 7.4906C9.79274 7.24504 9.74001 7.00188 9.63755 6.77506C9.5351 6.54823 9.38494 6.34219 9.19567 6.16873L3.90775 1.31248C2.6215 0.149976 0.416504 0.974977 0.416504 2.64373V12.3375C0.416504 14.025 2.6215 14.85 3.90775 13.6687Z" fill="#9747FF"/>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Meet Our Members</h2>
          <div className="text-center mt-8">
            <p className="text-blue-700 text-4xl font-bold">Motrent</p>
          </div>
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center">
              <img src="/api/placeholder/80/80" alt="Logo" className="w-16 h-16 rounded-full" />
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
                    <div className="bg-[#292929] rounded-lg p-4 shadow-lg flex items-center">
                      <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden mr-4">
                        <img src="/api/placeholder/64/64" alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex items-center">
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto">
                          <ellipse cx="6.5" cy="6" rx="6.5" ry="6" fill="#0D99FF" />
                        </svg>
                        <div>
                          <h3 className="text-xl font-semibold">{member.name}</h3>
                          <p className="text-sm text-gray-300 pb-3 pt-1">{member.role}</p>
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
              {images.slice(thumbnailStart, Math.min(thumbnailStart + THUMBNAILS_VISIBLE, images.length)).map((image, index) => (
                <div key={index} className="w-20 h-16 overflow-hidden rounded-lg border-2 border-transparent">
                  <img
                    src={image}
                    alt={`Thumbnail ${index + thumbnailStart + 1}`}
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
    </div>
  );
};

export default CommunityPage;
