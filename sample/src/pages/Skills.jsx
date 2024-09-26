import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPaintBrush } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "Advanced", percentage: "90%", icon: <FaHtml5 className="text-orange-500" />, color: "orange" },
    { name: "CSS", level: "Advanced", percentage: "90%", icon: <FaCss3Alt className="text-blue-500" />, color: "blue" },
    { name: "JavaScript", level: "Intermediate", percentage: "75%", icon: <FaJs className="text-yellow-500" />, color: "yellow" },
    { name: "React", level: "Intermediate", percentage: "60%", icon: <FaReact className="text-blue-300" />, color: "lightblue" },
    { name: "Tailwind CSS", level: "Beginner", percentage: "30%", icon: <FaCss3Alt className="text-green-500" />, color: "green" },
    { name: "Node.js", level: "Intermediate", percentage: "65%", icon: <FaNodeJs className="text-green-700" />, color: "darkgreen" },
    { name: "Java", level: "Intermediate", percentage: "75%", icon: <FaJava className="text-red-500" />, color: "red" },
    { name: "UI/UX Design", level: "EAdvanced", percentage: "80%", icon: <FaPaintBrush className="text-purple-500" />, color: "purple" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="container mx-auto p-6 space-y-12">
        <h1 className="text-5xl font-extrabold text-gray-800 text-center">My Skills</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 relative overflow-hidden"
            >
              {/* Skill Icon and Name */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-4xl">{skill.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800">{skill.name}</h3>
              </div>

              <p className="text-gray-600">{skill.level}</p>

              {/* Progress Bar (fills the box according to percentage) */}
              <div className="w-full bg-gray-200 rounded-full mt-4 h-4 relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full"
                  style={{
                    width: `${skill.percentage}`, // Fill according to percentage
                    backgroundColor: skill.color,
                    transition: "width 1s ease-in-out",
                  }}
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
