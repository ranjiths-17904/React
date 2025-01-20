import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill out all fields.');
      return;
    }

    console.log('Login Details:', email, password);
    setError('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-gray-900">
      {/* Form Section */}
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-gradient-to-r from-[#ffffff] to-[#f7f7ff] border-2 border-gray-300 relative">
        {/* Silver Border */}
        <div className="absolute inset-0 -z-10 rounded-2xl border-[6px] border-gray-300"></div>

        <h1 className="text-4xl font-extrabold text-[#9747FF] text-center mb-6">Login</h1>

        {error && (
          <div className="w-full bg-red-500 text-white text-center p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form className="space-y-5 w-full" onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border-2 border-[#9747FF] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#9747FF] focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border-2 border-[#9747FF] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#9747FF] focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#9747FF] text-white font-bold rounded-lg hover:bg-[#7c37d1] transition-all"
          >
            Login
          </button>
        </form>

        <p className="text-gray-600 mt-6 text-center">
          Don't have an account?{' '}
          <a href="/signup" className="text-[#9747FF] hover:underline font-medium">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
