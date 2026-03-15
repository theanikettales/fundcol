import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="logo">
            <span className="logo-icon">💙</span>
            <span className="logo-text">Help Kavya</span>
          </div>
          <button className="btn btn-primary btn-sm nav-btn" onClick={() => document.getElementById('donation-section')?.scrollIntoView({ behavior: 'smooth' })}>
            Donate Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
