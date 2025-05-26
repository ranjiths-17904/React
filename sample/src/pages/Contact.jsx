import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import Contactimg from '../assets/img/Contact.gif';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setFormStatus('Please fill in all fields.');
      setIsError(true);
      return;
    }

    setIsSending(true);
    emailjs.send('service_egopgnp', 'template_p8y9qy7', formData, 'HpLX2ePIpzpIn_1N1')
      .then(() => {
        setFormStatus('Message sent successfully!');
        setIsError(false);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setFormStatus('Failed to send message. Try again later.');
        setIsError(true);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-100 to-blue-50 flex flex-col justify-center items-center px-4 py-10 font-poppins">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Let's Talk</h1>
      
      <div className={`container mx-auto flex flex-col md:flex-row justify-center items-center gap-10 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

        {/* Form Section */}
        <div className="bg-white p-8 rounded-xl shadow-xl w-full md:w-1/2 transition-transform duration-500 hover:scale-105">
          <h2 className="text-3xl font-bold mb-6 text-purple-800">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your message"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-2 px-4 rounded-md text-white transition-all duration-300 ease-in-out ${isSending ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'}`}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {formStatus && (
            <p className={`mt-4 text-sm font-semibold ${isError ? 'text-red-600' : 'text-green-600'}`}>
              {formStatus}
            </p>
          )}
        </div>

        {/* Image/Map Section */}
        <div className="md:w-1/2 flex justify-center items-center">
          <a
            href="https://www.google.com/maps/place/Kasigoundanpudur,+Tamil+Nadu+641402/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={Contactimg}
              alt="Location Map"
              className="rounded-lg shadow-md h-72 w-full max-w-md object-cover transition-transform duration-500 hover:scale-105"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
