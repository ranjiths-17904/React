import { useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa'; // Add FaLink for link icon
import { SiFigma, SiCanva } from 'react-icons/si';
import '../assets/css/style.css';
import FigmaImage from '../assets/img/Figma 3.png';
import FigmaImage1 from '../assets/img/Port.png';
import WebImage from '../assets/img/Health-Blog.png';
import WebPort from '../assets/img/Old Web Portfolio.png'

const projects = [
  {
    id: 1,
    title: 'MediMerge Market',
    description: 'Online Pharmacy Store',
    githubLink: 'https://github.com/yourusername/project1',
    image: 'WebImage',
    category: 'Web Dev',
  },
  {
    id: 2,
    title: 'Avengers',
    description: 'Animation Video of Avengers',
    githubLink: 'https://github.com/yourusername/project2',
    image: FigmaImage,
    category: 'UI/UX',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'This is the third project.',
    githubLink: 'https://github.com/yourusername/project3',
    image: 'https://via.placeholder.com/150',
    category: 'Vouchers',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'This is the fourth project.',
    githubLink: 'https://github.com/yourusername/project4',
    image: 'https://via.placeholder.com/150',
    category: 'Others',
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'This is the fifth project.',
    githubLink: 'https://github.com/yourusername/project5',
    image: WebImage,
    category: 'Web Dev',
  },
  {
    id: 6,
    title: 'Protfolio',
    description: 'My Personal Portfolio',
    githubLink: 'https://github.com/yourusername/project6',
    image: FigmaImage1,
    category: 'UI/UX',
  },
  {
    id: 7,
    title: 'Protfolio',
    description: 'My Personal Portfolio',
    githubLink: 'https://github.com/yourusername/project6',
    image: FigmaImage1,
    category: 'UI/UX',
  },
  {
    id: 8,
    title: 'Project Four',
    description: 'This is the fourth project.',
    githubLink: 'https://github.com/yourusername/project4',
    image: 'https://via.placeholder.com/150',
    category: 'Others',
  },
  {
    id: 9,
    title: 'Portfolio',
    description: 'My First Portfolio in JS',
    githubLink: 'https://github.com/yourusername/project5',
    image: WebPort,
    category: 'Web Dev',
    
  },
  {
    id: 10,
    title: 'Project Five',
    description: 'This is the fifth project.',
    githubLink: 'https://github.com/yourusername/project5',
    image: 'https://via.placeholder.com/150',
    category: 'Web Dev',
    
  },
 
];

const categories = ['All', 'UI/UX', 'Web Dev', 'Vouchers', 'Others'];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 sm:p-10 md:p-16 lg:p-20">
      <h1 className="text-4xl font-bold mb-10 -mt-10">My Projects</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      className="relative flex items-center justify-center w-24 h-8 px-4 py-2 bg-blue-500 text-white rounded-xl text-xs font-bold cursor-pointer overflow-hidden group transition-all duration-300 "
    >
      <span className="z-20 transition-opacity duration-300 group-hover:opacity-0">{category}</span>
      <span className="absolute inset-0 flex items-center justify-center bg-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <span className="text-white font-bold text-sm">Explore</span>
      </span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-pink-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-pink-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-pink-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
    </button>
  ))}
</div>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card relative w-full sm:w-64 h-80 bg-white shadow-lg p-6 rounded-lg overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-2xl group animate-slide-in-left"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 object-cover mb-4"
            />
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold mb-1">
                {project.title}
              </h2>
              
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-gray-800 hover:text-blue-500"
              >
                <FaLink /> {/* Link icon for placeholder links */}
              </a>
            </div>
            <p className="text-sm mb-4">{project.description}</p>

            {project.category === 'Web Dev' && (
              <a
                href={project.githubLink}
                className="flex items-center mt-2 text-white bg-black hover:bg-gray-800 rounded-md px-2 py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-1" />
                <span className="text-sm">GitHub</span>
              </a>
            )}
            {project.category === 'UI/UX' && (
              <a
                href="https://www.figma.com"
                className="flex items-center mt-2 text-white bg-pink-700 hover:bg-pink-600 rounded-md px-2 py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFigma className="mr-1" />
                <span className="text-sm">Figma</span>
              </a>
            )}
            {project.category === 'Others' && (
              <a
                href="https://www.canva.com"
                className="flex items-center mt-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md px-2 py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCanva className="mr-1" />
                <span className="text-sm">Canva</span>
              </a>
            )}
            {project.category === 'Vouchers' && (
              <a
                href="https://www.canva.com"
                className="flex items-center mt-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md px-2 py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCanva className="mr-1" />
                <span className="text-sm">Canva</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;