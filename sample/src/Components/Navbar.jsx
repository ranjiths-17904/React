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
    <nav className="w-full px-6 py-4 shadow-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="flex justify-between items-center">
        <div className="text-gray-300 font-bold text-lg">Portfolio</div>

        {/* Links (Hidden on Mobile) */}
        <div className="hidden md:flex md:space-x-8">
          <Link to={'/Profile'} className="text-blue-100 font-medium cursor-pointer p-2 rounded-sm pl-3 pr-3 transition-transform hover:scale-105 hover:bg-gradient-to-r from-purple-400 via-blue-400 to-red-400">
            Home
          </Link>
          <Link to={'/About'} className="text-blue-100 font-medium cursor-pointer p-2 rounded-sm pl-3 pr-3 transition-transform hover:scale-105 hover:bg-gradient-to-r from-purple-400 via-blue-400 to-red-400">
            About
          </Link>
          <Link to={'/Skills'} className="text-blue-100 font-medium cursor-pointer p-2 rounded-sm pl-3 pr-3 transition-transform hover:scale-105 hover:bg-gradient-to-r from-purple-400 via-blue-400 to-red-400">
            Skills
          </Link>
          <Link to={'/Project'} className="text-blue-100 font-medium cursor-pointer p-2 rounded-sm pl-3 pr-3 transition-transform hover:scale-105 hover:bg-gradient-to-r from-purple-400 via-blue-400 to-red-400">
            Project
          </Link>
          <Link to={'/Contact'} className="text-blue-100 font-medium cursor-pointer p-2 rounded-sm pl-3 pr-3 transition-transform hover:scale-105 hover:bg-gradient-to-r from-purple-400 via-blue-400 to-red-400">
            Contact
          </Link>
        </div>

        {/* CircleUser Icon */}
        <div className="hidden md:block">
          <CircleUserRound className="text-blue-100 cursor-pointer hover:bg-gradient-to-r from-purple-400 via-blue-400 to-red-400 p-2 rounded-md" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <Link to={'/Profile'} className="text-blue-100 font-medium cursor-pointer p-2 rounded-sm transition-transform hover:scale-105 hover:bg-gradient-to-r from-purple-400 via-blue-400 to-red-400">
            Home
          </Link>
          <Link to={'/About'} className="text-blue-100 font-medium cursor-pointer p-2 rounded-sm transition-transform hover:scale-105 hover:bg-gradient-to-r from-purple-400 via-blue-400 to-red-400">
            About
          </Link>
          <Link to={'/Skills'} className="text-blue-100 font-medium cursor-pointer p-2 rounded-sm transition-transform hover:scale-105 hover:bg-gradient-to-r from-purple-400 via-blue-400 to-red-400">
            Skills
          </Link>
          <Link to={'/Project'} className="text-blue-100 font-medium cursor-pointer p-2 rounded-sm transition-transform hover:scale-105 hover:bg-gradient-to-r from-purple-400 via-blue-400 to-red-400">
            Project
          </Link>
          <Link to={'/Contact'} className="text-blue-100 font-medium cursor-pointer p-2 rounded-sm transition-transform hover:scale-105 hover:bg-gradient-to-r from-purple-400 via-blue-400 to-red-400">
            Contact
          </Link>
          <CircleUserRound className="text-blue-100 cursor-pointer hover:bg-gradient-to-r from-purple-400 via-blue-400 to-red-400 p-2 rounded-md" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
