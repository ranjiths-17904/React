import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import Contactimg from '../assets/img/Contact.gif';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isError, setIsError] = useState(false); 

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_egopgnp', 'template_p8y9qy7', formData, 'HpLX2ePIpzpIn_1N1')
      .then(() => {
        setFormStatus('Message sent successfully!');
        setIsError(false);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setFormStatus('Failed to send message.');
        setIsError(true);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r w-[100%] from-gray-100 to-blue-50 flex flex-col justify-center items-center px-8 py-10 font-poppins">
      <h1 className="text-4xl font-bold mb-8 text-center">Let's Talk</h1>
      <div className={`container mx-auto p-6 flex flex-col md:flex-row justify-center items-center md:justify-between space-y-6 md:space-y-0 transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        <div className="bg-white p-8 rounded-lg shadow-xl w-full md:w-1/2 transition-transform duration-700 transform hover:scale-105">
          <h2 className="text-4xl font-bold mb-6 text-yellow-800 text-center md:text-left">Get In Touch</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-gray-600 ">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
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
          {formStatus && (
            <p className={`mt-4 ${isError ? 'text-red-800' : 'text-green-700'}`}>
              {formStatus}
            </p>
          )}
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center pl-2">
          <a
            href="https://www.google.com/maps/place/Sulur,+Coimbatore,+Tamil+Nadu,+India/@11.0319885,77.1451386,12z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={Contactimg} 
              alt="Contact"
              className="flex flex-row rounded-lg shadow-lg w-96 h-72 max-w-full md:max-w-lg transition-transform duration-700 transform hover:scale-105"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
