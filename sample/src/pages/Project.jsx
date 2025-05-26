import { useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa'; 
import { SiFigma, SiCanva } from 'react-icons/si';
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


const projects = [
  
  {
    id: 1,
    title: 'Portfolio',
    description: 'My First Portfolio in JS',
    githubLink: 'https://github.com/ranjiths-17904/Portfolio',
    image: WebPort,
    category: 'Web Dev',
    link: 'https://ranjiths-17904.github.io/Portfolio/', 
  },
  {
    id: 2,
    title: 'Avengers',
    description: 'Animation Video of Avengers',
    githubLink: 'https://www.figma.com/design/TA1H9REphA0bCigzJ3pJEO/AVENGERS?node-id=0-1&t=6Iou5KYgMy9VrtpP-1',
    image: FigmaImage,
    category: 'UI/UX',
    link: FigVid, 
  },
  {
    id: 3,
    title: 'World Tour',
    description: 'Let see the wonders of world ',
    githubLink: 'https://github.com/yourusername/project3',
    image: Canva1,
    category: 'Vouchers',
    link: CanVid, 
  },
  {
    id: 4,
    title: 'Restaurant Menu',
    description: 'Add food and buy',
    githubLink: 'https://www.figma.com/design/kodzYIdDYNN0nBJewExyzM/CodSoft?node-id=227-15&node-type=canvas&t=IymCCsreVo6gZey3-0',
    image: Menu,
    category: 'UI/UX',
    link: FigVid2, 
  },
  {
    id: 5,
    title: 'Fitness Club',
    description: 'Fitness and Health Blog',
    githubLink: 'https://github.com/DevaHarsar/HEALTH_BLOG',
    image: WebImage,
    category: 'Web Dev',
    link: 'https://health-blog-beta.vercel.app/',
  },
  {
    id: 6,
    title: 'Portfolio',
    description: 'My Personal Portfolio',
    githubLink: 'https://www.figma.com/design/sFn3sZlqP4URptxrZFcyya/Shadow-Fox-Intern?node-id=196-107&node-type=frame&t=yly23QO0zX6NzMtq-0',
    image: FigmaImage1,
    category: 'UI/UX',
    link: 'https://www.figma.com/proto/sFn3sZlqP4URptxrZFcyya/Shadow-Fox-Intern?node-id=194-103&node-type=frame&t=yly23QO0zX6NzMtq-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
  },
  {
    id: 7,
    title: 'Score Card',
    description: 'Jio cinema Home Clone',
    githubLink: 'https://www.figma.com/design/yWkcLzJsGsW5KvJr6LS1Jb/Teddy?node-id=14-7&t=0o7EcYxNz20MHfcK-1',
    image: ScoreCard,
    category: 'UI/UX',
    link: FigPdf, 
  },
  {
    id: 8,
    title: 'Magazine',
    description: 'CSE-Dept 3 Months Journey',
    image: Magnazine,
    category: 'Others',
    link: CanvaPdf, 
  },
  {
    id: 9,
    title: 'MediMerge Market',
    description: 'Online Pharmacy Store',
    githubLink: 'ranjiths-17904/MediMerge-Market',
    image: MediMarket,
    category: 'Web Dev',
    link: 'https://yourlink.com/project1',
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
    <section className="min-h-screen w-full bg-gradient-to-tr from-gray-300 via-gray-100 to-gray-300 p-8 md:p-14 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold mb-12 text-gray-900 drop-shadow-md tracking-tight">
        My Projects
      </h1>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-5 mb-16">
        {categories.map((category) => {
          return (
           <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="relative flex items-center justify-center w-24 h-8 px-4 py-4 bg-gradient-to-r from-sky-700 to-fuchsia-700 text-white rounded-xl text-xs font-bold cursor-pointer overflow-hidden group transition-all duration-300"
          >
            <span className="z-20 transition-opacity duration-300 group-hover:opacity-0">{category}</span>
            <span className="absolute inset-0 flex items-center justify-center bg-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <span className="text-white font-bold text-sm">Explore</span>
            </span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-pink-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-pink-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-pink-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
          </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="relative flex flex-col bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 cursor-pointer overflow-hidden group"
          >
            {/* Image Section */}
            <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-gray-900 mb-2 tracking-wide truncate" title={project.title}>
                {project.title}
              </h2>

              <p className="text-gray-700 flex-grow">{project.description}</p>

              {/* Links and Icons */}
              <div className="mt-4 flex items-center justify-between space-x-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-pink-600 hover:text-pink-800 font-semibold text-sm transition-colors"
                  aria-label={`Visit ${project.title} project link`}
                >
                  <FaLink className="mr-2" size={18} />
                  Visit
                </a>

                {/* Conditional GitHub or Figma/Canva Buttons */}
                {project.category === 'Web Dev' && project.githubLink && (
                  <a
                    href={project.githubLink.startsWith('http') ? project.githubLink : `https://${project.githubLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-900 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-800 shadow-md transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <FaGithub className="mr-1" />
                    GitHub
                  </a>
                )}

                {project.category === 'UI/UX' && (
                  <a
                    href="https://www.figma.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-pink-600 text-white px-3 py-1 rounded-md text-sm hover:bg-pink-700 shadow-md transition-colors"
                    aria-label={`Figma design for ${project.title}`}
                  >
                    <SiFigma className="mr-1" />
                    Figma
                  </a>
                )}

                {(project.category === 'Others' || project.category === 'Vouchers') && (
                  <a
                    href="https://www.canva.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 shadow-md transition-colors"
                    aria-label={`Canva design for ${project.title}`}
                  >
                    <SiCanva className="mr-1" />
                    Canva
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;