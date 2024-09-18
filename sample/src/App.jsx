
import './assets/css/style.css'
import Navbar from './components/Navbar'
import Contact from './pages/Contact';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Project from './pages/Project'
import {BrowserRouter,Routes,Route} from 'react-router-dom';


// import Login from './Login';

const App = () => {
  // const arr = ["hello","hii"];
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Profile/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Project' element={<Project/>}></Route>

      </Routes>
    
    </BrowserRouter>



    {/* <Navbar/>
    <Project/> */}


    {/* <Login/> */}
    </>
  )
}

export default App;