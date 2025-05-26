import { useState, useEffect } from 'react';
import './assets/css/style.css';

import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Scroll from './Components/Scrollup';
import Loader from './Components/Loaders'; // ✅ Import your animated loader
// import Achievement from './pages/Achievement';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Delay of 3.5 seconds
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
        <>
          <Navbar />
          <Home />
          <Scroll />
        </>
      )}
    </>
  );
};

export default App;
