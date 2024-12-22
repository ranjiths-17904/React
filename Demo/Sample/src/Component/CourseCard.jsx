import { FaGraduationCap } from 'react-icons/fa';

const CourseCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-80 w-full max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300">
      {/* Course Title */}
      <div className="flex items-center space-x-3 mb-4">
        <FaGraduationCap className="text-blue-600 text-2xl" />
        <h2 className="text-lg font-semibold text-gray-800">
          English Punctuation Made Easy
        </h2>
      </div>
      
      {/* Course Description */}
      <p className="text-gray-600 text-sm mb-6">
        Master punctuation rules without any stress or confusion. Perfect for all levels!
      </p>
      
      {/* Participants Section */}
      <div className="flex flex-wrap items-center space-x-3 mb-6">
        {Array(4)
          .fill("")
          .map((_, idx) => (
            <img
              key={idx}
              src={`https://randomuser.me/api/portraits/thumb/men/${10 + idx}.jpg`}
              alt={`Participant ${idx + 1}`}
              className="h-10 w-10 rounded-full border-2 border-gray-300"
            />
          ))}
        <span className="text-gray-500 text-sm">+ 20 more</span>
      </div>
      
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="bg-gray-300 h-3 rounded-full w-full overflow-hidden">
          <div
            className="bg-green-500 h-3 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">Course progress: 75%</p>
      </div>

      {/* Continue Button */}
      <div className="text-center flex items-center justify-center -mt-3.5">
        <button className="bg-blue-600 text-white px-5 py-1 rounded-lg shadow hover:bg-blue-300 transition-colors duration-300">
          Continue Learning
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
