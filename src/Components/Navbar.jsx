import React, { useState } from 'react';
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">ATS</div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/ab">Get Resume</a>
        <a href="/link">Contact</a>
      </div>
      <button className="menu-button" onClick={toggleMenu}> ◉
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} />
      </button>
    </nav>
  );
}

export default Navbar;