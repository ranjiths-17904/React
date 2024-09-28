import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // This is just a placeholder. You can modify it later to handle actual routing.
      window.location.href = "/portfolio"; // Update with your actual portfolio URL
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer); // Clear timer on cleanup
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-32 h-24">
        <div className="absolute bottom-8 left-20 h-7 w-7 rounded-full bg-teal-600 animate-bounce"></div>
        <div className="absolute right-0 top-0 h-2 w-11 rounded-md bg-gray-300 animate-loading-step"></div>
        <div className="absolute right-0 top-0 h-2 w-11 rounded-md bg-gray-300 animate-loading-step delay-300"></div>
      </div>
    </div>
  );
};

export default Loader;
