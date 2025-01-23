
import React, { useState } from 'react';
import img1 from '../assets/Million Minds Img/Student4.jpg';
import img2 from '../assets/Million Minds Img/Student2.jpg';
import img3 from '../assets/Million Minds Img/Student3.jpg';
import img4 from '../assets/Million Minds Img/Student4.jpg';
import img5 from '../assets/Million Minds Img/Student2.jpg';
import img6 from '../assets/Million Minds Img/Student3.jpg';
import img7 from '../assets/Million Minds Img/Student3.jpg';
import img8 from '../assets/Million Minds Img/Student4.jpg';

const CommunityPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnailStart, setThumbnailStart] = useState(0);
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
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
      <svg width="300" height="10" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="60" height="4" rx="4" fill="#9747FF" />
        <rect x="70" y="0" width="60" height="4" rx="4" fill="#9747FF" />
        <rect x="140" y="0" width="40" height="4" rx="4" fill="#9747FF" />

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
<div className="overflow-hidden shadow-lg rounded-md bg-[#1F1F1F] mx-4 sm:mx-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
    <div className="">
      <h3 className="text-lg font-semibold mb-2 text-purple-500 flex justify-between items-center">New Works <span className="text-purple-500 text-2xl font-bold">+</span></h3>
      <ul>
        <li className="bg-[#141313] p-3 mb-2 rounded text-blue-400 flex items-center">
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2'>
            <circle cx="6" cy="6" r="6" fill="#250DFF" />
          </svg>
          <div className="ml-6 text-base font-medium">
            Project Name
            <div className="text-sm text-gray-500 -mr-12">Project description in ...</div>
          </div>
        </li>
        <li className="bg-[#141313] p-3 mb-2 rounded text-blue-400 flex items-center">
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2'>
            <circle cx="6" cy="6" r="6" fill="#250DFF" />
          </svg>
          <div className="ml-6 text-base font-medium">
            Project Name
            <div className="text-sm text-gray-500 -mr-12">Project description in ...</div>
          </div>
        </li>
        <li className="bg-[#141313] p-3 mb-2 rounded text-blue-400 flex items-center">
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2'>
            <circle cx="6" cy="6" r="6" fill="#250DFF" />
          </svg>
          <div className="ml-6 text-base font-medium">
            Project Name
            <div className="text-sm text-gray-500 -mr-12">Project description in ...</div>
          </div>
        </li>
      </ul>
    </div>
    <div className="">
      <h3 className="text-lg font-semibold mb-2 text-purple-500 flex justify-between items-center">In Progress <span className="text-purple-500 text-2xl font-bold">+</span></h3>
      <ul>
        <li className="bg-[#141313] p-3 mb-2 rounded text-blue-400 flex items-center">
        <svg width="24" height="25" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0002 20.0833C8.74739 20.0833 7.56336 19.8316 6.44808 19.3282C5.3328 18.8247 4.359 18.1379 3.52666 17.2677C2.69433 16.3976 2.03739 15.3795 1.55583 14.2135C1.07427 13.0476 0.833496 11.8097 0.833496 10.5C0.833496 9.1743 1.07427 7.93261 1.55583 6.77495C2.03739 5.61728 2.69433 4.60305 3.52666 3.73224C4.359 2.86143 5.3328 2.17463 6.44808 1.67182C7.56336 1.16902 8.74739 0.917295 10.0002 0.916656V2.83332C7.96822 2.83332 6.23786 3.58018 4.80908 5.07391C3.3803 6.56763 2.66622 8.37632 2.66683 10.5C2.66744 12.6237 3.38183 14.4327 4.81 15.927C6.23816 17.4214 7.96822 18.1679 10.0002 18.1667C12.0321 18.1654 13.7625 17.4188 15.1912 15.927C16.62 14.4352 17.3341 12.6262 17.3335 10.5H19.1668C19.1668 11.8097 18.9261 13.0476 18.4445 14.2135C17.9629 15.3795 17.306 16.3979 16.4737 17.2687C15.6413 18.1395 14.6712 18.8263 13.5632 19.3291C12.4553 19.8319 11.2676 20.0833 10.0002 20.0833Z" fill="#9747FF"/>
