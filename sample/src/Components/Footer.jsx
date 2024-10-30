import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-fuchsia-900 to-indigo-800 text-white py-0 mt-10 w-full animate-slide-up">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-1 mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 animate-fade-in">
            Contact Me
          </h2>
          <ul>
            <li className="flex justify-center md:justify-start items-center mb-2 text-lg animate-fade-in">
              <FaPhone className="mr-3 text-yellow-400" />
              <a href="tel:+917395860211" className="hover:text-yellow-300 hover:scale-105 transition-transform duration-300">
                +91 7395860211
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center mb-2 text-lg animate-fade-in">
              <FaEnvelope className="mr-3 text-pink-400" />
              <a href="mailto:ranjithselvaraj04@gmail.com" className="hover:text-pink-300 hover:scale-105 transition-transform duration-300">
                ranjithselvaraj04@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center md:justify-end space-x-8 animate-fade-in">
        <a href="https://github.com/ranjiths-17904" target="_blank" rel="noopener noreferrer" className="text-3xl hover:scale-110 transition-transform duration-300 hover:text-gray-200">
            <FaGithub className="to-white hover:text-gray-900" />
          </a>
          <a href="https://www.linkedin.com/in/ranjith-s-435362277" target="_blank" rel="noopener noreferrer" className="text-3xl hover:scale-110 transition-transform duration-300 hover:text-blue-600">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl to-white hover:text-pink-700 hover:scale-110 transition-transform duration-300">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400 animate-fade-in">
        <p>© {new Date().getFullYear()} Ranjith S. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
