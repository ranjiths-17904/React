import Profile from "./Profile";
import Skills from './Skills';
import Projects from "./Project";
import Contact from './Contact';
// import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import About from './About';

const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> Uncomment this if Navbar should be visible */}
      
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
