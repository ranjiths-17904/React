

const Skills = () => {
  const skills = [
    { name: "HTML", level: "Advanced", percentage: "90%" },
    { name: "CSS", level: "Advanced", percentage: "90%" },
    { name: "JavaScript", level: "Intermediate", percentage: "75%" },
    { name: "React", level: "Intermediate", percentage: "60%" },
    { name: "Tailwind CSS", level: "Beginner", percentage: "30%" },
    { name: "Node.js", level: "Intermediate", percentage: "65%" },
    { name: "Java", level: "Intermediate", percentage: "75%" },
    // { name: "Python", level: "Advanced", percentage: "85%" },
    { name: "UI/UX Design", level: "Expert", percentage: "100%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-center items-center">
      <div className="container mx-auto p-6 space-y-12">
        <h1 className="text-5xl font-extrabold text-white text-center">My Skills</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-400 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800">{skill.name}</h3>
              <p className="text-gray-600">{skill.level}</p>
              <div className="w-full bg-gray-200 rounded-full mt-4">
                <div
                  className={`h-4 rounded-full bg-gradient-to-r ${
                    skill.level === "Expert"
                      ? "from-green-400 to-green-600"
                      : skill.level === "Advanced"
                      ? "from-blue-400 to-blue-600"
                      : "from-yellow-400 to-yellow-600"
                  }`}
                  style={{ width: skill.percentage }}
                ></div>
              </div>
              <p className="text-right mt-2 text-sm font-semibold text-gray-700 animate-fadeIn">
                {skill.percentage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
