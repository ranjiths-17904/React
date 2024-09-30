import { useEffect, useState } from 'react';
import Contactimg from '../assets/img/Contact.gif';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-blue-50 flex flex-col justify-center items-center px-4 font-poppins">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className={`container mx-auto p-6 flex flex-col md:flex-row justify-center items-center md:justify-between space-y-6 md:space-y-0 transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 transition-transform duration-700 transform hover:scale-105">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center md:text-left">Get In Touch</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-600">Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600">Email</label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600">Message</label>
              <textarea
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img 
            src={Contactimg} 
            alt="Contact"
            className="rounded-lg shadow-lg max-w-full md:max-w-md transition-transform duration-700 transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
