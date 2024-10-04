  import { useState, useEffect } from 'react';
  import { FaSchool, FaUserTie, FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
  import '../assets/css/About.css'; 
  import aniprofile from '../assets/img/profile photo.jpg';

  const About = () => {
    const [hovered, setHovered] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setVisible(true);
      }, 200);
    }, []);

    return (
      <div className="flex flex-col lg:flex-row items-center p-8 bg-white shadow-xl rounded-lg w-full max-w-screen-lg mx-auto">
        <div className="lg:w-1/3 w-full flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <div
            className="relative mb-6"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              src={aniprofile}
              alt="Profile"
              className={`transition-transform duration-500 ease-in-out transform ${
                hovered ? 'scale-105' : 'scale-100'
              } w-36 h-36 lg:w-30 lg:h-30 shadow-xl rounded-full object-cover`}
            />
          </div>

          <div className="flex justify-center space-x-4 mb-4">
            <FaReact className="text-4xl text-blue-400 hover:text-blue-500 transition-transform transform hover:scale-110" />
            <FaHtml5 className="text-4xl text-red-500 hover:text-red-600 transition-transform transform hover:scale-110" />
            <FaCss3Alt className="text-4xl text-blue-500 hover:text-blue-600 transition-transform transform hover:scale-110" />
            <FaJsSquare className="text-4xl text-yellow-500 hover:text-yellow-600 transition-transform transform hover:scale-110" />
          </div>

          <button
            type="button"
            className="relative flex justify-center gap-2 items-center shadow-xl text-lg bg-white backdrop-blur-md font-semibold border border-gray-300 hover:border-emerald-500 transition-all duration-700 rounded-full px-5 py-2 overflow-hidden group hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
          >
            Download Resume
            <svg
              className="w-6 h-6 group-hover:rotate-90 transform transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-current"
              ></path>
            </svg>
            <span className="absolute inset-0 w-full h-full bg-emerald-500 transition-all duration-700 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-[-1] rounded-full"></span>
          </button>
        </div>

        {/* Right Section - About Me, Schooling & Internships */}
        <div className={`lg:w-2/3 w-full transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'} animate-slideInRight`}>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">About Me</h1>
          <p className="text-lg mb-8 text-gray-700 leading-relaxed">
            I am a dedicated and hard worker passionate about technology and design. I continuously strive to enhance my skills and contribute effectively to every project I undertake.
          </p>

          {/* Schooling and Internships in the same row */}
          <div className="flex flex-wrap justify-between mb-8">
            {/* Schooling Section */}
            <div className="w-full lg:w-1/2 pr-4">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Schooling:</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li className="flex items-center mb-2 transition-transform duration-500 hover:translate-x-2 hover:text-blue-500">
                  <FaSchool className="mr-2 text-lg" /> High School: M.N.C School
                </li>
                <li className="flex items-center mb-2 transition-transform duration-500 hover:translate-x-2 hover:text-blue-500">
                  <FaSchool className="mr-2 text-lg" /> Bachelors Degree: SIET
                </li>
                <li className="flex items-center mb-2 transition-transform duration-500 hover:translate-x-2 hover:text-blue-500">
                  <FaSchool className="mr-2 text-lg" /> Current: CSE Student
                </li>
              </ul>
            </div>

            {/* Internships Section */}
            <div className="pr-16 pt-0">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Internships:</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li className="flex items-center mb-2 transition-transform duration-500 hover:translate-x-2 hover:text-green-500">
                  <FaUserTie className="mr-2 text-lg" /> UI/UX Intern: Shadow Fox
                </li>
                <li className="flex items-center mb-2 transition-transform duration-500 hover:translate-x-2 hover:text-green-500">
                  <FaUserTie className="mr-2 text-lg" /> UI/UX Intern: CodSoft
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default About;
