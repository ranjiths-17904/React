import React from 'react';
import Tutor from '../assets/Million Minds Img/Tutor_Image_Section-transformed.png';
import Star from '../assets/Million Minds Img/Vector.png';
import student1 from "../assets/Million Minds Img/Student4.jpg";
import student2 from "../assets/Million Minds Img/Student3.jpg";
import student3 from "../assets/Million Minds Img/Student1.jpg";
import student4 from "../assets/Million Minds Img/Student2.jpg";
import Bg from "../assets/Million Minds Img/Header.png";

const HomePage = () => {
  return (
    <div className="min-h-screen font-sans">
      <section
        className="flex flex-col items-center md:flex-row-reverse"
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        
      >
        {/* Teacher Image */}
        <div className="w-full md:w-1/2">
          <img
            src={Tutor}
            alt="Teacher"
            className="w-full h-auto max-w-full"
          />
        </div>

        {/* Text and Students Section */}
        <div className="w-full md:w-1/2 bg-opacity-80 p-6 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-6">
            Increase Your Scores <br />
            Find Your Perfect <br />
            <span className="inline-flex items-center">
              Tutor
              <div className="flex ml-4 -space-x-3 pt-3">
                <img
                  src={student1}
                  className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"
                  alt="Student 1"
                />
                <img
                  src={student2}
                  className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"
                  alt="Student 2"
                />
                <img
                  src={student3}
                  className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"
                  alt="Student 3"
                />
                <img
                  src={student4}
                  className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"
                  alt="Student 4"
                />
              </div>
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            Whether you are in elementary school, middle school, high school, or a university student, we have qualified and experienced teachers to support you in all subjects.
          </p>
          <div className="bg-orange-50 p-4 rounded-3xl flex items-center gap-4 border border-neutral-300">
            <img src={Star} alt="Benefit Icon" className="w-10 h-10 flex-shrink-0" />
            <p className="font-medium text-sm sm:text-base leading-snug">
              More than 150 students have felt the benefits and received satisfactory grades
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <div className="p-5 text-center mt-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          Access top online educators and home tutors
        </h3>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search based on subjects, skills, and location"
            className="w-full max-w-md p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="p-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
