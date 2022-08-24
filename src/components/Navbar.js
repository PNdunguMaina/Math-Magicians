import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="logo-container">
        <h1 className="nav-logo">Math Magicians</h1>
      </div>
      <div className="links-container">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quotes">Quote</Link>
      </div>
    </div>
  );
}

export default Navbar;
