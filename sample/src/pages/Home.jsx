
const Profile = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 animate-slide-in-left">
      <h1 className="text-4xl font-extrabold">Profile Section</h1>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white animate-slide-in-left">
      <h1 className="text-4xl font-extrabold">Skills Section</h1>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 animate-slide-in-left">
      <h1 className="text-4xl font-extrabold">Projects Section</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white animate-slide-in-left">
      <h1 className="text-4xl font-extrabold">Contact Section</h1>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <Profile />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;