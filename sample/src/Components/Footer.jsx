import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaInstagram, FaRocket, FaStar, FaCode, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/ranjiths-17904",
      label: "GitHub",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ranjith-s-435362277",
      label: "LinkedIn",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com",
      label: "Instagram",
      color: "from-pink-500 to-purple-600"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#profile" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-galaxy border-t border-cosmic-blue/20 py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Footer Elements */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute opacity-5 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 8}s`
            }}
          >
            <FaStar className="text-cosmic-blue text-2xl" />
          </div>
        ))}
        
        {/* Footer Rings */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="w-64 h-64 border border-cosmic-blue/10 rounded-full animate-spin" style={{animationDuration: '20s'}} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-cosmic-purple to-cosmic-blue rounded-lg">
                <FaRocket className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold cosmic-text">
                R-Forge
              </h3>
            </div>
            <p className="text-gray-400 font-space leading-relaxed mb-6">
              Exploring the digital cosmos, creating extraordinary experiences, and building the future one line of code at a time.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 rounded-lg bg-gradient-to-r ${social.color} text-white transition-all duration-300 hover:scale-110 hover:shadow-cosmic-lg`}
                    aria-label={social.label}
                  >
                    <Icon className="text-lg group-hover:animate-bounce" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-orbitron font-bold text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 font-space hover:text-cosmic-blue transition-colors duration-300 group flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-cosmic-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-orbitron font-bold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-cosmic-green to-neon-cyan rounded-lg">
                  <FaPhone className="text-white text-sm" />
                </div>
                <a 
                  href="tel:+917395860211" 
                  className="text-gray-400 font-space hover:text-cosmic-blue transition-colors duration-300"
                >
                  +91 7395860211
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-cosmic-blue to-cosmic-purple rounded-lg">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <a 
                  href="mailto:ranjithselvaraj04@gmail.com" 
                  className="text-gray-400 font-space hover:text-cosmic-blue transition-colors duration-300 break-all"
                >
                  ranjithselvaraj04@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-cosmic-orange to-cosmic-pink rounded-lg">
                  <FaGlobe className="text-white text-sm" />
                </div>
                <span className="text-gray-400 font-space">
                  Coimbatore, Tamil Nadu
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter/CTA */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-orbitron font-bold text-white mb-6">Let's Connect</h4>
            <p className="text-gray-400 font-space text-sm leading-relaxed mb-6">
              Ready to launch your next project? Let's explore the digital universe together.
            </p>
            
            <button className="group relative px-6 py-3 bg-gradient-to-r from-cosmic-purple to-cosmic-blue rounded-lg text-white font-space font-semibold transition-all duration-300 hover:scale-105 hover:shadow-cosmic-lg">
              <span className="relative z-10 flex items-center space-x-2">
                <FaRocket className="text-sm group-hover:animate-bounce" />
                <span>Start Project</span>
              </span>
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-cosmic-blue/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <FaCode className="text-cosmic-blue text-lg" />
              <p className="text-gray-400 font-space text-sm">
                © {currentYear} Ranjith S. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400 font-space">Built with</span>
              <div className="flex items-center space-x-2">
                <FaStar className="text-cosmic-orange animate-pulse" />
                <span className="text-cosmic-blue font-space">React</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaStar className="text-cosmic-green animate-pulse" />
                <span className="text-cosmic-blue font-space">Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaRocket className="text-cosmic-purple animate-pulse" />
                <span className="text-cosmic-blue font-space">Space Theme</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
