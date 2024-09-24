import '../assets/css/style.css';

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
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative w-64 h-96 bg-white shadow-lg p-6 rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl group"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-32 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="mb-4 px-4">{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-500 underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Project;
