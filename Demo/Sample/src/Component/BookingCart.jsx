/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";
import tickIcon from "../assets/Million Minds Img/Vector (1).png";

function FreeSessionPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const courses = [
    "Programming",
    "UI/UX Designing",
    "Data Analysis",
    "Machine Learning",
    "Web Development",
    "Graphic Design",
  ];

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      setFilteredCourses(
        courses.filter((course) =>
          course.toLowerCase().includes(value.toLowerCase())
        )
      );
      setIsDropdownOpen(true);
    } else {
      setFilteredCourses([]);
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center mb-4">
          <span className="mr-2">
            <svg
              width="25"
              height="20"
              viewBox="0 0 29 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.6243 11H2.10352"
                stroke="#9747FF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5833 20.9163L1.375 10.9997L11.5833 1.08301"
                stroke="#9747FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h1 className="text-lg font-semibold">Book a Free Session</h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          {/* Title Section */}
          <div className="text-start p-3 w-full md:ml-20">
            <h2 className="text-2xl font-semibold text-gray-700 mobile-title">
              Choose Your <span className="text-purple-600">Favorite Course</span> <br />
              <span className="text-stone-950 text-3xl font-bold">
                Enjoy a Free 15-Minute Demo!
              </span>
            </h2>
          </div>

          {/* Search Section */}
          <div className="mt-4 md:mt-0 relative w-full max-w-md mx-auto md:mr-20 mr-20 font-medium">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Select courses.."
              className="w-full p-4 pl-6 border rounded-full text-gray-500 bg-gray-100"
              onFocus={() => setIsDropdownOpen(true)}
            />
            {isDropdownOpen ? (
              <ChevronUp
                className="absolute text-purple-600 right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setIsDropdownOpen(false)}
              />
            ) : (
              <ChevronDown
                className="absolute text-purple-600 right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setIsDropdownOpen(true)}
              />
            )}

            {isDropdownOpen && filteredCourses.length > 0 && (
              <ul className="absolute bg-white border rounded-md mt-2 w-full z-10">
                {filteredCourses.map((course, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-purple-300 cursor-pointer"
                    onClick={() => {
                      setSearchTerm(course);
                      setFilteredCourses([]);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {course}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-center">
          <button className="px-6 py-3 bg-[#9747FF] text-white font-semibold rounded-md hover:bg-purple-600">
            Book Now!
          </button>
        </div>

        <div className=" border rounded-md bg-gray-50 mt-6 w-full">
          <div className="flex items-center mb-8 bg-gray-200 p-5 rounded-t-md">
            <Calendar className="text-purple-500 text-xl mr-3" />
            <h3 className="text-xl font-semibold">On this Free-Session, you’ll</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pl-10">
            {[
              {
                title: "Personalized Guidance",
                description: [
                  "Get tailored insights to help you understand",
                  "your learning needs and goals.",
                ],
              },
              {
                title: "Access to Top Tutors",
                description: [
                  "Experience a session with highly qualified",
                  "educators handpicked for their expertise.",
                ],
              },
              {
                title: "Explore Learning Options",
                description: [
                  "Gain a firsthand look at our courses,",
                  "teaching methods, and platform features.",
                ],
              },
              {
                title: "No Commitment Required",
                description: [
                  "Enjoy a risk-free opportunity to evaluate",
                  "the quality of our teaching.",
                ],
              },
              {
                title: "Flexible Scheduling",
                description: [
                  "Book a demo session at your convenience,",
                  "ensuring it fits your timetable.",
                ],
              },
              {
                title: "Valuable Feedback",
                description: [
                  "Receive professional advice on how to excel",
                  "in your chosen subject or skill.",
                ],
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-1">
                <img src={tickIcon} alt="Tick" className="w-5 h-5 mt-1" />
                <div>
                  <h2 className="text-lg font-medium mb-1">{item.title}</h2>
                  {item.description.map((line, idx) => (
                    <p
                      key={idx}
                      className="text-base text-gray-500 font-medium leading-tight pt-1 tracking-normal"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-title {
            text-align: center;
            margin-bottom: 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default FreeSessionPage;
