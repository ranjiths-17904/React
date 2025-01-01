import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './css/index.css'; 
import Home from './Component/Home';
import Navbar from './Component/Navbar2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Home />
    <Navbar />
  </React.StrictMode>
);
