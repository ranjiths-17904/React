import { useState, useEffect } from 'react';
import { FaSchool, FaUserTie, FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa'; // Import icons
import '../assets/css/About.css'; // Import the CSS

const About = () => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Simulate content fade-in after the component mounts
    setTimeout(() => {
      setVisible(true);
    }, 200); // Adjust the delay for the fade-in effect as needed
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-start p-8 bg-gradient-to-b from-purple-900 to-blue-600 rounded-lg shadow-xl w-full max-w-screen-lg mx-auto">
      
      {/* Left Side: Image + Icons */}
      <div className="lg:w-1/3 w-full flex flex-col items-center lg:items-start mb-6 lg:mb-0">
        <div
          className="relative mb-6"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src="src/assets/img/Profile.gif" // Replace with the actual image path
            alt="Profile"
            className={`transition-transform duration-500 ease-in-out transform ${
              hovered ? 'scale-110 translate-x-3' : 'scale-100'
            } w-full max-w-xs lg:max-w-full h-auto shadow-lg rounded-lg`}
          />
        </div>

        {/* Icons for Technologies */}
        <div className="flex justify-center space-x-4 mb-4">
          <FaReact className="text-4xl text-blue-400 animate-spin-slow" />
          <FaHtml5 className="text-4xl text-red-500 hover:text-red-600 transition-transform transform hover:scale-110" />
          <FaCss3Alt className="text-4xl text-blue-500 hover:text-blue-600 transition-transform transform hover:scale-110" />
          <FaJsSquare className="text-4xl text-yellow-500 hover:text-yellow-600 transition-transform transform hover:scale-110" />
        </div>
      </div>

      {/* Right Side: About Me + Schooling + Internships */}
      <div className={`lg:w-2/3 w-full transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl font-bold mb-4 text-gray-100 animate-slideInLeft text-left">About Me</h1>
        <p className="text-lg mb-8 text-left text-gray-200 leading-relaxed">
          I am a dedicated and hard worker passionate about technology and design. I continuously strive to enhance my skills and contribute effectively to every project I undertake.
        </p>

        {/* Schooling Section */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-100 text-left">Schooling:</h2>
        <ul className="list-disc list-inside mb-8 text-left">
          <li className="flex items-center text-gray-200 mb-2 transition-transform duration-500 hover:translate-x-2 hover:text-blue-500">
            <FaSchool className="mr-2 text-lg" /> High School: ABC High School
          </li>
          <li className="flex items-center text-gray-200 mb-2 transition-transform duration-500 hover:translate-x-2 hover:text-blue-500">
            <FaSchool className="mr-2 text-lg" /> Bachelors Degree: XYZ University
          </li>
          <li className="flex items-center text-gray-200 mb-2 transition-transform duration-500 hover:translate-x-2 hover:text-blue-500">
            <FaSchool className="mr-2 text-lg" /> Current: CSE Student
          </li>
        </ul>

        {/* Internship Section */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-100 text-left">Internships:</h2>
        <ul className="list-disc list-inside text-left">
          <li className="flex items-center text-gray-200 mb-2 transition-transform duration-500 hover:translate-x-2 hover:text-green-500">
            <FaUserTie className="mr-2 text-lg" /> UI/UX Intern: Shadow Fox
          </li>
          <li className="flex items-center text-gray-200 mb-2 transition-transform duration-500 hover:translate-x-2 hover:text-green-500">
            <FaUserTie className="mr-2 text-lg" /> Development Intern: Tech Solutions
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