</svg>

          <div className="ml-6 text-base font-medium">
            Project Name
            <div className="text-sm text-gray-500 -mr-12">Project description in ...</div>
          </div>
        </li>
        <ProgressBar />
        <li className="bg-[#141313] p-3 mb-2 rounded text-blue-400 flex items-center">
        <svg width="24" height="25" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0002 20.0833C8.74739 20.0833 7.56336 19.8316 6.44808 19.3282C5.3328 18.8247 4.359 18.1379 3.52666 17.2677C2.69433 16.3976 2.03739 15.3795 1.55583 14.2135C1.07427 13.0476 0.833496 11.8097 0.833496 10.5C0.833496 9.1743 1.07427 7.93261 1.55583 6.77495C2.03739 5.61728 2.69433 4.60305 3.52666 3.73224C4.359 2.86143 5.3328 2.17463 6.44808 1.67182C7.56336 1.16902 8.74739 0.917295 10.0002 0.916656V2.83332C7.96822 2.83332 6.23786 3.58018 4.80908 5.07391C3.3803 6.56763 2.66622 8.37632 2.66683 10.5C2.66744 12.6237 3.38183 14.4327 4.81 15.927C6.23816 17.4214 7.96822 18.1679 10.0002 18.1667C12.0321 18.1654 13.7625 17.4188 15.1912 15.927C16.62 14.4352 17.3341 12.6262 17.3335 10.5H19.1668C19.1668 11.8097 18.9261 13.0476 18.4445 14.2135C17.9629 15.3795 17.306 16.3979 16.4737 17.2687C15.6413 18.1395 14.6712 18.8263 13.5632 19.3291C12.4553 19.8319 11.2676 20.0833 10.0002 20.0833Z" fill="#9747FF"/>
</svg>

          <div className="ml-6 text-base font-medium">
            Project Name
            <div className="text-sm text-gray-500 -mr-12">Project description in ...</div>
          </div>
        </li>
        <ProgressBar />
        <li className="bg-[#141313] p-3  rounded text-blue-400 flex items-center">
        <svg width="24" height="25" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0002 20.0833C8.74739 20.0833 7.56336 19.8316 6.44808 19.3282C5.3328 18.8247 4.359 18.1379 3.52666 17.2677C2.69433 16.3976 2.03739 15.3795 1.55583 14.2135C1.07427 13.0476 0.833496 11.8097 0.833496 10.5C0.833496 9.1743 1.07427 7.93261 1.55583 6.77495C2.03739 5.61728 2.69433 4.60305 3.52666 3.73224C4.359 2.86143 5.3328 2.17463 6.44808 1.67182C7.56336 1.16902 8.74739 0.917295 10.0002 0.916656V2.83332C7.96822 2.83332 6.23786 3.58018 4.80908 5.07391C3.3803 6.56763 2.66622 8.37632 2.66683 10.5C2.66744 12.6237 3.38183 14.4327 4.81 15.927C6.23816 17.4214 7.96822 18.1679 10.0002 18.1667C12.0321 18.1654 13.7625 17.4188 15.1912 15.927C16.62 14.4352 17.3341 12.6262 17.3335 10.5H19.1668C19.1668 11.8097 18.9261 13.0476 18.4445 14.2135C17.9629 15.3795 17.306 16.3979 16.4737 17.2687C15.6413 18.1395 14.6712 18.8263 13.5632 19.3291C12.4553 19.8319 11.2676 20.0833 10.0002 20.0833Z" fill="#9747FF"/>
