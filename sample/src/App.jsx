
import './assets/css/style.css'
import Navbar from './components/Navbar'
import Contactm from './pages/Contactm';
// import Contact from './pages/Contactm';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Project from './pages/Project'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Skills from './pages/Skills';


// import Login from './Login';

const App = () => {
  // const arr = ["hello","hii"];
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/Contactm' element={<Contactm/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Project' element={<Project/>}></Route>
        <Route path='/Skills' element={<Skills/>}></Route>

      </Routes>
    
    </BrowserRouter>



    {/* <Navbar/>
    <Project/> */}


    {/* <Login/> */}
    </>
  )
}

export default App;