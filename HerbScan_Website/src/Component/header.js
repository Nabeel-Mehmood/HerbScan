import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../Assets/logo.png';

function Header({ showSearchBar = true }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
        {!isScrolled && <span className="logo-text">HerbScan</span>}
      </div>

      {showSearchBar && (
        <div className="search-bar-container">
          <input type="text" placeholder="Search..." className="search-bar" />
          <i className="search-icon fas fa-search"></i>
        </div>
      )}

      <nav className="nav-bar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        {!isScrolled && (
          <button
            className="signup-btn"
            onClick={() => (window.location.href = '/login')}
          >
            Sign Up
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
