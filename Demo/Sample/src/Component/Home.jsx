import React from "react";
import bg from "../assets/Bg2.png";

const App = () => {
  return (
    <div
      className="bg-gray-50 min-h-screen flex flex-col justify-between overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="text-center py-12 bg-opacity-80 shadow-sm">
        <h1 className="text-xl md:text-2xl font-bold mb-8 leading-tight">
          I Design Realistic And <br />
          <span className="block mt-1">Delightful Interfaces For Startups</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mt-6 px-4">
          {/* Build With Us Button */}
          <button
            href="#"
            className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-40 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-2xl transition-all duration-300 ease-out hover:ring-1 hover:ring-black hover:ring-offset-2"
          >
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
            <div className="flex items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 40 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM15 11H11V15H9V11H5V9H9V5H11V9H15V11Z" fill="#250DFF"/>

              </svg>
              <span className="ml-1 font-semibold text-white">
                Build With Us
              </span>
            </div>
          </button>

          {/* Join Us Button */}
          <button
            href="#"
            className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-sky-600 text-white shadow hover:bg-blue-700 h-9 px-4 py-2 max-w-32 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-2xl transition-all duration-300 ease-out hover:ring-1 hover:ring-sky-700 hover:ring-offset-2"
          >
            <span className="absolute right-0 -mt-12 h-32 w-5 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
            <div className="flex items-center">
              <svg
                width="32"
                height="20"
                viewBox="0 0 44 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 4C8.26522 4 8.51957 3.89464 8.70711 3.70711C8.89464 3.51957 9 3.26522 9 3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3C7 3.26522 7.10536 3.51957 7.29289 3.70711C7.48043 3.89464 7.73478 4 8 4ZM7 5.83C6.3338 5.59496 5.77187 5.13243 5.41314 4.52385C5.05442 3.91526 4.92189 3.19962 5.03889 2.50293C5.15589 1.80624 5.51492 1.17316 6.05278 0.715147C6.59063 0.25713 7.27282 0.00354108 7.97925 -0.000976192C8.68569 -0.00549346 9.37107 0.239351 9.91473 0.690452C10.4584 1.14155 10.8255 1.76999 10.9514 2.46513C11.0773 3.16026 10.9539 3.87753 10.603 4.49066C10.2521 5.10379 9.69614 5.57346 9.033 5.817V7.845C9.033 7.919 9.03033 7.99267 9.025 8.066C9.05492 8.1979 9.1113 8.32236 9.19071 8.43185C9.27012 8.54134 9.37092 8.63358 9.487 8.703L12.573 10.549C13.0182 10.8153 13.3868 11.1926 13.6427 11.6439C13.8986 12.0952 14.0331 12.6052 14.033 13.124V14.183C14.6976 14.4269 15.2546 14.8979 15.6055 15.5128C15.9564 16.1277 16.0786 16.8468 15.9506 17.5431C15.8225 18.2393 15.4524 18.8679 14.9057 19.3177C14.359 19.7675 13.6709 20.0095 12.963 20.001C12.2551 19.9925 11.573 19.7341 11.0373 19.2713C10.5016 18.8085 10.1467 18.1712 10.0354 17.4721C9.92407 16.7729 10.0635 16.0569 10.4291 15.4507C10.7946 14.8444 11.3627 14.3869 12.033 14.159V13.124C12.0329 12.9511 11.988 12.7811 11.9027 12.6308C11.8173 12.4804 11.6944 12.3547 11.546 12.266L8.46 10.42C8.3024 10.3258 8.15377 10.2174 8.016 10.096C7.87854 10.2173 7.73026 10.3258 7.573 10.42L4.487 12.266C4.33857 12.3547 4.21568 12.4804 4.13032 12.6308C4.04497 12.7811 4.00007 12.9511 4 13.124V14.171C4.66749 14.4069 5.23009 14.8712 5.58836 15.4818C5.94662 16.0924 6.07749 16.81 5.95781 17.5078C5.83814 18.2056 5.47563 18.8385 4.93437 19.2949C4.39311 19.7512 3.70795 20.0015 3 20.0015C2.29205 20.0015 1.60689 19.7512 1.06563 19.2949C0.524368 18.8385 0.161863 18.2056 0.042188 17.5078C-0.0774873 16.81 0.0533734 16.0924 0.411639 15.4818C0.769905 14.8712 1.33251 14.4069 2 14.171V13.124C1.99992 12.6052 2.1344 12.0952 2.39029 11.6439C2.64619 11.1926 3.01475 10.8153 3.46 10.549L6.546 8.703C6.66208 8.63358 6.76288 8.54134 6.84229 8.43185C6.9217 8.32236 6.97807 8.1979 7.008 8.066C7.00262 7.99246 6.99995 7.91874 7 7.845V5.83ZM3 18C3.26522 18 3.51957 17.8946 3.70711 17.7071C3.89464 17.5196 4 17.2652 4 17C4 16.7348 3.89464 16.4804 3.70711 16.2929C3.51957 16.1054 3.26522 16 3 16C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18ZM13 18C13.2652 18 13.5196 17.8946 13.7071 17.7071C13.8946 17.5196 14 17.2652 14 17C14 16.7348 13.8946 16.4804 13.7071 16.2929C13.5196 16.1054 13.2652 16 13 16C12.7348 16 12.4804 16.1054 12.2929 16.2929C12.1054 16.4804 12 16.7348 12 17C12 17.2652 12.1054 17.5196 12.2929 17.7071C12.4804 17.8946 12.7348 18 13 18Z" fill="white"/>
              </svg>
              <span className="text-white font-semibold">Join Us</span>
            </div>
          </button>
        </div>
      </header>
    </div>
  );
};

export default App;
