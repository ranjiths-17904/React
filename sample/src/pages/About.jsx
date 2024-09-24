import { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaSchool, FaUserTie } from 'react-icons/fa'; // Import necessary icons
import '../assets/css/About.css'; // Ensure the CSS file exists and is linked properly

const About = () => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger content fade-in effect on mount
    setTimeout(() => {
      setVisible(true);
    }, 200);
  }, []);

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-b from-purple-900 to-blue-600 rounded-lg shadow-xl w-full max-w-xs lg:max-w-4xl mx-auto">
      
      {/* Profile Image Section */}
      <div className="relative mb-6">
        <img
          src="src/assets/img/Profile.gif" // Replace with actual image path
          alt="Profile"
          className="w-full h-auto max-h-96 rounded-xl shadow-lg transition-transform transform hover:scale-105"
        />
      </div>

      {/* React Icon on the Left Side */}
      <div className="flex justify-center items-center mb-4">
        <FaReact className="text-4xl text-blue-400 mr-6 animate-spin-slow" /> {/* React icon */}
      </div>

      {/* HTML, CSS, JS Icons Below the Image */}
      <div className="flex space-x-4 mb-6">
        <FaHtml5 className="text-4xl text-red-500 hover:text-red-600 transition-transform transform hover:scale-110" /> {/* HTML Icon */}
        <FaCss3Alt className="text-4xl text-blue-500 hover:text-blue-600 transition-transform transform hover:scale-110" /> {/* CSS Icon */}
        <FaJsSquare className="text-4xl text-yellow-500 hover:text-yellow-600 transition-transform transform hover:scale-110" /> {/* JS Icon */}
      </div>

      {/* About Section */}
      <div className={`flex flex-col lg:flex-row items-center lg:items-start p-8 bg-gray-100 text-black min-h-screen animate-fadeIn ${visible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Left Image with Hover Animation */}
        <div
          className="relative mb-6 lg:mb-0 lg:w-1/3 w-full flex justify-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src="src/assets/img/Profile.gif"  // Replace with the actual image path
            alt="Animated Image"
            className={`transition-transform duration-500 ease-in-out transform ${hovered ? 'scale-110 translate-x-3' : 'scale-100'} w-full max-w-xs lg:max-w-full h-auto shadow-lg rounded-lg`}
          />
        </div>

        {/* Text Content Section */}
        <div className="lg:ml-12 w-full lg:w-2/3">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 animate-slideInLeft lg:text-left text-center">About Me</h1>
          <p className="text-lg mb-8 text-center lg:text-left max-w-xl mx-auto lg:mx-0 text-gray-700 leading-relaxed lg:leading-loose">
            I am a dedicated and hardworking individual, passionate about technology and design. I strive to enhance my skills and contribute effectively to every project I undertake.
          </p>

          {/* Schooling Section */}
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 lg:text-left text-center">Schooling:</h2>
          <ul className="list-disc list-inside mb-8 lg:text-left text-center">
            <li className="flex items-center justify-center lg:justify-start text-gray-700 mb-2 transition-transform duration-500 hover:translate-x-2 hover:text-blue-500">
              <FaSchool className="mr-2 text-lg" /> High School: ABC High School
            </li>
            <li className="flex items-center justify-center lg:justify-start text-gray-700 mb-2 transition-transform duration-500 hover:translate-x-2 hover:text-blue-500">
              <FaSchool className="mr-2 text-lg" /> Bachelors Degree: XYZ University
            </li>
            <li className="flex items-center justify-center lg:justify-start text-gray-700 mb-2 transition-transform duration-500 hover:translate-x-2 hover:text-blue-500">
              <FaSchool className="mr-2 text-lg" /> Current: CSE Student
            </li>
          </ul>

          {/* Internship Section */}
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 lg:text-left text-center">Internships:</h2>
          <ul className="list-disc list-inside lg:text-left text-center">
            <li className="flex items-center justify-center lg:justify-start text-gray-700 mb-2 transition-transform duration-500 hover:translate-x-2 hover:text-green-500">
              <FaUserTie className="mr-2 text-lg" /> UI/UX Intern: Shadow Fox
            </li>
            <li className="flex items-center justify-center lg:justify-start text-gray-700 mb-2 transition-transform duration-500 hover:translate-x-2 hover:text-green-500">
              <FaUserTie className="mr-2 text-lg" /> Development Intern: Tech Solutions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
