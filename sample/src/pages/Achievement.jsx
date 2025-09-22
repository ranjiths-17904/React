import { useState, useEffect } from 'react';
import { FaTrophy, FaRocket, FaStar, FaCode, FaGraduationCap, FaAward, FaMedal, FaCrown, FaTimes } from 'react-icons/fa';

// Import Certificate Images
import cert1 from '../assets/img/Certificates/Guvi - ui  ux.jpeg';
import cert2 from '../assets/img/Certificates/MongoDB - Unstop.jpg';
import cert3 from '../assets/img/Certificates/Java Course Completion in netiveva.jpg';
import cert5 from '../assets/img/Certificates/Udamey Git Certificate.jpg';
import cert6 from '../assets/img/Certificates/sql_intermediate certificate - Hr.jpg';

// Certificate data
const certificates = [
  {
    title: 'UI/UX Design Mastery',
    source: 'Guvi',
    image: cert1,
    description: 'Completed comprehensive Figma UI/UX course from Beginner to Expert level with hands-on projects.',
    category: 'Design',
    icon: FaStar,
    color: 'from-purple-500 to-pink-500',
    featured: true
  },
  {
    title: 'MongoDB Certification',
    source: 'Unstop',
    image: cert2,
    description: 'Mastered NoSQL database concepts and MongoDB operations for modern web applications.',
    category: 'Database',
    icon: FaCode,
    color: 'from-green-500 to-emerald-500',
    featured: true
  },
  {
    title: 'Java Programming',
    source: 'Nativeva',
    image: cert3,
    description: 'Completed comprehensive Java Programming course covering OOP concepts and advanced features.',
    category: 'Programming',
    icon: FaCode,
    color: 'from-orange-500 to-red-500',
    featured: false
  },
  {
    title: 'Git Version Control',
    source: 'Udamey',
    image: cert5,
    description: 'Completed foundational training in Git version control system and collaborative development.',
    category: 'Tools',
    icon: FaCode,
    color: 'from-gray-600 to-orange-500',
    featured: false
  },
  {
    title: 'SQL Intermediate',
    source: 'HackerRank',
    image: cert6,
    description: 'Completed SQL Intermediate course and certification test on HackerRank platform.',
    category: 'Database',
    icon: FaCode,
    color: 'from-blue-500 to-cyan-500',
    featured: true
  }
];

// Highlight data
const highlights = [
  {
    text: '👨‍💻 Solved 500+ Problems & Earned Badge (CodeChef)',
    icon: FaCode,
    color: 'from-pink-500 to-red-500',
    category: 'Coding'
  },
  {
    text: '📝 LeetCode: 350+ problems solved',
    icon: FaCode,
    color: 'from-green-500 to-teal-500',
    category: 'Algorithm'
  },
  {
    text: '☕ Organized Inter & Intra-College Tech and Non-Tech Events',
    icon: FaGraduationCap,
    color: 'from-blue-500 to-purple-500',
    category: 'Leadership'
  },
  {
    text: '📚 Published 2 Research Journals (IJIRT , IJRASET)',
    icon: FaAward,
    color: 'from-orange-500 to-pink-500',
    category: 'Research'
  },
  {
    text: '🏅 1st Place - Code Relay @ INCEPTRON',
    icon: FaTrophy,
    color: 'from-yellow-500 to-green-500',
    category: 'Competition'
  },
  {
    text: '🚀 15+ Projects Completed',
    icon: FaRocket,
    color: 'from-purple-500 to-blue-500',
    category: 'Projects'
  }
];