</svg>

          <div className="ml-6 text-base font-medium">
            Project Name
            <div className="text-sm text-gray-500 -mr-12">Project description in ...</div>
          </div>
        </li>
        <ProgressBar />
      </ul>
    </div>
    <div className="">
      <h3 className="text-lg font-semibold mb-2 text-purple-500 flex justify-between items-center">Our Releases <span className="text-purple-500 text-2xl font-bold">+</span></h3>
      <ul>
        <li className="bg-[#141313] p-3 mb-2 rounded text-blue-400 flex justify-between items-center">
          <div className='ml-4 text-base font-medium'>
            Project Name
            <div className="text-sm text-gray-500 -mr-12">Project description in ...</div>
          </div>
          <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.90775 13.6687L9.19567 8.81248C9.38494 8.63901 9.5351 8.43297 9.63755 8.20615C9.74001 7.97932 9.79274 7.73617 9.79274 7.4906C9.79274 7.24504 9.74001 7.00188 9.63755 6.77506C9.5351 6.54823 9.38494 6.34219 9.19567 6.16873L3.90775 1.31248C2.6215 0.149976 0.416504 0.974977 0.416504 2.64373V12.3375C0.416504 14.025 2.6215 14.85 3.90775 13.6687Z" fill="#9747FF"/>
          </svg>
        </li>
        <li className="bg-[#141313] p-4 mb-2 rounded text-blue-400 flex justify-between items-center ">
          <div className='ml-4 text-base font-medium'>
            Project Name
            <div className="text-sm text-gray-500 -mr-12">Project description in ...</div>
          </div>
          <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.90775 13.6687L9.19567 8.81248C9.38494 8.63901 9.5351 8.43297 9.63755 8.20615C9.74001 7.97932 9.79274 7.73617 9.79274 7.4906C9.79274 7.24504 9.74001 7.00188 9.63755 6.77506C9.5351 6.54823 9.38494 6.34219 9.19567 6.16873L3.90775 1.31248C2.6215 0.149976 0.416504 0.974977 0.416504 2.64373V12.3375C0.416504 14.025 2.6215 14.85 3.90775 13.6687Z" fill="#9747FF"/>
          </svg>
        </li>
        <li className="bg-[#141313] p-3 mb-2 rounded text-blue-400 flex justify-between items-center">
          <div className='ml-4 text-base font-medium'>
            Project Name
            <div className="text-sm text-gray-500 -mr-12">Project description in ...</div>
          </div>
          <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.90775 13.6687L9.19567 8.81248C9.38494 8.63901 9.5351 8.43297 9.63755 8.20615C9.74001 7.97932 9.79274 7.73617 9.79274 7.4906C9.79274 7.24504 9.74001 7.00188 9.63755 6.77506C9.5351 6.54823 9.38494 6.34219 9.19567 6.16873L3.90775 1.31248C2.6215 0.149976 0.416504 0.974977 0.416504 2.64373V12.3375C0.416504 14.025 2.6215 14.85 3.90775 13.6687Z" fill="#9747FF"/>
          </svg>
        </li>
      </ul>
    </div>
  </div>
</div>


<div className="mt-28">
  <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Members</h2>
  <div className="text-center mt-1">
    <p className="text-blue-700 text-3xl font-semibold mb-10">Motrent</p>
  </div>
  <div className="flex justify-center mb-8">
    <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center">
      <img src="/api/placeholder/80/80" alt="Logo" className="w-16 h-16 rounded-full" />
    </div>
  </div>
  <div className="relative flex flex-col items-center">
    <div className="absolute h-full w-0.5 bg-purple-800"></div>
    <div className="space-y-10 w-full max-w-4xl">
      {[
        { name: "Bharath Kumar", role: "CEO & Founder", side: "left" },
        { name: "Deva Harshar", role: "COO", side: "right" },
        { name: "Dharani Daran", role: "PR-Team Lead", side: "left" },
        { name: "Bharath Sivanesh", role: "CTO", side: "right" },
        { name: "Soorya Akileshwaran", role: "Backend Lead", side: "left" },
        { name: "Sahana", role: "PR-Lead", side: "right" },
      ].map((member, index) => (
        <div key={index} className={`flex ${member.side === "left" ? "justify-between" : "justify-between flex-row-reverse"} items-center`}>
          <div className="w-1/2 px-10">
            <div className="bg-[#202020] rounded-lg p-4 shadow-lg flex items-start">
              <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden mr-6">
                <img src={img1} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <div className="flex items-center mt-1">
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="6.5" cy="6" rx="6.5" ry="6" fill="#0D99FF" />
                  </svg>
                  <p className="text-sm text-gray-300 ml-2">{member.role}</p>
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


        <div className="mt-24">
          <h2 className="text-4xl font-bold mb-8 text-center"># Life At Motrent</h2>
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="flex justify-center items-center mb-4">
              <button
                className="text-white bg-purple-500 hover:bg-purple-600 px-3 py-1 rounded-full"
                onClick={handlePrev}
              >
                &lt;
              </button>
              <div className="w-full max-w-2xl h-[400px] mx-4 overflow-hidden rounded-lg">
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
            <div className="flex justify-center gap-4 flex-wrap">
              {images.slice(thumbnailStart, Math.min(thumbnailStart + THUMBNAILS_VISIBLE, images.length)).map((image, index) => (
                <div
                  key={index}
                  className={`w-24 h-20 overflow-hidden rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    thumbnailStart + index === currentIndex ? 'border-purple-500 scale-105' : 'border-transparent'
                  }`}
                  onClick={() => setCurrentIndex(thumbnailStart + index)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + thumbnailStart + 1}`}
                    className="w-full h-full object-cover"
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
