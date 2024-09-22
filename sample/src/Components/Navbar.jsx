import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CircleUserRound } from 'lucide-react';      
import { Menu, X } from 'lucide-react';  // Icons for the hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full px-6 py-4 shadow-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      {/* Portfolio Logo */}
      <div className="flex justify-between items-center">
        <div className="text-gray-300 font-bold text-lg">Portfolio</div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
        </div>
      </div>

      {/* Desktop Links (visible in all screens) */}
      <div className={`md:flex md:items-center md:space-x-8 ${isOpen ? 'grid grid-cols-1 gap-4 mt-4' : 'hidden md:flex'}`}>
        <Link to={'/Profile'} className="transition-transform transform hover:scale-105">
          <li className="text-blue-100 font-medium hover:text-gray-800 cursor-pointer hover:bg-sky-600 p-2 rounded-sm pl-3 pr-3">
            Home
          </li>
        </Link>
        <Link to={'/About'} className="transition-transform transform hover:scale-105">
          <li className="text-blue-100 font-medium hover:text-gray-800 cursor-pointer hover:bg-sky-600 p-2 rounded-sm pl-3 pr-3">
            About
          </li>
        </Link>
        <Link to={'/Skills'} className="transition-transform transform hover:scale-105">
          <li className="text-blue-100 font-medium hover:text-gray-800 cursor-pointer hover:bg-sky-600 p-2 rounded-sm pl-3 pr-3">
            Skills
          </li>
        </Link>
        <Link to={'/Project'} className="transition-transform transform hover:scale-105">
          <li className="text-blue-100 font-medium hover:text-gray-800 cursor-pointer hover:bg-sky-600 p-2 rounded-sm pl-3 pr-3">
            Project
          </li>
        </Link>
        <Link to={'/Contact'} className="transition-transform transform hover:scale-105">
          <li className="text-blue-100 font-medium hover:text-gray-800 cursor-pointer hover:bg-sky-600 p-2 rounded-sm pl-3 pr-3">
            Contact
          </li>
        </Link>
        <div className="mt-4 md:mt-0">
          <CircleUserRound className="text-blue-100 cursor-pointer hover:bg-sky-600 p-2 rounded-md" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
