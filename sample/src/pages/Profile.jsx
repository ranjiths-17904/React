import { useEffect, useState } from 'react';
import Profilex from '../assets/img/orig.webp';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';

const handleSocialClick = (platform) => {
    console.log(`Navigating to ${platform}...`);
    console.log(`Navigating to ${platform}!`);
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
            }, 100); 
            return () => clearTimeout(timer);
        } else if (titleIndex === titles[currentTitleIndex].length) {
            const hideTitleTimer = setTimeout(() => {
                setShowingTitle(false);  
            }, 300);  

            return () => clearTimeout(hideTitleTimer);
        } else if (!showingTitle) {
            const switchTitleTimer = setTimeout(() => {
                setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
                setTitleIndex(0); 
                setShowingTitle(true);  
            }, 300);
            return () => clearTimeout(switchTitleTimer);
        }
    }, [titleIndex, showingTitle, currentTitleIndex, titles]);

    return (
        <>
            <div className="h-full w-full flex flex-col lg:flex-row justify-center items-center p-10 animate-fadeIn">
          
                <div className="flex pr-0">
                    <img src={Profilex} alt="profile" className="p-1 h-55 w-55 lg:h-60 lg:w-60 m-10 rounded-full shadow-xl object-cover" />
                </div>
                <div className="ml-0 lg:ml-12 mt-6 lg:mt-0 text-center lg:text-left">
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                        Hi, I am Ranjith
                    </h2>
                   
                    <div className="text-2xl lg:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mt-4">
                        I am {titles[currentTitleIndex].slice(0, titleIndex)}
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex justify-center lg:justify-start space-x-6 mt-6">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('Facebook')} className="text-3xl text-blue-600 hover:text-blue-800 transition duration-300">
                            <FaFacebook />
                        </a>
                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('Github')} className="text-3xl text-black-400 hover:text-black-600 transition duration-300">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('Instagram')} className="text-3xl text-pink-600 hover:text-pink-800 transition duration-300">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('LinkedIn')} className="text-3xl text-blue-500 hover:text-blue-700 transition duration-300">
                            <FaLinkedin />
                        </a>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
