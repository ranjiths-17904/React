import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10 w-full animate-slide-up">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Contact Info Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4 animate-fade-in">Contact Me</h2>
          <ul>
            <li className="flex justify-center md:justify-start items-center mb-2 animate-fade-in">
              <FaPhone className="mr-2" />
              <a href="tel:+917395860211" className="hover:text-gray-300 hover:scale-105 transition-transform duration-300">
                +91 7395860211
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center mb-2 animate-fade-in">
              <FaEnvelope className="mr-2" />
              <a href="mailto:ranjithselvaraj04@gmail.com" className="hover:text-gray-300 hover:scale-105 transition-transform duration-300">
                ranjithselvaraj04@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons Section */}
        <div className="flex justify-center md:justify-end space-x-6 animate-fade-in">
          <a href="https://github.com/ranjiths-17904" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400 hover:scale-110 transition-transform duration-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ranjith-s-435362277" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400 hover:scale-110 transition-transform duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-sm text-gray-500 animate-fade-in">
        <p>© {new Date().getFullYear()} Ranjith S. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
