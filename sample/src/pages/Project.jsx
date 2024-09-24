import { useState } from 'react';
import '../assets/css/Pro.css';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'This is the first project.',
    githubLink: 'https://github.com/yourusername/project1',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is the second project.',
    githubLink: 'https://github.com/yourusername/project2',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'This is the third project.',
    githubLink: 'https://github.com/yourusername/project3',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'This is the fourth project.',
    githubLink: 'https://github.com/yourusername/project4',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'This is the fifth project.',
    githubLink: 'https://github.com/yourusername/project5',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    title: 'Project Six',
    description: 'This is the sixth project.',
    githubLink: 'https://github.com/yourusername/project6',
    image: 'https://via.placeholder.com/150',
  },
];

const Project = () => {
  const [likeCounts, setLikeCounts] = useState(
    projects.reduce((acc, project) => ({ ...acc, [project.id]: 0 }), {})
  );

  // Function to increment like count
  const handleLike = (projectId) => {
    setLikeCounts((prevLikes) => ({
      ...prevLikes,
      [projectId]: prevLikes[projectId] + 1,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-64 h-96 bg-white shadow-lg p-6 rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl group"
          >
            {/* Image with subtle scaling on hover */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 object-cover mb-4 transition-transform transform group-hover:scale-110 duration-300"
            />

            {/* Project Title */}
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

            {/* Description overlay */}
            <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <p className="mb-4 px-4">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-violet-500 text-white px-4 py-2 rounded-lg hover:bg-violet-600 transition-colors duration-300"
              >
                View on GitHub
              </a>
            </div>

            {/* Bottom Right Icons - GitHub and Like */}
            <div className="absolute bottom-4 right-4 flex space-x-4">
              {/* GitHub Icon */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800 transition-colors duration-300"
              >
                <i className="fab fa-github fa-2x"></i> {/* GitHub Font Awesome icon */}
              </a>

              {/* Like Icon */}
              <button
                onClick={() => handleLike(project.id)}
                className="text-red-500 hover:text-red-700 transition-transform transform hover:scale-110 duration-300"
              >
                <i className="fas fa-heart fa-2x"></i> {/* Heart Font Awesome icon */}
                <span className="ml-1 text-lg font-semibold">{likeCounts[project.id]}</span>
              </button>
              <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-800 transition-colors duration-300"
        >
  <svg height="32" width="32" viewBox="0 0 16 16" version="1.1" aria-hidden="true" fill="currentColor">
    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82A7.68 7.68 0 0 1 8 4.86c.68.01 1.37.09 2.01.26 1.52-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
</a>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
