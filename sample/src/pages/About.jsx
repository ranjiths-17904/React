import { useState } from 'react';
import { FaSchool, FaUserTie } from 'react-icons/fa'; // Import icons
import '../assets/css/About.css'; // Import CSS for animation

const About = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-4 text-center max-w-md">
        I am a dedicated and hard worker passionate about technology and design. I continuously strive to enhance my skills and contribute effectively to every project I undertake.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Schooling:</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="flex items-center"><FaSchool className="mr-2" /> High School: ABC High School</li>
        <li className="flex items-center"><FaSchool className="mr-2" /> Bachelors Degree: XYZ University</li>
        <li className="flex items-center"><FaSchool className="mr-2" /> Current: CSE Student</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Internships:</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="flex items-center"><FaUserTie className="mr-2" /> UI/UX Intern: Shadow Fox</li>
        <li className="flex items-center"><FaUserTie className="mr-2" /> Development Intern: Tech Solutions</li>
      </ul>

      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src="/path/to/your/image.png"
          alt="Animated Image"
          className={`transition-transform duration-500 ease-in-out ${
            hovered ? 'translate-x-16' : 'translate-x-0'
          } w-32 h-32 absolute right-0 top-0`}
        />
      </div>
    </div>
  );
};

export default About;
