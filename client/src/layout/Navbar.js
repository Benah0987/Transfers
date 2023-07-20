import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-6">
        <div className="container-fluid">
          <h2 className="navbar-brand mx-5 fs-8 fw-bold" href="#">
            Transfers
          </h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarText">
            <ul className="navbar-nav mb-2 mb-lg-0 mx-5">
              {/* Use Link components for navigation */}
              <li className="nav-item">
                <Link className="nav-link mx-2 fs-5" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 fs-5" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 fs-5" to="/transfers">Transfer</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
