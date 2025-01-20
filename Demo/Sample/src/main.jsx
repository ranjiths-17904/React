// // import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// // import Home from './Component/Home';
// // import Navbar from './Component/Navbar2';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//    <StrictMode>
//     <App />
//     {/* <Home />
//     <Navbar /> */}
//   </StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
