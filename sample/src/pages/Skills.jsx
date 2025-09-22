import { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPaintBrush, FaRocket, FaCode, FaStar } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFigma, SiGit } from "react-icons/si";

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { 
      name: "HTML5", 
      level: "Advanced", 
      percentage: 90, 
      icon: FaHtml5, 
      color: "from-orange-500 to-red-500",
      textColor: "text-orange-400",
      description: "Semantic markup, accessibility, and modern HTML5 features"
    },
    { 
      name: "CSS3", 
      level: "Advanced", 
      percentage: 90, 
      icon: FaCss3Alt, 
      color: "from-blue-500 to-cyan-500",
      textColor: "text-blue-400",
      description: "Flexbox, Grid, animations, and responsive design"
    },
    { 
      name: "JavaScript", 
      level: "Intermediate", 
      percentage: 75, 
      icon: FaJs, 
      color: "from-yellow-500 to-orange-500",
      textColor: "text-yellow-400",
      description: "ES6+, DOM manipulation, and modern JavaScript features"
    },
    { 
      name: "React", 
      level: "Intermediate", 
      percentage: 70, 
      icon: FaReact, 
      color: "from-cyan-500 to-blue-500",
      textColor: "text-cyan-400",
      description: "Components, hooks, state management, and React ecosystem"
    },
    { 
      name: "Tailwind CSS", 
      level: "Intermediate", 
      percentage: 65, 
      icon: SiTailwindcss, 
      color: "from-teal-500 to-cyan-500",
      textColor: "text-teal-400",
      description: "Utility-first CSS framework for rapid UI development"
    },
    { 
      name: "Node.js", 
      level: "Beginner", 
      percentage: 50, 
      icon: FaNodeJs, 
      color: "from-green-500 to-emerald-500",
      textColor: "text-green-400",
      description: "Server-side JavaScript and backend development"
    },
    { 
      name: "MongoDB", 
      level: "Beginner", 
      percentage: 45, 
      icon: SiMongodb, 
      color: "from-green-600 to-green-400",
      textColor: "text-green-300",
      description: "NoSQL database and document-based data modeling"
    },
    { 
      name: "Java", 
      level: "Intermediate", 
      percentage: 75, 
      icon: FaJava, 
      color: "from-red-500 to-orange-500",
      textColor: "text-red-400",
      description: "Object-oriented programming and Java ecosystem"
    },
    { 
      name: "UI/UX Design", 
      level: "Advanced", 
      percentage: 80, 
      icon: FaPaintBrush, 
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-400",
      description: "User interface design and user experience principles"
    },
    { 
      name: "Figma", 
      level: "Intermediate", 
      percentage: 70, 
      icon: SiFigma, 
      color: "from-purple-600 to-pink-600",
      textColor: "text-purple-300",
      description: "Design prototyping and collaborative design tools"
    },
    { 
      name: "Git", 
      level: "Intermediate", 
      percentage: 65, 
      icon: SiGit, 
      color: "from-gray-600 to-orange-500",
      textColor: "text-gray-300",
      description: "Version control and collaborative development"
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSkills(skills.map((_, index) => index));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative py-20 px-4 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Code Elements */}
        {Array.from({ length: 50 }).map((_, i) => (
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
            <FaCode className="text-cosmic-blue text-2xl" />
          </div>
        ))}
        
        {/* Orbital Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-cosmic-blue/10 rounded-full animate-spin" style={{animationDuration: '30s'}} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cosmic-purple/10 rounded-full animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-cosmic-pink/10 rounded-full animate-spin" style={{animationDuration: '10s'}} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-orbitron font-black mb-6">
            <span className="cosmic-text animate-cosmic-shift">Skills</span>
            <span className="text-white ml-4">Arsenal</span>
          </h2>
          <p className="text-xl text-gray-300 font-space max-w-3xl mx-auto">
            Navigating the digital cosmos with precision tools and cosmic expertise
          </p>
          
          {/* Skills Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="space-card p-6 text-center group">
              <div className="text-3xl font-orbitron font-bold text-cosmic-blue mb-2">11+</div>
              <div className="text-sm text-gray-400 font-space">Technologies</div>
            </div>
            <div className="space-card p-6 text-center group">
              <div className="text-3xl font-orbitron font-bold text-cosmic-green mb-2">3+</div>
              <div className="text-sm text-gray-400 font-space">Years Learning</div>
            </div>
            <div className="space-card p-6 text-center group">
              <div className="text-3xl font-orbitron font-bold text-cosmic-orange mb-2">15+</div>
              <div className="text-sm text-gray-400 font-space">Projects Built</div>
            </div>
            <div className="space-card p-6 text-center group">
              <div className="text-3xl font-orbitron font-bold text-cosmic-pink mb-2">∞</div>
              <div className="text-sm text-gray-400 font-space">Passion Level</div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isVisible = visibleSkills.includes(index);
            const isHovered = hoveredSkill === index;
            
            return (
              <div
                key={index}
                className={`space-card p-6 group cursor-pointer transition-all duration-500 ${
                  isHovered ? 'border-cosmic-blue/50 shadow-cosmic-lg scale-105' : ''
                } ${isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Skill Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="relative">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white text-2xl" />
                    </div>
                    {isHovered && (
                      <div className="absolute inset-0 p-3 rounded-full bg-gradient-to-r from-cosmic-blue to-cosmic-purple animate-ping opacity-20" />
                    )}
                  </div>
                  
                  {/* Skill Level Badge */}
                  <div className={`px-3 py-1 rounded-full text-xs font-space font-semibold ${
                    skill.percentage >= 80 ? 'bg-cosmic-green/20 text-cosmic-green border border-cosmic-green/30' :
                    skill.percentage >= 60 ? 'bg-cosmic-blue/20 text-cosmic-blue border border-cosmic-blue/30' :
                    'bg-cosmic-orange/20 text-cosmic-orange border border-cosmic-orange/30'
                  }`}>
                    {skill.level}
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className={`text-xl font-orbitron font-bold mb-2 ${skill.textColor} group-hover:text-white transition-colors duration-300`}>
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400 font-space">Proficiency</span>
                    <span className={`text-sm font-space font-semibold ${skill.textColor}`}>
                      {skill.percentage}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-space-accent/50 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ 
                        width: isVisible ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${index * 0.1 + 0.5}s`
                      }}
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Skill Description */}
                <p className="text-sm text-gray-400 font-space leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cosmic-blue/5 to-cosmic-purple/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="space-card p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <FaRocket className="text-cosmic-blue text-2xl" />
              <h3 className="text-2xl font-orbitron font-bold text-white">Continuous Learning Journey</h3>
            </div>
            
            <p className="text-lg text-gray-300 font-space leading-relaxed mb-6">
              I'm constantly exploring new technologies and expanding my skill set. Each project is an opportunity 
              to learn something new and push the boundaries of what's possible in the digital universe.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-space-accent/30 rounded-full border border-cosmic-blue/20">
                <FaStar className="text-cosmic-orange text-sm" />
                <span className="text-sm text-gray-300 font-space">Always Learning</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-space-accent/30 rounded-full border border-cosmic-green/20">
                <FaCode className="text-cosmic-green text-sm" />
                <span className="text-sm text-gray-300 font-space">Problem Solver</span>
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

export default Skills;
