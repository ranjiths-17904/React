import { useState, useEffect } from 'react';
import { FaSchool, FaUserTie } from 'react-icons/fa'; // Import icons
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
    <div className="flex flex-col md:flex-row items-start p-8 bg-gray-200 text-black animate-fadeIn">
      
      {/* Image on the Left with hover animation */}
      <div
        className="relative mb-6 md:mb-0 md:w-1/3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src="src/assets/img/Profile.gif"  // Replace with the actual path
          alt="Animated Image"
          className={`transition-transform duration-500 ease-in-out transform ${
            hovered ? 'scale-105 translate-x-2' : 'scale-100'
          } w-full h-auto shadow-lg rounded-lg`}
        />
      </div>

      {/* Text Section */}
      <div className={`md:ml-8 md:w-2/3 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl font-bold mb-4 text-gray-800 animate-slideInLeft">About Me</h1>
        <p className="text-lg mb-6 text-center md:text-left max-w-md text-gray-700 leading-relaxed">
          I am a dedicated and hard worker passionate about technology and design. I continuously strive to enhance my skills and contribute effectively to every project I undertake.
        </p>

        {/* Schooling Section */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Schooling:</h2>
        <ul className="list-disc list-inside mb-6">
          <li className="flex items-center text-gray-700 mb-2 transition-all duration-500 hover:translate-x-2 hover:text-blue-500">
            <FaSchool className="mr-2 text-lg" /> High School: ABC High School
          </li>
          <li className="flex items-center text-gray-700 mb-2 transition-all duration-500 hover:translate-x-2 hover:text-blue-500">
            <FaSchool className="mr-2 text-lg" /> Bachelors Degree: XYZ University
          </li>
          <li className="flex items-center text-gray-700 mb-2 transition-all duration-500 hover:translate-x-2 hover:text-blue-500">
            <FaSchool className="mr-2 text-lg" /> Current: CSE Student
          </li>
        </ul>

        {/* Internship Section */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Internships:</h2>
        <ul className="list-disc list-inside">
          <li className="flex items-center text-gray-700 mb-2 transition-all duration-500 hover:translate-x-2 hover:text-green-500">
            <FaUserTie className="mr-2 text-lg" /> UI/UX Intern: Shadow Fox
          </li>
          <li className="flex items-center text-gray-700 mb-2 transition-all duration-500 hover:translate-x-2 hover:text-green-500">
            <FaUserTie className="mr-2 text-lg" /> Development Intern: Tech Solutions
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
