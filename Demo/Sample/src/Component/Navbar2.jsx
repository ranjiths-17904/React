import React from 'react';

const Navbar = () => {
  return (
    <footer className="bg-gradient-to-r from-zinc-950 via-black to-slate-950 text-white py-3 fixed bottom-0 w-full shadow-md rounded-t-3xl flex justify-center items-center">
      
      <div className="bg-gray-900 w-1/3 h-6 flex items-center justify-center rounded-xl border border-gray-800">
        
        <button className="flex flex-col items-center text-sm hover:text-gray-300">
          <svg
            width="30"
            height="30"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-3.5"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.489286 7.73981C3.19311e-07 8.63252 0 9.64785 0 11.6785V18.0187C0 20.8404 -1.06437e-07 22.2505 1.04643 23.1252C1.99464 23.9207 3.46964 23.9925 6.25 24V16.5234C6.25 15.7302 6.62628 14.9695 7.29605 14.4087C7.96582 13.8478 8.87423 13.5327 9.82143 13.5327H15.1786C16.1258 13.5327 17.0342 13.8478 17.704 14.4087C18.3737 14.9695 18.75 15.7302 18.75 16.5234V24C21.5304 23.9925 23.0054 23.9193 23.9536 23.1237C25 22.2475 25 20.8389 25 18.0187V11.6785C25 9.64785 25 8.63252 24.5107 7.73981C24.0196 6.8471 23.1 6.18766 21.2589 4.8658L19.4732 3.5843C16.1429 1.19626 14.4821 0 12.5 0C10.5179 0 8.85536 1.19477 5.52679 3.5828L3.74107 4.8643C1.90179 6.18617 0.980357 6.84561 0.491072 7.73832M15.1786 24V16.5234H9.82143V24H15.1786Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Navbar;

