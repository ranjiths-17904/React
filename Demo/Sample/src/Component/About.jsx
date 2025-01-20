import React from "react";
import smallIcon from "../assets/image_2-LR3YrKUWA-transformed-removebg-preview.png";
import smallImage from "../assets/MM_course_img-3.png";
import bigImage from "../assets/MM_course_img-1-transformed.png";
import student1 from "../assets/Student1.jpg";
import student2 from "../assets/Student3.jpg";
import student3 from "../assets/Student2.jpg";
import student4 from "../assets/Student4.jpg";
import { VideoIcon } from "lucide-react";
import image from "../assets/About_Bg-removebg-preview.png"

const AboutPageContent = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Start Section */}
      <section className="flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-16 py-8 relative">
      
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-700 flex items-center justify-center lg:justify-start">
            Best Digital
            <img
              src={smallIcon}
              alt="Icon"
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ml-2 sm:ml-4"
            />
          </h1>
          <h1
            className="text-3xl sm:text-4xl font-bold text-gray-800 relative inline-block -mt-2 sm:-mt-2"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg%20width%3D%22113%22%20height%3D%22122%22%20viewBox%3D%220%200%20113%20122%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cellipse%20cx%3D%2243.7541%22%20cy%3D%2244.4747%22%20rx%3D%2243.7541%22%20ry%3D%2244.4747%22%20transform%3D%22matrix%280.970478%20-0.241188%200.232952%200.972488%200.573059%2034.9246%29%22%20fill%3D%22%239747FF%22%2F%3E%3Cpath%20d%3D%22M93.1703%2017.7605L93.1703%2058.7189L50.7734%2026.2193L93.1703%2017.7605Z%22%20fill%3D%22%239747FF%22%2F%3E%3C%2Fsvg%3E')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left center",
              backgroundPositionX: "-20px",
              height: "70px",
              paddingTop: "20px",
            }}
          >
            Online Courses
          </h1>
          <p className="mt-4 text-gray-600">
            Million Mind’s Online courses provide an accessible and flexible way
            for individuals to acquire new knowledge and skills in various
            fields.
          </p>
          <button className="mt-6 px-6 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src={image}
            alt="About image"
            className="lg:block hidden w-48 sm:w-60 lg:w-80 object-contain"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#D0BDE8] rounded-3xl p-4 flex flex-col justify-between relative">
            <div className="flex items-center justify-between mb-4">
              <img
                src={bigImage}
                alt="Big Feature Image"
                className="w-24 sm:w-36 rounded-md"
              />
              <img
                src={smallImage}
                alt="Small Feature Image"
                className="w-12 sm:w-16 rounded-xl"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-left">
              Study at your <br /> own Place
            </h3>
            <button className="absolute bottom-4 right-4 bg-black text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:scale-105 transition">
              &gt;
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-200 shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black text-white flex items-center justify-center rounded-full">
                <VideoIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="bg-gray-100 text-gray-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                Online
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold">
              The learning <br /> process is simple
            </h3>
          </div>

          {/* Card Statistics */}
          <div className="col-span-2 bg-gray-100 shadow-lg rounded-xl p-4 sm:p-6 flex flex-col justify-center text-center">
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6">
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold">231+</h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  Courses & subjects
                </p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold">319+</h4>
                <p className="text-xs sm:text-sm text-gray-600">Instructors</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold">72k+</h4>
                <p className="text-xs sm:text-sm text-gray-600">Using the app</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex -space-x-2 sm:-space-x-4">
                {[student1, student2, student3, student4].map((student, index) => (
                  <img
                    key={index}
                    src={student}
                    alt={`Student ${index + 1}`}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="ml-2 sm:ml-4 text-sm sm:text-lg font-medium">
                +72k <span className="text-gray-600">Happy students</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPageContent;
