import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    color: 'red',
    top: '0',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100vw',
    padding: '3rem',
    backgroundColor: 'black',
  };

  const navItemStyle = {
    display: 'flex',
    gap: '3rem',
    fontSize: '2rem',
    fontWeight: '600',
    color: 'red',
  };

  return (
    <div className="navbarContainer" style={navStyle}>
      <div className="logo-container">
        <h1 className="nav-logo">Math Magicians</h1>
      </div>
      <div className="links-container" style={navItemStyle}>
        <Link style={{ color: 'red' }} to="/">
          Home
        </Link>
        <Link style={{ color: 'red' }} to="/calculator">
          Calculator
        </Link>
        <Link style={{ color: 'red' }} to="/quotes">
          Quote
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
