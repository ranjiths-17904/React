import { useState } from 'react';
import { CircleUserRound, Menu, X } from 'lucide-react';
import Card from './Thanks';
import '../assets/css/Nav.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Theme toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleUserIconClick = () => {
    setShowCard(true);
    setTimeout(() => {
      setShowCard(false);
    }, 5000);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav
      className={`relative w-full px-9 py-2 mb-7 shadow-lg rounded-xl z-10 transition-all duration-500 ${
        isDarkMode
          ? 'bg-gradient-to-l from-purple-800 via-pink-700 to-red-700 text-gray-300 '
          : 'bg-gradient-to-r from-purple-800 via-pink-700 to-red-700 text-gray-300'
      }`}
    >
      <div className={`flex justify-between items-center ${showCard ? 'blur-sm' : ''}`}>
        <div
          className="font-extrabold text-2xl font-serif cursor-pointer"
          onClick={toggleTheme}
        >
          My Portfolio
        </div>

        <div className="hidden md:flex md:space-x-8">
          <a href="#profile" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#project" className="nav-link">Project</a>
          <a href="#contact" className="nav-link">Contact</a>
          <div className="ml-6">
            <CircleUserRound
              onClick={handleUserIconClick}
              className="text-white w-7 h-9 cursor-pointer hover:text-yellow-400 transition-colors"
            />
          </div>
        </div>

        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <X className="text-white w-6 h-6" />
          ) : (
            <Menu className="text-white w-6 h-6" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} max-h-[calc(100vh-4rem)] overflow-y-auto`}
      >
        <div className="grid grid-cols-1 gap-4 mt-4">
          <a href="#profile" className="nav-link-mobile">Home</a>
          <a href="#about" className="nav-link-mobile">About</a>
          <a href="#skills" className="nav-link-mobile">Skills</a>
          <a href="#project" className="nav-link-mobile">Project</a>
          <a href="#contact" className="nav-link-mobile">Contact</a>
          <CircleUserRound
            onClick={handleUserIconClick}
            className="text-white cursor-pointer hover:text-yellow-400 transition-colors"
          />
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
