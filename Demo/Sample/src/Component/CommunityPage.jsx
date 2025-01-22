import React from 'react';

const CommunityPage = () => {
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
          <h2 className="text-3xl font-bold mb-8">Meet Our Members</h2>
          <div className="flex justify-center mb-8">
            <img src="/path/to/logo.png" alt="Logo" className="w-16 h-16 rounded-full" />
          </div>
          <div className="flex justify-center items-start relative">
            <div className="border-l-4 border-purple-500 h-full absolute left-1/2 transform -translate-x-1/2"></div>
            <div className="flex flex-col items-center w-1/2">
              <div className="mb-6">
                <div className="bg-gray-800 rounded-lg p-4 shadow-lg flex items-center">
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-semibold">Bharath Kumar</h3>
                    <p className="text-sm text-gray-400">CEO & Founder</p>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="bg-gray-800 rounded-lg p-4 shadow-lg flex items-center">
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-semibold">Deva Harshar</h3>
                    <p className="text-sm text-gray-400">COO</p>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="bg-gray-800 rounded-lg p-4 shadow-lg flex items-center">
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-semibold">Dharani Daran</h3>
                    <p className="text-sm text-gray-400">PR-Team Lead</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-1/2">
              <div className="mb-6">
                <div className="bg-gray-800 rounded-lg p-4 shadow-lg flex items-center">
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-semibold">Bharath Sivanesh</h3>
                    <p className="text-sm text-gray-400">CTO</p>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="bg-gray-800 rounded-lg p-4 shadow-lg flex items-center">
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-semibold">Soorya Akileshwaran</h3>
                    <p className="text-sm text-gray-400">Backend Lead</p>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="bg-gray-800 rounded-lg p-4 shadow-lg flex items-center">
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-semibold">Sahana</h3>
                    <p className="text-sm text-gray-400">PR-Team Lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
