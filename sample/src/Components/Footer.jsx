import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Contact Info Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
          <ul>
            <li className="flex items-center mb-2">
              <FaPhone className="mr-2" />
              <a href="tel:+917395860211" className="hover:text-gray-300">+91 7395860211</a>
            </li>
            <li className="flex items-center mb-2">
              <FaEnvelope className="mr-2" />
              <a href="mailto:ranjithselvaraj04@gmail.com" className="hover:text-gray-300">ranjithselvaraj04@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Social Icons Section */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="https://github.com/ranjiths-17904" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ranjith-s-435362277" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Ranjith S. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
