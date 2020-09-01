import React from 'react';
import PinButton from '../components/PinLocation/PinButton';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/pos">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/reports">
                Reports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pin"></a>
            </li>
          </ul>
        </div>
      </nav>
      <PinButton />
    </>
  );
}
