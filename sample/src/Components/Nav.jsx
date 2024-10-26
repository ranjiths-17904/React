import React, { Component } from 'react';
import '../assets/css/Nav.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <h1 className="navbar-logo">MyApp</h1>
                <ul className="navbar-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
