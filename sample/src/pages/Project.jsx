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
    <div className="min-h-screen w-[100%] flex flex-col items-center justify-center bg-gray-300 p-6  md:p-14 lg:p-14">
      <h1 className="text-4xl font-bold mb-10 -mt-2">My Projects</h1>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {categories.map((category) => (
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
        ))}
      </div>
      <div className="grid gap-16 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card relative w-full sm:w-64 h-80 bg-gray-50 shadow-lg p-6 rounded-lg overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-blue-300 group animate-slide-in-left"
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
                href={project.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-gray-800 hover:text-blue-600"
              >
                <FaLink />
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
                className="flex items-center mt-2 text-white bg-pink-600 hover:bg-pink-800 rounded-md px-2 py-1"
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
                className="flex items-center mt-2 text-white bg-blue-600 hover:bg-blue-800 rounded-md px-2 py-1"
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
                  className="flex items-center mt-2 text-white bg-blue-600 hover:bg-blue-800 rounded-md px-2 py-1"
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
