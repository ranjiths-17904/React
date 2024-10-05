import { useState } from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import { SiFigma, SiCanva } from 'react-icons/si'; // Import Figma and Canva icons
import '../assets/css/style.css';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'This is the first project.',
    githubLink: 'https://github.com/yourusername/project1',
    image: 'https://via.placeholder.com/150',
    category: 'Web Dev',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is the second project.',
    githubLink: 'https://github.com/yourusername/project2',
    image: 'https://via.placeholder.com/150',
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
    image: 'https://via.placeholder.com/150',
    category: 'Web Dev',
  },
  {
    id: 6,
    title: 'Project Six',
    description: 'This is the sixth project.',
    githubLink: 'https://github.com/yourusername/project6',
    image: 'https://via.placeholder.com/150',
    category: 'Others',
  },
];

const categories = ['All', 'UI/UX', 'Web Dev', 'Vouchers', 'Others'];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 sm:p-10 md:p-16 lg:p-20">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>

       {/* Category Filter Buttons */}
      <div className="flex justify-center space-x-6 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="overflow-hidden relative w-24 p-1 h-9 bg-gray-500 text-white border-none rounded-xl text-xs font-bold cursor-pointer z-10 group"
          >
            {category}
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-pink-100 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-pink-300 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-pink-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
            <span className="group-hover:opacity-95 group-hover:duration-1000 duration-200 opacity-0 absolute top-2 left-5 z-10 text-smx">Explore!!</span> {/* Reduced font size here */}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative w-64 h-80 bg-white shadow-lg p-6 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform hover:shadow-2xl group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
            <p className="text-sm mb-4">{project.description}</p>

            {/* Conditionally Render Buttons Based on Project Category */}
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
