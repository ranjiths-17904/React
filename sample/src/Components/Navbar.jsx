import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CircleUserRound } from 'lucide-react';
import { Menu, X } from 'lucide-react';  // Icons for the hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full px-7 py-2 mb-7  bg-gradient-to-r from-purple-700 via-pink-700 to-red-700 shadow-lg rounded-xl"> 
      <div className="flex justify-between items-center">
        <div className="text-gray-300 font-extrabold text-xl font-serif">
          My Portfolio 
        </div>

        <div className="hidden md:flex md:space-x-8">
          <Link to={'/Profile'} className="text-white font-medium font-serif p-2 px-4 rounded-md transition-transform transform hover:scale-110 hover:bg-gray-900 hover:bg-opacity-50">
            Home
          </Link>
          <Link to={'/About'} className="text-white font-medium font-serif p-2 px-4 rounded-md transition-transform transform hover:scale-110 hover:bg-gray-900 hover:bg-opacity-50">
            About
          </Link>
          <Link to={'/Skills'} className="text-white font-medium font-serif p-2 px-4 rounded-md transition-transform transform hover:scale-110 hover:bg-gray-900 hover:bg-opacity-50">
            Skills
          </Link>
          <Link to={'/Project'} className="text-white font-medium font-serif p-2 px-4 rounded-md transition-transform transform hover:scale-110 hover:bg-gray-900 hover:bg-opacity-50">
            Project
          </Link>
          <Link to={'/Contact'} className="text-white font-medium font-serif p-2 px-4 rounded-md transition-transform transform hover:scale-110 hover:bg-gray-900 hover:bg-opacity-50">
            Contact
          </Link>
          <div className="ml-6">
            <CircleUserRound className="text-white w-7 h-9 cursor-pointer hover:text-yellow-400 transition-colors" /> {/* User icon on the right */}
          </div>
        </div>

        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <Link to={'/Profile'} className="text-white font-medium p-2 rounded-md transition-transform hover:scale-105 hover:bg-gray-900 hover:bg-opacity-30">
            Home
          </Link>
          <Link to={'/About'} className="text-white font-medium p-2 rounded-md transition-transform hover:scale-105 hover:bg-gray-900 hover:bg-opacity-30">
            About
          </Link>
          <Link to={'/Skills'} className="text-white font-medium p-2 rounded-md transition-transform hover:scale-105 hover:bg-gray-900 hover:bg-opacity-30">
            Skills
          </Link>
          <Link to={'/Project'} className="text-white font-medium p-2 rounded-md transition-transform hover:scale-105 hover:bg-gray-900 hover:bg-opacity-30">
            Project
          </Link>
          <Link to={'/Contact'} className="text-white font-medium p-2 rounded-md transition-transform hover:scale-105 hover:bg-gray-900 hover:bg-opacity-30">
            Contact
          </Link>
          <CircleUserRound className="text-white cursor-pointer hover:text-yellow-400 transition-colors" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
