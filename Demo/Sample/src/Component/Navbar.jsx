import { FaSearch, FaBars } from "react-icons/fa"; 
import CompanyIcon from '../assets/CompanyIcon.png';

const Navbar = () => {
  return (
    <div className="bg-gray-100 shadow-md p-4 flex items-center justify-between relative">
      <div className="flex items-center space-x-6">
        <img
          src={CompanyIcon}
          alt="Logo"
          className="h-16 w-20 mb-2" />
      </div>

      <div className="flex-grow flex justify-center items-center">
        <div className="bg-gray-600 text-white py-2 px-6 rounded-full flex items-center space-x-8">
          <a href="./CourseCard.jsx"
            className="hover:bg-gray-500 py-2 px-4 rounded-full transition">Courses</a>
          <a href="./ActivityChart.jsx"
            className="hover:bg-gray-500 py-2 px-4 rounded-full transition"> Dashboard </a>
          <a href="./ScheduleCard.jsx"
            className="hover:bg-gray-500 py-2 px-4 rounded-full transition"> Schedule </a>
          <a href="#support"
            className="hover:bg-gray-500 py-2 px-4 rounded-full transition"> Support </a>
        </div>
      </div>

      <div className="flex items-center space-x-6">
         <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg border border-gray-300 max-w-xs">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm text-gray-700 w-full"
          />
        </div>

        <img
          src="https://i.pravatar.cc/300"
          alt="User"
          className="h-10 w-10 rounded-full border-2 border-gray-200"
        />
      </div>
      <div className="md:hidden absolute top-4 right-4">
        <button className="text-gray-600 hover:text-black focus:outline-none">
          <FaBars className="text-2xl" />
        </button>
      </div>

      <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 rounded-lg">
        <nav className="flex flex-col items-center space-y-4">
          <a
            href="#courses"
            className="text-gray-600 hover:text-black font-medium transition" > Courses </a>
          <a
            href="#dashboard"
            className="text-gray-600 hover:text-black font-medium transition">
            Dashboard
          </a>
          <a
            href="#schedule"
            className="text-gray-600 hover:text-black font-medium transition">Schedule
          </a>
          <a
            href="#support"
            className="text-gray-600 hover:text-black font-medium transition"> Support </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
