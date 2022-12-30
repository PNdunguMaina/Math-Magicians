import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const handleChange = () => {
    const collapseDiv = document.getElementById('navbarNav');
    if (collapseDiv.style.display === 'none') {
      collapseDiv.style.display = 'flex';
      collapseDiv.style.minHeight = '50vw';
    } else {
      collapseDiv.style.display = 'none';
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100">
      <Link className="navbar-brand" to="/">
        Math Magicians
      </Link>
      <button
        id="btn"
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleChange}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calculator">
              Calculator
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/quotes">
              Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
