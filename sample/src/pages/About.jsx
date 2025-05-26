import { useState, useEffect } from 'react';
import { FaSchool, FaUserTie, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import '../assets/css/About.css';
import aniprofile from '../assets/img/profile photo.jpg';
import pdf from '../assets/pdf/RESUME .pdf';

const About = () => {
  const [hoverSection, setHoverSection] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 200);
  }, []);

  return (
    <div className="about-container flex flex-col lg:flex-row items-center p-10 w-full h-full mx-auto rounded-xl shadow-2xl">

      {/* Profile & Skills Section */}
      <div className="lg:w-1/3 w-full flex flex-col items-center mb-10 relative">

        {/* Top Decoration */}
        <div className="absolute -top-8 text-gray-500 text-sm italic animate-pulse">Aspiring Web Developer</div>

        {/* Profile Image */}
        <div className="profile-wrapper relative mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-green-300 animate-ping"></div>
          <img
            src={aniprofile}
            alt="Profile"
            className="profile-image w-38 h-36 lg:w-30 lg:h-30 shadow-xl rounded-full object-cover z-10 relative"
          />
        </div>

        {/* Skills Icons */}
        <div className="flex justify-center items-center flex-wrap gap-4 mt-4">
          <SiMongodb className="text-3xl text-green-500 hover:text-green-600 transition-transform transform hover:scale-110" />
          <FaCss3Alt className="text-3xl text-blue-500 hover:text-blue-600 transition-transform transform hover:scale-110" />
          <FaHtml5 className="text-3xl text-red-500 hover:text-red-600 transition-transform transform hover:scale-110" />
          <FaReact className="text-3xl text-blue-400 hover:text-blue-500 transition-transform transform hover:scale-110" />
          <FaJsSquare className="text-3xl text-yellow-500 hover:text-yellow-600 transition-transform transform hover:scale-110" />
        </div>

        {/* Bottom Tag */}
        <div className="text-xs text-gray-400 mt-2 italic">Tech Explorer | Lifelong Learner</div>

        {/* Resume Download */}
        <a
          href={pdf}
          download="Ranjith_Resume.pdf"
          className="flex justify-center gap-2 items-center mt-4 shadow-xl text-lg bg-gray-100 font-semibold relative z-10 px-4 py-1 border-2 rounded-full group overflow-hidden before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-purple-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 group pl-4"
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

     {/* Main Info Section */}
{/* Main Info Section */}
<div className={`lg:w-2/3 w-full transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'} animate-slideInRight`}>

  {/* About Me Card */}
    <div 
      className={`about-section p-5 rounded-xl transition-colors duration-500 cursor-pointer ${hoverSection === 'about' ? 'about-hover' : ''}`}
      onMouseEnter={() => setHoverSection('about')}
      onMouseLeave={() => setHoverSection(null)}
    >
      <h1 className="text-4xl font-bold mb-4 text-gray-800">About Me</h1>
      <p className="text-lg leading-relaxed text-gray-700">
        Hello! I'm <span className="font-semibold text-green-600">Ranjith</span>, a passionate Computer Science Engineering student who thrives on solving real-world problems with creative digital solutions.
        My strengths lie in building responsive web applications, refining user interfaces, and developing logical back-end structures. I'm constantly evolving by working on projects, taking internships, and enhancing my design thinking using tools like Figma.
      </p>
    </div>


  <div className="mb-2 pt-4 grid grid-cols-1 md:grid-cols-2 gap-8">


          {/* Education */}
          <div
            className={`education-section p-5 rounded-xl transition-colors duration-500 cursor-pointer ${hoverSection === 'education' ? 'education-hover' : ''}`}
              onMouseEnter={() => setHoverSection('education')}
              onMouseLeave={() => setHoverSection(null)}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">📘 Education</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <FaSchool className="text-xl mt-1 mr-2 text-blue-500" />
                <div>
                  <span className="font-semibold">High School - M.N.C School</span><br />
                  <span>10th Grade: <span className="text-green-600 font-medium">91%</span></span>
                </div>
              </li>
              <li className="flex items-start">
                <FaSchool className="text-xl mt-1 mr-2 text-blue-500" />
                <div>
                  <span className="font-semibold">Higher Secondary - M.N.C School</span><br />
                  <span>12th Grade: <span className="text-green-600 font-medium">87%</span></span>
                </div>
              </li>
              <li className="flex items-start">
                <FaGraduationCap className="text-xl mt-1 mr-2 text-indigo-500" />
                <div>
                  <span className="font-semibold">B.E. Computer Science - SIET College</span><br />
                  <span>Current CGPA: <span className="text-green-600 font-medium">8.5</span></span><br />
                  <span className="text-sm text-gray-600">Actively involved in inter-college fests, software events, and technical clubs.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Internships */}
          <div
            className={`internship-section p-5 rounded-xl transition-colors duration-500 cursor-pointer ${hoverSection === 'internship' ? 'internship-hover' : ''}`}
            onMouseEnter={() => setHoverSection('internship')}
            onMouseLeave={() => setHoverSection(null)}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">💼 Internships</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <FaUserTie className="text-xl mr-2 text-purple-500" />
                <span><strong>UI/UX Intern</strong> at Shadow Fox (Remote)</span>
              </li>
              <li className="flex items-center">
                <FaUserTie className="text-xl mr-2 text-purple-500" />
                <span><strong>UI/UX Intern</strong> at CodSoft (Live Projects)</span>
              </li>
              <li className="flex items-center">
                <FaLaptopCode className="text-xl mr-2 text-teal-500" />
                <span><strong>Web Developer Trainee</strong> - Self Projects & College Hackathons</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
