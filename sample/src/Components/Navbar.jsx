import { useState } from 'react';
import { CircleUserRound } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import Card from './Thanks';
import '../assets/css/Nav.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleUserIconClick = () => {
    setShowCard(true);
    setTimeout(() => {
      setShowCard(false);
    }, 5000);
  };

  return (
    <nav className="relative w-full px-9 py-2 mb-7 bg-gradient-to-r from-purple-700 via-pink-700 to-red-700 shadow-lg rounded-xl z-10">
      <div className={`flex justify-between items-center ${showCard ? 'blur-sm' : ''}`}>
        <div className="text-gray-300 font-extrabold text-2xl font-serif">My Portfolio</div>

        <div className="hidden md:flex md:space-x-8">
          <a href="#profile" className="text-white font-medium font-serif p-2 px-4 rounded-md transition-transform transform hover:scale-110 hover:bg-gray-900 hover:bg-opacity-50">
            Home
          </a>
          <a href="#about" className="text-white font-medium font-serif p-2 px-4 rounded-md transition-transform transform hover:scale-110 hover:bg-gray-900 hover:bg-opacity-50">
            About
          </a>
          <a href="#skills" className="text-white font-medium font-serif p-2 px-4 rounded-md transition-transform transform hover:scale-110 hover:bg-gray-900 hover:bg-opacity-50">
            Skills
          </a>
          <a href="#project" className="text-white font-medium font-serif p-2 px-4 rounded-md transition-transform transform hover:scale-110 hover:bg-gray-900 hover:bg-opacity-50">
            Project
          </a>
          <a href="#contact" className="text-white font-medium font-serif p-2 px-4 rounded-md transition-transform transform hover:scale-110 hover:bg-gray-900 hover:bg-opacity-50">
            Contact
          </a>
          <div className="ml-6">
            <CircleUserRound onClick={handleUserIconClick} className="text-white w-7 h-9 cursor-pointer hover:text-yellow-400 transition-colors" />
          </div>
        </div>

        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} max-h-[calc(100vh-4rem)] overflow-y-auto`}>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <a href="#profile" className="text-white font-medium p-2 rounded-md transition-transform hover:scale-105 hover:bg-gray-900 hover:bg-opacity-30">
            Home
          </a>
          <a href="#about" className="text-white font-medium p-2 rounded-md transition-transform hover:scale-105 hover:bg-gray-900 hover:bg-opacity-30">
            About
          </a>
          <a href="#skills" className="text-white font-medium p-2 rounded-md transition-transform hover:scale-105 hover:bg-gray-900 hover:bg-opacity-30">
            Skills
          </a>
          <a href="#project" className="text-white font-medium p-2 rounded-md transition-transform hover:scale-105 hover:bg-gray-900 hover:bg-opacity-30">
            Project
          </a>
          <a href="#contact" className="text-white font-medium p-2 rounded-md transition-transform hover:scale-105 hover:bg-gray-900 hover:bg-opacity-30">
            Contact
          </a>
          <CircleUserRound onClick={handleUserIconClick} className="text-white cursor-pointer hover:text-yellow-400 transition-colors" />
        </div>
      </div>

      {/* Conditional Rendering of Thank You Card */}
      {showCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 pl-4">
          <Card />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
