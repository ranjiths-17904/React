
import './assets/css/style.css'
import Navbar from './Components/Navbar'
import Contact from './pages/Contact';
// import Contact from './pages/Contactm';
import About from './pages/About';
import Profile from './pages/Profile';
import Project from './pages/Project'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Skills from './pages/Skills';
// import Footer from './Components/Footer';



// import Login from './Login';

const App = () => {
  // const arr = ["hello","hii"];
  return (
    <>
    <BrowserRouter>
    <Navbar/> 
    {/* <Footer/> */}
      <Routes>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Project' element={<Project/>}></Route>
        <Route path='/Skills' element={<Skills/>}></Route>

      </Routes>
    </BrowserRouter>
    {/* <Skills/>
    <Project/> 
    <Contact/> */}


    {/* <Login/> */}
    </>
  )
}

export default App;


// import Navbar from './Components/Nav';
// import LoginForm from './Components/Loginn';

// function App() {
//     return (
//         <div className="App">
//             <Navbar />
//             <div className="login-container">
//                 <LoginForm />
//             </div>
//         </div>
//     );
// }

// export default App;
