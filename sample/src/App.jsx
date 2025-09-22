import { useState, useEffect } from 'react';
import './assets/css/style.css';

import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Scroll from './Components/Scrollup';
import Loader from './Components/Loaders';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-galaxy min-h-screen relative"> {/* SPACE-THEMED BACKGROUND */}
          {/* Shooting Stars Animation */}
          <div className="shooting-star"></div>
          <div className="shooting-star shooting-star-2"></div>
          <div className="shooting-star shooting-star-3"></div>
          <div className="shooting-star shooting-star-4"></div>
          <div className="shooting-star shooting-star-5"></div>
          
          <Navbar />
          <Home />
          <Scroll />
        </div>
      )}
    </>
  );
};

export default App;
