import { FaDesktop, FaVideo, FaGoogle, FaSkype, FaCalendarAlt } from "react-icons/fa";

const ActivityCard = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto min-h-screen">
    
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Activity</h2>
        <button className="flex items-center text-gray-600 text-sm border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition">
          <FaCalendarAlt className="mr-2 text-gray-600" />
          Last 7 days
        </button>
      </div>

      <div className="text-5xl font-extrabold mb-12">
        24.9{" "}
        <span className="text-gray-500 text-xl font-medium">Hours spent</span>
      </div>

      <div className="flex items-end space-x-8 mb-12 overflow-x-auto">
        {[
          { day: "Mon", value: 2 },
          { day: "Tue", value: 2.8 },
          { day: "Wed", value: 3.5 },
          { day: "Thu", value: 4.2 },
          { day: "Fri", value: 5.5 },
          { day: "Sat", value: 4.8 },
          { day: "Sun", value: 3.5 },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div
              className={`${
                idx === 4 ? "bg-purple-700" : "bg-purple-500"
              } w-6 rounded-t-md`}
              style={{
                height: `${item.value * 12}px`,
              }}
            ></div>
            <span className="text-sm mt-2 text-gray-500">{item.day}</span>
          </div>
        ))}
      </div>

      <div className="space-y-10">
        <h3 className="text-2xl font-semibold mb-10">By platform</h3>
        <ul className="space-y-6">
          <li className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <FaDesktop className="text-blue-600 text-2xl" />
              <span className="text-gray-700 font-medium text-lg">Mondly Platform</span>
            </div>
            <span className="text-gray-800 font-semibold text-lg">12.5h</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <FaVideo className="text-green-500 text-2xl" />
              <span className="text-gray-700 font-medium text-lg">Zoom</span>
            </div>
            <span className="text-gray-800 font-semibold text-lg">6.8h</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <FaGoogle className="text-orange-500 text-2xl" />
              <span className="text-gray-700 font-medium text-lg">Google Meet</span>
            </div>
            <span className="text-gray-800 font-semibold text-lg">4.2h</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <FaSkype className="text-blue-400 text-2xl" />
              <span className="text-gray-700 font-medium text-lg">Skype</span>
            </div>
            <span className="text-gray-800 font-semibold text-lg">2.5h</span>
          </li>
          
          <li className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <FaDesktop className="text-blue-600 text-2xl" />
              <span className="text-gray-700 font-medium text-lg">Microsoft Teams</span>
            </div>
            <span className="text-gray-800 font-semibold text-lg">1.0h</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ActivityCard;
