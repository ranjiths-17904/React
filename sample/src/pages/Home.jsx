// HomePage.js
import { useState, useEffect } from "react"; 
import Profile from "./Profile";
import Skills from './Skills';
import Projects from "./Project";
import Contact from './Contact';
import Footer from '../Components/Footer';
import About from './About';
// import Loader from '../Components/Loaders';

const HomePage = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, Math.floor(Math.random() * 1000) + 3000); 

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-black">
  //       <Loader />
  //     </div>
  //   );
  // }

  return (
    <div>
      
      <section id="profile">
        <Profile />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="project">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;
