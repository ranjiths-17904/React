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
        <div className="bg-gray-100 max-h-screen"> {/* GLOBAL BACKGROUND */}
          <Navbar />
          <Home />
          <Scroll />
        </div>
      )}
    </>
  );
};

export default App;
