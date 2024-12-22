import { FaTasks, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";

const ProgressStats = () => {
  return (
    <div className="bg-white w-full shadow-lg rounded-xl p-8 h-80 max-w-md mx-auto hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Progress Statistics
      </h2>
      <div className="text-center text-lg font-medium text-gray-600 mb-8">
        <span className="text-blue-500 font-semibold">64%</span> Total Activity
      </div>

      <div className="flex justify-between items-center gap-6">
        <div className="text-center flex-1 hover:scale-110 transform transition-transform duration-300">
          <div className="flex items-center justify-center text-blue-500 bg-blue-100 p-4 rounded-full shadow-md">
            <FaTasks className="text-2xl" />
          </div>
          <div className="text-2xl font-bold mt-3 text-gray-800">8</div>
          <p className="text-sm text-gray-600">In Progress</p>
        </div>

        <div className="text-center flex-1 hover:scale-110 transform transition-transform duration-300">
          <div className="flex items-center justify-center text-green-500 bg-green-100 p-4 rounded-full shadow-md">
            <FaCheckCircle className="text-2xl" />
          </div>
          <div className="text-2xl font-bold mt-3 text-gray-800">12</div>
          <p className="text-sm text-gray-600">Completed</p>
        </div>

        <div className="text-center flex-1 hover:scale-110 transform transition-transform duration-300">
          <div className="flex items-center justify-center text-orange-500 bg-orange-100 p-4 rounded-full shadow-md">
            <FaCalendarAlt className="text-2xl" />
          </div>
          <div className="text-2xl font-bold mt-3 text-gray-800">14</div>
          <p className="text-sm text-gray-600">Upcoming</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressStats;