const Achievements = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [visibleAchievements, setVisibleAchievements] = useState([]);
  const [hoveredAchievement, setHoveredAchievement] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleAchievements(highlights.map((_, index) => index));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const featuredCerts = certificates.filter(cert => cert.featured);

  return (
    <div className="min-h-screen relative py-20 px-4 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Trophy Elements */}
        {Array.from({ length: 40 }).map((_, i) => (
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
            <FaTrophy className="text-cosmic-orange text-3xl" />
          </div>
        ))}
        
        {/* Achievement Stars */}
        {Array.from({ length: 60 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-orbitron font-black mb-6">
            <span className="cosmic-text animate-cosmic-shift">Achievement</span>
            <span className="text-white ml-4">Constellation</span>
          </h2>
          <p className="text-xl text-gray-300 font-space max-w-3xl mx-auto mb-8">
            Celebrating milestones and certifications earned in the journey through the digital cosmos
          </p>
          
          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="space-card p-6 text-center group">
              <div className="text-3xl font-orbitron font-bold text-cosmic-blue mb-2">{certificates.length}</div>
              <div className="text-sm text-gray-400 font-space">Certifications</div>
            </div>
            <div className="space-card p-6 text-center group">
              <div className="text-3xl font-orbitron font-bold text-cosmic-green mb-2">{highlights.length}</div>
              <div className="text-sm text-gray-400 font-space">Achievements</div>
            </div>
            <div className="space-card p-6 text-center group">
              <div className="text-3xl font-orbitron font-bold text-cosmic-orange mb-2">850+</div>
              <div className="text-sm text-gray-400 font-space">Problems Solved</div>
            </div>
            <div className="space-card p-6 text-center group">
              <div className="text-3xl font-orbitron font-bold text-cosmic-pink mb-2">∞</div>
              <div className="text-sm text-gray-400 font-space">Learning Spirit</div>
            </div>
          </div>
        </div>

        {/* Featured Certificates */}
        <div className="mb-16">
          <h3 className="text-2xl font-orbitron font-bold text-white mb-8 text-center">
            <span className="cosmic-text">Featured</span> Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCerts.map((cert, index) => {
              const Icon = cert.icon;
              const isVisible = visibleAchievements.includes(index);
              const isHovered = hoveredAchievement === index;
              
              return (
                <div
                  key={cert.title}
                  className={`space-card p-6 group cursor-pointer transition-all duration-500 ${
                    isHovered ? 'border-cosmic-blue/50 shadow-cosmic-lg scale-105' : ''
                  } ${isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-8'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onMouseEnter={() => setHoveredAchievement(index)}
                  onMouseLeave={() => setHoveredAchievement(null)}
                  onClick={() => setSelectedCert(cert)}
                >
                  {/* Certificate Image */}
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <div className={`px-3 py-1 rounded-full text-xs font-space font-semibold bg-gradient-to-r ${cert.color} text-white`}>
                        {cert.category}
                      </div>
                    </div>
                    
                    {/* Featured Badge */}
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center space-x-1 px-2 py-1 rounded-full bg-gradient-to-r from-cosmic-orange to-cosmic-pink text-white text-xs font-space font-semibold">
                        <FaStar className="text-xs" />
                        <span>Featured</span>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Content */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${cert.color}`}>
                        <Icon className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="text-lg font-orbitron font-bold text-white group-hover:text-cosmic-blue transition-colors duration-300">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-cosmic-blue font-space">{cert.source}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 font-space text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Certificates */}
        <div className="mb-16">
          <h3 className="text-2xl font-orbitron font-bold text-white mb-8 text-center">
            <span className="cosmic-text">All</span> Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificates.map((cert, index) => {
              const Icon = cert.icon;
              const isVisible = visibleAchievements.includes(index);
              
              return (
                <div
                  key={cert.title}
                  className={`space-card p-4 group cursor-pointer transition-all duration-500 ${
                    isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} flex-shrink-0`}>
                      <Icon className="text-white text-xl" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-orbitron font-bold text-white mb-1 group-hover:text-cosmic-blue transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-cosmic-blue font-space mb-2">{cert.source}</p>
                      <p className="text-gray-400 font-space text-xs leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-orbitron font-bold text-white mb-8 text-center">
            <span className="cosmic-text">Notable</span> Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              const isVisible = visibleAchievements.includes(index);
              
              return (
                <div
                  key={highlight.text}
                  className={`space-card p-6 group transition-all duration-500 ${
                    isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${highlight.color} flex-shrink-0`}>
                      <Icon className="text-white text-xl" />
                    </div>
                    <div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-space font-semibold bg-gradient-to-r ${highlight.color} text-white mb-2`}>
                        {highlight.category}
                      </div>
                      <p className="text-white font-space text-sm leading-relaxed">
                        {highlight.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="space-card p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <FaCrown className="text-cosmic-orange text-2xl" />
              <h3 className="text-2xl font-orbitron font-bold text-white">Always Learning, Always Growing</h3>
            </div>
            
            <p className="text-lg text-gray-300 font-space leading-relaxed mb-6">
              Every achievement is a stepping stone to greater heights. I'm committed to continuous learning 
              and pushing the boundaries of what's possible in the digital universe.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-space-accent/30 rounded-full border border-cosmic-blue/20">
                <FaStar className="text-cosmic-orange text-sm" />
                <span className="text-sm text-gray-300 font-space">Continuous Learning</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-space-accent/30 rounded-full border border-cosmic-green/20">
                <FaTrophy className="text-cosmic-green text-sm" />
                <span className="text-sm text-gray-300 font-space">Excellence Driven</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-space-accent/30 rounded-full border border-cosmic-purple/20">
                <FaRocket className="text-cosmic-purple text-sm" />
                <span className="text-sm text-gray-300 font-space">Innovation Focused</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4">
          <div className="space-card p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            <button
              className="absolute top-4 right-4 p-2 bg-space-accent/50 hover:bg-space-accent rounded-lg transition-colors duration-300"
              onClick={() => setSelectedCert(null)}
            >
              <FaTimes className="text-white text-lg" />
            </button>
            
            <div className="text-center mb-6">
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${selectedCert.color} text-white mb-4`}>
                <selectedCert.icon className="text-lg" />
                <span className="font-space font-semibold">{selectedCert.category}</span>
              </div>
              <h2 className="text-3xl font-orbitron font-bold text-white mb-2">{selectedCert.title}</h2>
              <p className="text-cosmic-blue font-space text-lg">{selectedCert.source}</p>
            </div>
            
            <div className="mb-6">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="rounded-lg w-full max-h-[400px] object-contain mx-auto shadow-cosmic-lg"
              />
            </div>
            
            <p className="text-center text-gray-300 font-space text-lg leading-relaxed">
              {selectedCert.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;  