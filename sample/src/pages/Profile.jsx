import { useEffect, useState } from 'react';
import Profilex from '../assets/img/orig.webp';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaRocket, FaCode, FaPaintBrush } from 'react-icons/fa';
import { SiReact, SiJavascript} from 'react-icons/si';
import '../assets/css/animation.scss';
import Pattern from '../Components/Pattern'; 

const handleSocialClick = (platform) => {
    console.log(`Navigating to ${platform}...`);
};

const Profile = () => {
    const titles = ["Software Developer", "MERN Stack Developer","UI/UX Designer"];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [titleIndex, setTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false); 
    const [speed, setSpeed] = useState(100); 
    const [pause, setPause] = useState(false);

    useEffect(() => {
        if (!pause) {
            if (!isDeleting && titleIndex < titles[currentTitleIndex].length) {
                const typingTimer = setTimeout(() => {
                    setTitleIndex(prev => prev + 1);
                    setSpeed(150); 
                }, speed);
                return () => clearTimeout(typingTimer);
            } else if (isDeleting && titleIndex > 0) {
                const deletingTimer = setTimeout(() => {
                    setTitleIndex(prev => prev - 1);
                    setSpeed(50); 
                }, speed);
                return () => clearTimeout(deletingTimer);
            } else if (!isDeleting && titleIndex === titles[currentTitleIndex].length) {
                const fullTitlePause = setTimeout(() => {
                    setPause(true);
                    setIsDeleting(true);
                }, 1000);
                return () => clearTimeout(fullTitlePause);
            } else if (isDeleting && titleIndex === 0) {
                setIsDeleting(false);
                setCurrentTitleIndex(prev => (prev + 1) % titles.length);
                setPause(true);
            }
        } else {
            const pauseTimer = setTimeout(() => {
                setPause(false);
            }, 500);
            return () => clearTimeout(pauseTimer);
        }
    }, [titleIndex, isDeleting, pause, currentTitleIndex, speed, titles]);

    return (
        <div className="min-h-screen relative overflow-hidden bg-galaxy flex flex-col lg:flex-row justify-start items-center p-8 lg:p-12 gap-16 pt-40 pb-64">
            {/* Shooting Stars Background Animation */}
            <Pattern />
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden z-10 ">
                {/* Cosmic Rings */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-cosmic-blue/20 rounded-full animate-spin" style={{animationDuration: '20s'}} />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-cosmic-purple/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}} />
                
                {/* Nebula Effects */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cosmic-purple/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cosmic-blue/10 to-transparent rounded-full blur-3xl" />
            </div>

            {/* Profile Image Section */}
            <div className="relative z-20 flex justify-center lg:justify-end w-full lg:w-auto">
                <div className="relative group">
                    {/* Orbiting Tech Icons */}
                    <div className="absolute inset-0 animate-cosmic-rotate">
                        <FaCode className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-cosmic-blue text-2xl animate-pulse" />
                        <SiReact className="absolute top-1/2 -right-8 transform -translate-y-1/2 text-cosmic-blue text-2xl animate-bounce" />
                        <SiJavascript className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-cosmic-orange text-2xl animate-pulse" />
                        <FaPaintBrush className="absolute top-1/2 -left-8 transform -translate-y-1/2 text-cosmic-pink text-2xl animate-bounce" />
                    </div>
                    
                    {/* Profile Image with Glow Effect */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple via-cosmic-blue to-cosmic-pink rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 animate-glow" />
                        <img 
                            src={Profilex} 
                            alt="R-Forge - Space Developer" 
                            className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-cosmic-blue/30 shadow-2xl group-hover:scale-105 transition-transform duration-500" 
                        />
                    </div>
                                   
                </div>
            </div>

            {/* Content Section */}
            <div className="relative z-20 text-center lg:text-left max-w-2xl mb-10 mt-12 lg:mt-8">
                {/* Welcome Text */}
                <div className="mb-6">
                    <h1 className="text-4xl lg:text-7xl font-orbitron font-black mb-4">
                        <span className="cosmic-text animate-cosmic-shift">
                            Welcome to
                        </span>
                        <br />
                        <span className="text-white">
                            My R-Forge
                        </span>
                    </h1>
                </div>

                {/* Name and Title */}
                <div className="mb-2">
                    <h2 className="text-2xl lg:text-4xl font-space font-bold mb-4 text-white">
                        I'm <span className="cosmic-text">Ranjith S</span>
                    </h2>
                    
                    <div className="text-xl lg:text-3xl font-space font-medium text-cosmic-blue min-h-[3rem] flex items-center justify-center lg:justify-start">
                        <span className="mr-2">🚀</span>
                        I am a {titles[currentTitleIndex].slice(0, titleIndex)}
                        <span className="animate-pulse text-cosmic-pink ml-1">|</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed font-space">
                    Exploring the digital universe, crafting extraordinary experiences, and building 
                    the future one line of code at a time. Ready to launch your next project into orbit!
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-cosmic-purple to-cosmic-blue rounded-full font-space font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-cosmic-lg">
                        <span className="relative z-10 flex items-center justify-center space-x-2">
                            <FaRocket className="text-lg group-hover:animate-bounce" />
                            <span>Launch Project</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cosmic-blue to-cosmic-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                    
                    <button className="px-8 py-4 border-2 border-cosmic-blue rounded-full font-space font-semibold text-cosmic-blue hover:bg-cosmic-blue hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-cosmic">
                        View My Work
                    </button>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center lg:justify-start space-x-6">
                    <a 
                        href="https://www.facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={() => handleSocialClick('Facebook')} 
                        className="group relative w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl transition-all duration-300 hover:scale-110 hover:shadow-cosmic-lg hover:rotate-12">
                        <FaFacebook className="group-hover:animate-bounce" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                    <a 
                        href="https://www.github.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={() => handleSocialClick('Github')} 
                        className="group relative w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white text-2xl transition-all duration-300 hover:scale-110 hover:shadow-cosmic-lg hover:rotate-12">
                        <FaGithub className="group-hover:animate-bounce" />
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                    <a 
                        href="https://www.instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={() => handleSocialClick('Instagram')} 
                        className="group relative w-14 h-14 bg-gradient-to-br from-cosmic-pink to-purple-600 rounded-full flex items-center justify-center text-white text-2xl transition-all duration-300 hover:scale-110 hover:shadow-cosmic-lg hover:rotate-12">
                        <FaInstagram className="group-hover:animate-bounce" />
                        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-pink to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                    <a 
                        href="https://www.linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={() => handleSocialClick('LinkedIn')} 
                        className="group relative w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-2xl transition-all duration-300 hover:scale-110 hover:shadow-cosmic-lg hover:rotate-12">
                        <FaLinkedin className="group-hover:animate-bounce" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                <div className="w-6 h-10 border-2 border-cosmic-blue rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-cosmic-blue rounded-full mt-2 animate-pulse" />
                </div>
            </div>
        </div>
    );
};

export default Profile;
