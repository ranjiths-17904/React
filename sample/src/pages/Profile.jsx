import { useEffect, useState } from 'react';
import Profilex from '../assets/img/orig.webp';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const handleSocialClick = (platform) => {
    console.log(`Navigating to ${platform}...`);
};

const Profile = () => {
    const titles = ["Web Developer", "UI/UX Designer", "Software Engineer"];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [titleIndex, setTitleIndex] = useState(0);
    const [showingTitle, setShowingTitle] = useState(true);

    useEffect(() => {
        // Typing animation logic
        if (showingTitle && titleIndex < titles[currentTitleIndex].length) {
            const typingTimer = setTimeout(() => {
                setTitleIndex(prev => prev + 1);
            }, 100); // Typing speed
            return () => clearTimeout(typingTimer);
        } else if (titleIndex === titles[currentTitleIndex].length) {
            // Pause after fully typing a title
            const pauseTimer = setTimeout(() => {
                setShowingTitle(false);
            }, 1000); // Pause duration after full title
            return () => clearTimeout(pauseTimer);
        } else if (!showingTitle) {
            // Move to the next title
            const switchTitleTimer = setTimeout(() => {
                setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length); // Cycle to the next title
                setTitleIndex(0); // Reset the titleIndex for new title
                setShowingTitle(true); // Start showing new title
            }, 500); // Delay before switching to next title
            return () => clearTimeout(switchTitleTimer);
        }
    }, [titleIndex, showingTitle, currentTitleIndex, titles]);

    return (
        <div className="h-full w-full flex flex-col lg:flex-row justify-center items-center p-4 lg:p-2 gap-20 pr-10">
         
            <div className="flex justify-center lg:justify-end w-full lg:w-auto ">
                <img 
                    src={Profilex} 
                    alt="profile" 
                    className="p-2 lg:h-80 lg:w-80 lg:m-10 rounded-3xl shadow-2xl object-cover" 
                />
            </div>
            <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                    Hi, I am Ranjith
                </h2>

                <div className="text-xl lg:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mt-2 lg:mt-4">
                    I am {titles[currentTitleIndex].slice(0, titleIndex)}
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center lg:justify-start space-x-6 mt-6">
                    <a 
                        href="https://www.facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={() => handleSocialClick('Facebook')} 
                        className="text-2xl lg:text-3xl text-blue-600 hover:text-blue-800 transition duration-300">
                        <FaFacebook />
                    </a>
                    <a 
                        href="https://www.github.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={() => handleSocialClick('Github')} 
                        className="text-2xl lg:text-3xl text-black hover:text-gray-600 transition duration-300">
                        <FaGithub />
                    </a>
                    <a 
                        href="https://www.instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={() => handleSocialClick('Instagram')} 
                        className="text-2xl lg:text-3xl text-pink-600 hover:text-pink-800 transition duration-300">
                        <FaInstagram />
                    </a>
                    <a 
                        href="https://www.linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={() => handleSocialClick('LinkedIn')} 
                        className="text-2xl lg:text-3xl text-blue-500 hover:text-blue-700 transition duration-300">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile;
