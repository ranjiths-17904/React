import { useState, useEffect } from 'react';
import { FaSchool, FaUserTie, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGraduationCap, FaLaptopCode, FaRocket, FaDownload, FaStar, FaCode } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiFigma } from 'react-icons/si';
import '../assets/css/About.css';
import aniprofile from '../assets/img/profile photo.jpg';
import pdf from '../assets/pdf/RESUME .pdf';

const About = () => {
  const [hoverSection, setHoverSection] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 200);
  }, []);

  const techSkills = [
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500', delay: 'delay-1' },
    { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-500', delay: 'delay-2' },
    { icon: FaHtml5, name: 'HTML5', color: 'text-red-500', delay: 'delay-3' },
    { icon: FaReact, name: 'React', color: 'text-blue-400', delay: 'delay-4' },
    { icon: FaJsSquare, name: 'JavaScript', color: 'text-yellow-500', delay: 'delay-5' },
    { icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-500', delay: 'delay-6' },
    { icon: SiFigma, name: 'Figma', color: 'text-purple-500', delay: 'delay-7' },
  ];

  return (
    <div className="min-h-screen relative py-16 lg:py-20 px-4 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Tech Icons */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute w-8 h-8 opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <FaCode className="w-full h-full text-cosmic-blue" />
          </div>
        ))}
        
        {/* Cosmic Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-cosmic-blue/20 rounded" />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-6xl font-orbitron font-black mb-4 lg:mb-6">
            <span className="cosmic-text animate-cosmic-shift">About</span>
            <span className="text-white ml-2 lg:ml-4">The Explorer</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 font-space max-w-3xl mx-auto">
            Journey through the digital cosmos, discovering the story behind the code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Profile & Skills Section */}
          <div className="lg:col-span-1 flex flex-col items-center">
            {/* Profile Card */}
            <div className="space-card p-6 lg:p-8 w-full max-w-sm text-center group">
              {/* Status Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-cosmic-green to-neon-cyan px-4 py-1 mt-10 ml-8 rounded-full text-xs font-space font-semibold text-white animate-pulse">
                  🚀 Active Explorer
                </div>
              </div>

              {/* Profile Image */}
              <div className="relative mb-10 mt-10">
                <div className="absolute inset-0 rounded-full border-4 border-cosmic-blue/30 animate-ping"></div>
                <div className="relative">
                  <img
                    src={aniprofile}
                    alt="R-Forge - Space Developer"
                    className="w-56 h-32 rounded-full ml-12 object-cover border-4 border-cosmic-blue/50 shadow-cosmic-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cosmic-green rounded-full flex items-center justify-center">
                    <FaStar className="text-white text-sm" />
                  </div>
                </div>
              </div>

              {/* Tech Skills Orbit */}
              <div className="mb-6">
                <h3 className="text-lg font-space font-semibold text-white mb-4">Tech Arsenal</h3>
                <div className="grid grid-cols-3 gap-3 mb-2">
                  {techSkills.slice(0, 6).map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div 
                        key={index}
                        className={`group relative p-3 rounded-full bg-space-accent/50 border border-cosmic-blue/20 hover:border-cosmic-blue/50 transition-all duration-300 hover:scale-110 hover:shadow-cosmic ${skill.delay} flex flex-col items-center`}
                      >
                        <Icon className={`text-xl ${skill.color} group-hover:animate-bounce mb-1`} />
                        <span className="text-xs text-gray-300 font-space">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
                {techSkills.length > 6 && (
                  <div className="flex justify-center gap-3">
                    {techSkills.slice(6).map((skill, index) => {
                      const Icon = skill.icon;
                      return (
                        <div 
                          key={index + 6}
                          className={`group relative p-3 rounded-full bg-space-accent/50 border border-cosmic-blue/20 hover:border-cosmic-blue/50 transition-all duration-300 hover:scale-110 hover:shadow-cosmic ${skill.delay} flex flex-col items-center`}
                        >
                          <Icon className={`text-xl ${skill.color} group-hover:animate-bounce mb-1`} />
                          <span className="text-xs text-gray-300 font-space">{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Bottom Tag */}
              <div className="text-sm text-cosmic-blue font-space font-medium mb-6">
                🌟 Tech Explorer | 🚀 Lifelong Learner
              </div>

              {/* Resume Download */}
              <a
                href={pdf}
                download="R-Forge_Resume.pdf"
                className="group relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cosmic-purple to-cosmic-blue rounded-full text-white font-space font-semibold transition-all duration-300 hover:scale-105 hover:shadow-cosmic-lg overflow-hidden"
              >
                <FaDownload className="text-lg group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cosmic-blue to-cosmic-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>

          {/* Main Info Section */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* About Me Card */}
            <div 
              className={`space-card p-6 lg:p-8 transition-all duration-500 cursor-pointer group ${
                hoverSection === 'about' ? 'border-cosmic-blue/50 shadow-cosmic-lg' : ''
              }`}
              onMouseEnter={() => setHoverSection('about')}
              onMouseLeave={() => setHoverSection(null)}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-cosmic-purple to-cosmic-blue rounded-lg">
                  <FaRocket className="text-white text-xl" />
                </div>
                <h2 className="text-3xl font-orbitron font-bold text-white">About Me</h2>
              </div>
              
              <p className="text-lg leading-relaxed text-gray-300 font-space">
                Hello! I'm <span className="cosmic-text font-semibold">Ranjith</span>, a passionate Computer Science Engineering student who thrives on solving real-world problems with creative digital solutions.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-300 font-space mt-4">
                My strengths lie in building responsive web applications, refining user interfaces, and developing logical back-end structures. I'm constantly evolving by working on projects, taking internships, and enhancing my design thinking using tools like Figma.
              </p>

              {/* Highlight Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-space-accent/30 rounded-lg border border-cosmic-blue/20">
                  <div className="text-2xl font-orbitron font-bold text-cosmic-blue">2+</div>
                  <div className="text-sm text-gray-400 font-space">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-space-accent/30 rounded-lg border border-cosmic-green/20">
                  <div className="text-2xl font-orbitron font-bold text-cosmic-green">15+</div>
                  <div className="text-sm text-gray-400 font-space">Projects</div>
                </div>
                <div className="text-center p-4 bg-space-accent/30 rounded-lg border border-cosmic-orange/20">
                  <div className="text-2xl font-orbitron font-bold text-cosmic-orange">8.5</div>
                  <div className="text-sm text-gray-400 font-space">CGPA</div>
                </div>
              </div>
            </div>

            {/* Education & Experience Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Education */}
              <div
                className={`space-card p-5 lg:p-6 transition-all duration-500 cursor-pointer group ${
                  hoverSection === 'education' ? 'border-cosmic-blue/50 shadow-cosmic-lg' : ''
                }`}
                onMouseEnter={() => setHoverSection('education')}
                onMouseLeave={() => setHoverSection(null)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-cosmic-blue to-neon-cyan rounded-lg">
                    <FaGraduationCap className="text-white text-lg" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-white">🎓 Education</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-space-accent/20 rounded-lg border border-cosmic-blue/10">
                    <FaSchool className="text-cosmic-blue text-lg mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-space font-semibold text-white">High School - M.N.C School</div>
                      <div className="text-sm text-gray-400">10th Grade: <span className="text-cosmic-green font-medium">91%</span></div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-space-accent/20 rounded-lg border border-cosmic-blue/10">
                    <FaSchool className="text-cosmic-blue text-lg mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-space font-semibold text-white">Higher Secondary - M.N.C School</div>
                      <div className="text-sm text-gray-400">12th Grade: <span className="text-cosmic-green font-medium">87%</span></div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-space-accent/20 rounded-lg border border-cosmic-purple/20">
                    <FaGraduationCap className="text-cosmic-purple text-lg mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-space font-semibold text-white">B.E. Computer Science - SIET College</div>
                      <div className="text-sm text-gray-400">Current CGPA: <span className="text-cosmic-green font-medium">8.5</span></div>
                      <div className="text-xs text-gray-500 mt-1">Actively involved in inter-college fests, software events, and technical clubs.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Internships */}
              <div
                className={`space-card p-5 lg:p-6 transition-all duration-500 cursor-pointer group ${
                  hoverSection === 'internship' ? 'border-cosmic-blue/50 shadow-cosmic-lg' : ''
                }`}
                onMouseEnter={() => setHoverSection('internship')}
                onMouseLeave={() => setHoverSection(null)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-cosmic-pink to-cosmic-purple rounded-lg">
                    <FaUserTie className="text-white text-lg" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-white">💼 Experience</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-space-accent/20 rounded-lg border border-cosmic-pink/10">
                    <FaUserTie className="text-cosmic-pink text-lg mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-space font-semibold text-white">UI/UX Intern at Shadow Fox</div>
                      <div className="text-sm text-gray-400">Remote • Design Systems</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-space-accent/20 rounded-lg border border-cosmic-pink/10">
                    <FaUserTie className="text-cosmic-pink text-lg mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-space font-semibold text-white">UI/UX Intern at CodSoft</div>
                      <div className="text-sm text-gray-400">Live Projects • Real-world Experience</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-space-accent/20 rounded-lg border border-cosmic-green/20">
                    <FaLaptopCode className="text-cosmic-green text-lg mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-space font-semibold text-white">Web Developer Trainee</div>
                      <div className="text-sm text-gray-400">Self Projects & College Hackathons</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
