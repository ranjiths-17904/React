import { useState, useEffect } from 'react';
import { CircleUserRound, Menu, X, Rocket, Home, User, Code, Briefcase, MessageCircle } from 'lucide-react';
import Card from './Thanks';
import '../assets/css/Nav.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleUserIconClick = () => {
    setShowCard(true);
    setTimeout(() => {
      setShowCard(false);
    }, 5000);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  const navItems = [
    { id: 'profile', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'project', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: MessageCircle },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-space-secondary/90 backdrop-blur-md shadow-cosmic-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className={`flex justify-between items-center ${showCard ? 'blur-sm' : ''}`}>
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <Rocket className="text-cosmic-blue text-2xl group-hover:animate-bounce transition-all duration-300" />
              <div className="absolute inset-0 text-cosmic-blue text-2xl animate-ping opacity-20" />
            </div>
            <span className="font-orbitron font-black cosmic-text 
              text-xl sm:text-2xl md:text-3xl lg:text-4xl 
              tracking-wide leading-none">
              R-Forge
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`group relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-cosmic-blue/20 text-cosmic-blue border border-cosmic-blue/30'
                      : 'text-gray-300 hover:text-white hover:bg-space-accent/50'
                  }`}
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-space font-medium">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cosmic-blue/10 to-cosmic-purple/10 rounded-full animate-pulse" />
                  )}
                </a>
              );
            })}
            
            <div className="ml-6">
              <button
                onClick={handleUserIconClick}
                className="group relative p-2 rounded-full bg-gradient-to-r from-cosmic-purple to-cosmic-blue hover:from-cosmic-blue hover:to-cosmic-purple transition-all duration-300 hover:scale-110 hover:shadow-cosmic-lg"
              >
                <CircleUserRound className="text-white w-6 h-6 group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-gradient-to-r from-cosmic-blue to-cosmic-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-2 rounded-full bg-space-accent/50 hover:bg-space-accent transition-all duration-300"
            >
              {isOpen ? (
                <X className="text-white w-6 h-6" />
              ) : (
                <Menu className="text-white w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-cosmic-blue/20 text-cosmic-blue border border-cosmic-blue/30'
                      : 'text-gray-300 hover:text-white hover:bg-space-accent/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-space font-medium">{item.label}</span>
                </a>
              );
            })}
            
            <div className="pt-4 border-t border-space-accent">
              <button
                onClick={handleUserIconClick}
                className="flex items-center space-x-3 px-4 py-3 w-full text-left text-gray-300 hover:text-white hover:bg-space-accent/50 rounded-lg transition-all duration-300"
              >
                <CircleUserRound className="w-5 h-5" />
                <span className="font-space font-medium">Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Conditional Rendering of Thank You Card */}
      {showCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4">
          <Card />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
