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
        if (titleIndex < titles[currentTitleIndex].length && showingTitle) {
            const timer = setTimeout(() => {
                setTitleIndex(prev => prev + 1);
            }, 30);  // Further reduced delay for faster typing effect
            return () => clearTimeout(timer);
        } else if (titleIndex === titles[currentTitleIndex].length) {
            const hideTitleTimer = setTimeout(() => {
                setShowingTitle(false);  
            }, 100);  // Reduced delay between showing the complete title and switching
            return () => clearTimeout(hideTitleTimer);
        } else if (!showingTitle) {
            const switchTitleTimer = setTimeout(() => {
                setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
                setTitleIndex(0); 
                setShowingTitle(true);  
            }, 150);  // Reduced delay before switching to the next title
            return () => clearTimeout(switchTitleTimer);
        }
    }, [titleIndex, showingTitle, currentTitleIndex, titles]);

    return (
        <div className="h-full w-full flex flex-col lg:flex-row justify-center items-center p-4 lg:p-10">
            {/* Image section */}
            <div className="flex justify-center lg:justify-end w-full lg:w-auto">
                {/* Image resized for mobile */}
                <img 
                    src={Profilex} 
                    alt="profile" 
                    className="p-1 h-24 w-24 sm:h-32 sm:w-32 lg:h-48 lg:w-48 m-4 lg:m-10 rounded-full shadow-xl object-cover" 
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
