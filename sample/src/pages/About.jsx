import { useState, useEffect } from 'react';
import { FaSchool, FaUserTie, FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import '../assets/css/About.css'; 
import aniprofile from '../assets/img/profile photo.jpg';
import { SiMongodb } from 'react-icons/si';
import pdf from '../assets/pdf/RESUME .pdf';

const About = () => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 200);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center p-10 bg-gray-300 shadow-cyan-600 rounded-lg w-full h-full mx-auto">
      <div className="lg:w-1/3 w-full flex flex-col items-center lg:items-start mb-8 lg:mb-10">
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
            } w-38 h-36 lg:w-30 lg:h-30 shadow-xl rounded-full object-cover`}
          />
          <FaJsSquare className="flex absolute -right-10 top-24 mt-3 text-4xl text-yellow-500 hover:text-yellow-600 transition-transform transform hover:scale-110" />
          <FaReact className="flex absolute right-2 top-36 mt-3 text-4xl text-blue-400 hover:text-blue-500 transition-transform transform hover:scale-110" />
          <FaHtml5 className="flex absolute right-16 top-40 mt-3 text-4xl text-red-500 hover:text-red-600 transition-transform transform hover:scale-110" />
          <SiMongodb className="absolute right-44 top-36 mt-3 text-4xl text-green-500 hover:text-green-600 transition-transform transform hover:scale-110" />
          <FaCss3Alt className="flex absolute right-32 top-40 mt-3 text-4xl text-blue-500 hover:text-blue-600 transition-transform transform hover:scale-110" />
        </div>

        <div className="flex mb-14">
        </div>

        <a
          href={pdf}
          download="Ranjith_Resume.pdf"
          className="flex justify-center gap-2  items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border-2 rounded-full group pl-4"
        >
          Download Resume
          <svg
            className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
            viewBox="0 0 16 19"
          >
            <path
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              className="fill-gray-800 group-hover:fill-gray-800"
            />
          </svg>
        </a>
      </div>

      <div className={`lg:w-2/3 w-full transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'} animate-slideInRight`}>
        <h1 className="text-4xl font-bold mb-4 ml-6 text-gray-800">About Me</h1>
        <p className="text-lg mb-10 ml-6 text-gray-700 leading-relaxed">
          I am a dedicated and hard worker passionate about technology and design. I continuously strive to enhance my skills and contribute effectively to every project I undertake.
        </p>

        <div className="flex flex-wrap justify-between mb-8 ml-4">
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
          <div className="pr-8 pt-2">
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
