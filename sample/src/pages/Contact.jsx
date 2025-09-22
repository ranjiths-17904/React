import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaRocket, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaGlobe, FaCode } from 'react-icons/fa';
import Contactimg from '../assets/img/Contact.gif';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [hoveredContact, setHoveredContact] = useState(null);

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
        setFormStatus('Message transmitted successfully! 🚀');
        setIsError(false);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setFormStatus('Transmission failed. Please try again later.');
        setIsError(true);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'ranjith@example.com',
      color: 'from-blue-500 to-cyan-500',
      link: 'mailto:ranjith@example.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 98765 43210',
      color: 'from-green-500 to-emerald-500',
      link: 'tel:+919876543210'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Coimbatore, Tamil Nadu',
      color: 'from-purple-500 to-pink-500',
      link: 'https://www.google.com/maps/place/Kasigoundanpudur,+Tamil+Nadu+641402/'
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      color: 'from-blue-600 to-blue-800',
      link: 'https://www.linkedin.com'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      color: 'from-gray-700 to-gray-900',
      link: 'https://www.github.com'
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      color: 'from-pink-500 to-purple-600',
      link: 'https://www.instagram.com'
    },
    {
      icon: FaFacebook,
      label: 'Facebook',
      color: 'from-blue-500 to-blue-700',
      link: 'https://www.facebook.com'
    }
  ];

  return (
    <div className="min-h-screen relative py-20 px-4 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Communication Icons */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute opacity-5 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            <FaPaperPlane className="text-cosmic-blue text-3xl" />
          </div>
        ))}
        
        {/* Communication Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-cosmic-blue/10 rounded-full animate-spin" style={{animationDuration: '25s'}} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cosmic-purple/10 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-orbitron font-black mb-6">
            <span className="cosmic-text animate-cosmic-shift">Contact</span>
            <span className="text-white ml-4">Mission Control</span>
          </h2>
          <p className="text-xl text-gray-300 font-space max-w-3xl mx-auto mb-8">
            Ready to launch your next project? Let's connect and explore the possibilities together
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Contact Form */}
          <div className="space-card p-8 group">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-cosmic-purple to-cosmic-blue rounded-lg">
                <FaPaperPlane className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-orbitron font-bold text-white">Transmit Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-space font-semibold text-cosmic-blue mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-space-accent/30 border border-cosmic-blue/20 rounded-lg text-white placeholder-gray-400 focus:border-cosmic-blue focus:ring-2 focus:ring-cosmic-blue/20 transition-all duration-300 font-space"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-space font-semibold text-cosmic-blue mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-space-accent/30 border border-cosmic-blue/20 rounded-lg text-white placeholder-gray-400 focus:border-cosmic-blue focus:ring-2 focus:ring-cosmic-blue/20 transition-all duration-300 font-space"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-space font-semibold text-cosmic-blue mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-space-accent/30 border border-cosmic-blue/20 rounded-lg text-white placeholder-gray-400 focus:border-cosmic-blue focus:ring-2 focus:ring-cosmic-blue/20 transition-all duration-300 font-space resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`group relative w-full py-4 px-6 rounded-lg font-space font-semibold text-white transition-all duration-300 overflow-hidden ${
                  isSending 
                    ? 'bg-space-accent/50 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-cosmic-purple to-cosmic-blue hover:from-cosmic-blue hover:to-cosmic-purple hover:scale-105 hover:shadow-cosmic-lg'
                }`}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  {isSending ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <FaRocket className="text-lg group-hover:animate-bounce" />
                      <span>Launch Message</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cosmic-blue to-cosmic-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>

            {formStatus && (
              <div className={`mt-6 p-4 rounded-lg font-space text-sm font-semibold ${
                isError 
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                  : 'bg-green-500/20 text-green-400 border border-green-500/30'
              }`}>
                {formStatus}
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-cosmic-green to-neon-cyan rounded-lg">
                  <FaGlobe className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-white">Connect With Me</h3>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  const isHovered = hoveredContact === index;
                  
                  return (
                    <a
                      key={method.label}
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 group ${
                        isHovered ? 'bg-space-accent/50 scale-105' : 'bg-space-accent/20 hover:bg-space-accent/30'
                      }`}
                      onMouseEnter={() => setHoveredContact(index)}
                      onMouseLeave={() => setHoveredContact(null)}
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} flex-shrink-0`}>
                        <Icon className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="text-gray-400 font-space text-sm">{method.label}</p>
                        <p className="text-white font-space font-semibold">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-cosmic-orange to-cosmic-pink rounded-lg">
                  <FaCode className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-white">Follow My Journey</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  
                  return (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r ${social.color} text-white transition-all duration-300 hover:scale-105 hover:shadow-cosmic-lg`}
                    >
                      <Icon className="text-xl group-hover:animate-bounce" />
                      <span className="font-space font-semibold">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Location Map */}
            <div className="space-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-cosmic-blue to-cosmic-purple rounded-lg">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white">My Location</h3>
              </div>
              
              <a
                href="https://www.google.com/maps/place/Kasigoundanpudur,+Tamil+Nadu+641402/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <img 
                  src={Contactimg}
                  alt="Location Map"
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 border border-cosmic-blue/20"
                />
                <p className="text-cosmic-blue font-space text-sm mt-2 group-hover:text-white transition-colors duration-300">
                  Click to view on Google Maps
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="space-card p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <FaRocket className="text-cosmic-blue text-2xl" />
              <h3 className="text-2xl font-orbitron font-bold text-white">Ready to Start Your Project?</h3>
            </div>
            
            <p className="text-lg text-gray-300 font-space leading-relaxed mb-6">
              Whether you need a website, mobile app, or have an innovative idea you want to bring to life, 
              I'm here to help you navigate the digital cosmos and create something extraordinary.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-space-accent/30 rounded-full border border-cosmic-blue/20">
                <FaPaperPlane className="text-cosmic-blue text-sm" />
                <span className="text-sm text-gray-300 font-space">Quick Response</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-space-accent/30 rounded-full border border-cosmic-green/20">
                <FaCode className="text-cosmic-green text-sm" />
                <span className="text-sm text-gray-300 font-space">Quality Code</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-space-accent/30 rounded-full border border-cosmic-purple/20">
                <FaRocket className="text-cosmic-purple text-sm" />
                <span className="text-sm text-gray-300 font-space">Innovation Focused</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
