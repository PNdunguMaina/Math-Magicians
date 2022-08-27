import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    color: 'hsla(0, 0%, 100%, 0.9)',
    top: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100vw',
    padding: '1rem 0',
    borderBottom: '1px solid hsla(0, 20%, 50%, 0.9)',
    position: 'sticky',
    backgroundColor: 'hsl(0, 0%, 96%)',
  };

  const navItemStyle = {
    display: 'flex',
    gap: '3rem',
    fontSize: '1.5rem',
    fontWeight: '600',
    alignItems: 'center',
  };

  const navLinksStyle = {
    color: 'hsla(0, 20%, 50%, 0.9)',
    textDecoration: 'none',
  };

  return (
    <div className="navbarContainer" style={navStyle}>
      <div className="logo-container">
        <h1
          className="nav-logo"
          style={{
            color: 'hsl(280, 100%, 50%)',
            margin: 0,
            fontSize: '1.5rem',
          }}
        >
          Math Magicians
        </h1>
      </div>
      <div className="links-container" style={navItemStyle}>
        <Link style={navLinksStyle} to="/">
          Home
        </Link>
        <Link style={navLinksStyle} to="/calculator">
          Calculator
        </Link>
        <Link style={navLinksStyle} to="/quotes">
          Quote
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
