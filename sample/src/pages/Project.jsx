import { useState } from 'react';
import '../assets/css/Pro.css'; // Ensure that you have styles for the card component

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
                <i className="fab fa-github fa-2x"></i>
              </a>

              {/* Like Icon */}
              <button
                onClick={() => handleLike(project.id)}
                className="text-red-500 hover:text-red-700 transition-transform transform hover:scale-110 duration-300"
              >
                <i className="fas fa-heart fa-2x"></i>
                <span className="ml-1 text-lg font-semibold">{likeCounts[project.id]}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
