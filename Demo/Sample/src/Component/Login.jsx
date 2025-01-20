import React, { useState } from "react";
import Logoimg from '../assets/image 4.png';
import Image from '../assets/WhatsApp Image 2025-01-12 at 10.34.00 PM.jpeg'

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    console.log("Login Details:", email, password);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-6xl h-auto flex flex-col lg:flex-row shadow-lg rounded-lg overflow-hidden">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-12 bg-white">
          <div className="mb-2">
            <img src={Logoimg} alt="Logo" className="w-40 h-14 mb-5" />
            <h1 className="text-2xl lg:text-3xl font-bold mb-2">Welcome back!</h1>
            <p className="text-gray-600 text-sm lg:text-base">
              Enter to unlock a world of knowledge and resources for your
              learning journey.
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-gray-700">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-purple-600 font-medium">
                Forgot your password?
              </a>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1.5px] focus:outline-none ml-2">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e0e0e0_10%,#40c4ff_100%)]">
                </span> 
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#9747FF] px-48 align-middle text-center text-lg font-medium text-white backdrop-blur-3xl gap-4 undefined">
                  Login
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
                  </svg>
                </span>
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-purple-600 font-medium">
              Register here
            </a>
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 bg-purple-100 flex items-center justify-center">
          <img
            src={Image}
            alt="Decorative"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
