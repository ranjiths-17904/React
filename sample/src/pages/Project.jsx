import { useState, useEffect } from 'react';
import { FaGithub, FaRocket, FaStar, FaEye, FaExternalLinkAlt } from 'react-icons/fa'; 
import { SiFigma, SiCanva, SiReact, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';
import '../assets/css/style.css';
import FigmaImage from '../assets/img/Figma 3.png';
import FigmaImage1 from '../assets/img/Port.png';
import WebImage from '../assets/img/Health-Blog.png';
import WebPort from '../assets/img/Old Web Portfolio.png';
import MediMarket from '../assets/img/Medi Market.png';
import ScoreCard from '../assets/img/Figma Scorecard.jpeg';
import Magnazine from '../assets/img/Maganize img1.jpeg';
import Menu from '../assets/img/Restaurant Menu1.jpeg';
import Canva1 from '../assets/img/2.png';
import CanVid from '../assets/video/TAJ MAHAL.mp4';
import FigVid from '../assets/video/Avengers.mp4';
import FigVid2 from '../assets/video/Restarunt Menu Vid.mp4';
import FigPdf from '../assets/pdf/ScoreCard.pdf';
import CanvaPdf from '../assets/pdf/Copy of INCEPTRON MAGANIZE - 4 (1).pdf';
import FixMyBike from '../assets/img/FixMyBike.png';
import EduTrack from '../assets/img/EduTrack.png';



const projects = [
  {
    id: 1,
    title: 'Cosmic Portfolio',
    description: 'My first journey into the digital universe - a JavaScript-powered portfolio showcasing early development skills',
    githubLink: 'https://github.com/ranjiths-17904/Portfolio',
    image: WebPort,
    category: 'Web Dev',
    link: 'https://ranjiths-17904.github.io/Portfolio/',
    technologies: [SiHtml5, SiCss3, SiJavascript],
    featured: true,
    status: 'Launched'
  },
  {
    id: 2,
    title: 'Avengers Animation',
    description: 'Cinematic animation project bringing Marvel superheroes to life through digital storytelling',
    githubLink: 'https://www.figma.com/design/TA1H9REphA0bCigzJ3pJEO/AVENGERS?node-id=0-1&t=6Iou5KYgMy9VrtpP-1',
    image: FigmaImage,
    category: 'UI/UX',
    link: FigVid,
    technologies: [SiFigma],
    featured: true,
    status: 'Completed'
  },
  {
    id: 3,
    title: 'World Wonders Explorer',
    description: 'Interactive journey through the world\'s most magnificent landmarks and natural wonders',
    githubLink: 'https://github.com/yourusername/project3',
    image: Canva1,
    category: 'Vouchers',
    link: CanVid,
    technologies: [SiCanva],
    featured: false,
    status: 'Completed'
  },
  {
    id: 4,
    title: 'Galaxy Restaurant',
    description: 'Modern dining experience with interactive menu system and seamless ordering interface',
    githubLink: 'https://www.figma.com/design/kodzYIdDYNN0nBJewExyzM/CodSoft?node-id=227-15&node-type=canvas&t=IymCCsreVo6gZey3-0',
    image: Menu,
    category: 'UI/UX',
    link: FigVid2,
    technologies: [SiFigma],
    featured: false,
    status: 'Completed'
  },
  {
    id: 5,
    title: 'Health Universe',
    description: 'Comprehensive fitness and wellness blog with interactive health tracking features',
    githubLink: 'https://github.com/DevaHarsar/HEALTH_BLOG',
    image: WebImage,
    category: 'Web Dev',
    link: 'https://health-blog-beta.vercel.app/',
    technologies: [SiReact, SiJavascript, SiHtml5],
    featured: true,
    status: 'Live'
  },
  {
    id: 6,
    title: 'Digital Identity',
    description: 'Personal portfolio showcasing design skills and creative vision in the digital space',
    githubLink: 'https://www.figma.com/design/sFn3sZlqP4URptxrZFcyya/Shadow-Fox-Intern?node-id=196-107&node-type=frame&t=yly23QO0zX6NzMtq-0',
    image: FigmaImage1,
    category: 'UI/UX',
    link: 'https://www.figma.com/proto/sFn3sZlqP4URptxrZFcyya/Shadow-Fox-Intern?node-id=194-103&node-type=frame&t=yly23QO0zX6NzMtq-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
    technologies: [SiFigma],
    featured: true,
    status: 'Completed'
  },
  {
    id: 7,
    title: 'FixMyBike',
    description: 'Revolutionary bike service booking platform connecting riders with certified mechanics',
    githubLink: 'ranjiths-17904/FixMyBike-Bike_Service',
    image: FixMyBike,
    category: 'Web Dev',
    link: 'fixmybike.netlify.app',
    technologies: [SiReact, SiJavascript, SiHtml5, SiCss3],
    featured: true,
    status: 'Live'
  },
  {
    id: 8,
    title: 'Inceptron Magazine',
    description: 'Digital magazine documenting the CSE department\'s 3-month journey of innovation',
    image: Magnazine,
    category: 'Others',
    link: CanvaPdf,
    technologies: [SiCanva],
    featured: false,
    status: 'Published'
  },
  {
    id: 9,
    title: 'MediMerge Market',
    description: 'Comprehensive online pharmacy platform revolutionizing healthcare accessibility',
    githubLink: 'ranjiths-17904/MediMerge-Market',
    image: MediMarket,
    category: 'Web Dev',
    link: 'https://yourlink.com/project1',
    technologies: [SiReact, SiJavascript, SiHtml5, SiCss3],
    featured: true,
    status: 'In Development'
  },
  {
    id: 10,
    title: 'EduTrack',
    description: 'Smart education tracking system with AI-powered analytics and progress monitoring',
    githubLink: 'ranjiths-17904/EduTrack-SmartCalculator',
    image: EduTrack,
    category: 'Web Dev',
    link: 'https://yourlink.com/project1',
    technologies: [SiReact, SiJavascript, SiHtml5, SiCss3],
    featured: true,
    status: 'In Development'
  },
  {
    id: 11,
    title: 'ScoreCard Cinema',
    description: 'Modern streaming platform UI inspired by Jio Cinema with enhanced user experience',
    githubLink: 'https://www.figma.com/design/yWkcLzJsGsW5KvJr6LS1Jb/Teddy?node-id=14-7&t=0o7EcYxNz20MHfcK-1',
    image: ScoreCard,
    category: 'UI/UX',
    link: FigPdf,
    technologies: [SiFigma],
    featured: false,
    status: 'Completed'
  },
];

const categories = ['All', 'Web Dev', 'UI/UX', 'Vouchers', 'Others'];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleProjects(projects.map((_, index) => index));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'from-green-500 to-emerald-500';
      case 'Completed': return 'from-blue-500 to-cyan-500';
      case 'In Development': return 'from-orange-500 to-yellow-500';
      case 'Published': return 'from-purple-500 to-pink-500';
      case 'Launched': return 'from-cosmic-blue to-cosmic-purple';
      default: return 'from-gray-500 to-gray-600';
    }
  };


  return (
    <div className="min-h-screen relative py-20 px-4 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Project Icons */}
        {Array.from({ length: 30 }).map((_, i) => (
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
            <FaRocket className="text-cosmic-blue text-3xl" />
          </div>
        ))}
        
        {/* Cosmic Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-16 gap-2 h-full">
            {Array.from({ length: 256 }).map((_, i) => (
              <div key={i} className="border border-cosmic-blue/10 rounded" />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-orbitron font-black mb-6">
            <span className="cosmic-text animate-cosmic-shift">Project</span>
            <span className="text-white ml-4">Galaxy</span>
          </h2>
          <p className="text-xl text-gray-300 font-space max-w-3xl mx-auto mb-8">
            Exploring the digital cosmos through innovative projects and creative solutions
          </p>
          
          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="space-card p-6 text-center group">
              <div className="text-3xl font-orbitron font-bold text-cosmic-blue mb-2">{projects.length}</div>
              <div className="text-sm text-gray-400 font-space">Total Projects</div>
            </div>
            <div className="space-card p-6 text-center group">
              <div className="text-3xl font-orbitron font-bold text-cosmic-green mb-2">{featuredProjects.length}</div>
              <div className="text-sm text-gray-400 font-space">Featured</div>
            </div>
            <div className="space-card p-6 text-center group">
              <div className="text-3xl font-orbitron font-bold text-cosmic-orange mb-2">5+</div>
              <div className="text-sm text-gray-400 font-space">Live Projects</div>
            </div>
            <div className="space-card p-6 text-center group">
              <div className="text-3xl font-orbitron font-bold text-cosmic-pink mb-2">∞</div>
              <div className="text-sm text-gray-400 font-space">Innovation</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-6 py-3 rounded-full font-space font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white shadow-cosmic-lg' 
                    : 'bg-space-accent/30 text-gray-300 hover:bg-space-accent/50 hover:text-white'
                }`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{category}</span>
                  {isActive && <FaStar className="text-sm animate-pulse" />}
                </span>
                {!isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cosmic-blue/20 to-cosmic-purple/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </button>
            );
          })}
        </div>

        {/* Featured Projects Section */}
        {selectedCategory === 'All' && (
          <div className="mb-16">
            <h3 className="text-2xl font-orbitron font-bold text-white mb-8 text-center">
              <span className="cosmic-text">Featured</span> Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 4).map((project, index) => {
                const isVisible = visibleProjects.includes(index);
                const isHovered = hoveredProject === index;
                
                return (
                  <div
                    key={project.id}
                    className={`space-card p-6 group cursor-pointer transition-all duration-500 ${
                      isHovered ? 'border-cosmic-blue/50 shadow-cosmic-lg scale-105' : ''
                    } ${isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-8'}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="relative flex-shrink-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-20 h-20 rounded-lg object-cover border border-cosmic-blue/30 group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute -top-2 -right-2">
                          <div className={`px-2 py-1 rounded-full text-xs font-space font-semibold bg-gradient-to-r ${getStatusColor(project.status)} text-white`}>
                            {project.status}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <h4 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-cosmic-blue transition-colors duration-300">
                          {project.title}
                        </h4>
                        <p className="text-gray-400 font-space text-sm leading-relaxed mb-3">
                          {project.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2">
                            {project.technologies.slice(0, 3).map((TechIcon, techIndex) => (
                              <div key={techIndex} className="p-2 bg-space-accent/30 rounded-lg">
                                <TechIcon className="text-cosmic-blue text-lg" />
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex space-x-2">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-cosmic-blue/20 hover:bg-cosmic-blue/30 rounded-lg transition-colors duration-300 group"
                            >
                              <FaExternalLinkAlt className="text-cosmic-blue text-sm group-hover:scale-110 transition-transform duration-300" />
                            </a>
                            {project.githubLink && (
                              <a
                                href={project.githubLink.startsWith('http') ? project.githubLink : `https://github.com/${project.githubLink}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-space-accent/30 hover:bg-space-accent/50 rounded-lg transition-colors duration-300 group"
                              >
                                <FaGithub className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isVisible = visibleProjects.includes(index);
            const isHovered = hoveredProject === index;
            
            return (
              <div
                key={project.id}
                className={`space-card p-6 group cursor-pointer transition-all duration-500 ${
                  isHovered ? 'border-cosmic-blue/50 shadow-cosmic-lg scale-105' : ''
                } ${isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <div className={`px-3 py-1 rounded-full text-xs font-space font-semibold bg-gradient-to-r ${getStatusColor(project.status)} text-white`}>
                      {project.status}
                    </div>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center space-x-1 px-2 py-1 rounded-full bg-gradient-to-r from-cosmic-orange to-cosmic-pink text-white text-xs font-space font-semibold">
                        <FaStar className="text-xs" />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-cosmic-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 font-space text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((TechIcon, techIndex) => (
                      <div key={techIndex} className="p-2 bg-space-accent/30 rounded-lg group-hover:bg-space-accent/50 transition-colors duration-300">
                        <TechIcon className="text-cosmic-blue text-lg" />
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-space-accent/20">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cosmic-purple to-cosmic-blue rounded-lg text-white font-space font-semibold transition-all duration-300 hover:scale-105 hover:shadow-cosmic-lg"
                    >
                      <FaEye className="text-sm group-hover:animate-bounce" />
                      <span>View Project</span>
                    </a>
                    
                    {project.githubLink && (
                      <a
                        href={project.githubLink.startsWith('http') ? project.githubLink : `https://github.com/${project.githubLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-space-accent/30 hover:bg-space-accent/50 rounded-lg transition-colors duration-300 group"
                      >
                        <FaGithub className="text-gray-400 text-lg group-hover:text-white transition-colors duration-300" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="space-card p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <FaRocket className="text-cosmic-blue text-2xl" />
              <h3 className="text-2xl font-orbitron font-bold text-white">Ready to Launch Your Project?</h3>
            </div>
            
            <p className="text-lg text-gray-300 font-space leading-relaxed mb-6">
              Let's collaborate and bring your digital vision to life. I'm always excited to work on new and innovative projects.
            </p>
            
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cosmic-purple to-cosmic-blue rounded-full text-white font-space font-semibold transition-all duration-300 hover:scale-105 hover:shadow-cosmic-lg">
              <span className="relative z-10 flex items-center space-x-2">
                <FaRocket className="text-lg group-hover:animate-bounce" />
                <span>Start a Project</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;