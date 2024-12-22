const ScheduleCard = () => {
  return (
    <div className="relative h-1 flex flex-col justify-end w-[200%] ml-[110%] ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full mx-auto mb-4 -mt-96">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">My Schedule</h2>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">Today</span>
            <div className="flex space-x-2">
              <button className="w-8 h-8 flex justify-center items-center text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-full">
                &lt;
              </button>
              <button className="w-8 h-8 flex justify-center items-center text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-full">
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* Schedule Cards Section */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
          {/* Card 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-96 flex-shrink-0 hover:shadow-lg transition-shadow duration-300 relative">
            <p className="text-sm text-gray-500 mb-2">10:30 — 12:00</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Technical English for Beginners
            </h3>
            <span className="text-xs text-blue-500 bg-blue-100 px-3 py-1 rounded-full">
              Beginner
            </span>
            <div className="flex items-center mt-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://via.placeholder.com/40"
                alt="Kristin Watson"
              />
              <p className="ml-3 text-sm text-gray-600">Kristin Watson</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-md w-96 flex-shrink-0 hover:shadow-lg transition-shadow duration-300 relative">
            <p className="text-sm mb-2">13:00 — 14:00</p>
            <h3 className="text-lg font-semibold mb-4">
              English Punctuation Made Easy
            </h3>
            <span className="text-xs bg-purple-700 px-3 py-1 rounded-full">
              Advanced
            </span>
            {/* Absolutely positioned "Now" label */}
            <span className="absolute top-4 right-4 text-xs bg-orange-500 px-2 py-1 rounded-full shadow-md">
              Now
            </span>
            <div className="flex items-center mt-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://via.placeholder.com/40"
                alt="Cody Fisher"
              />
              <p className="ml-3 text-sm">Cody Fisher</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-96 flex-shrink-0 hover:shadow-lg transition-shadow duration-300 relative">
            <p className="text-sm text-gray-500 mb-2">16:00 — 17:00</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Technical Spanish for Beginners
            </h3>
            <span className="text-xs text-blue-500 bg-blue-100 px-3 py-1 rounded-full">
              Beginner
            </span>
            <div className="flex items-center mt-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://via.placeholder.com/40"
                alt="Jacob Jones"
              />
              <p className="ml-3 text-sm text-gray-600">Jacob Jones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
