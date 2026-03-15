import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section section-margin animate-fade-in">
      <div className="hero-card card">
        <div className="hero-image-wrapper">
          <img src="/images/kavya.jpeg" alt="Our friend" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <span className="badge">Victim </span>
          <h1 className="hero-title">Help Kavya Sharma</h1>
          <p className="hero-description">
            I'm Kavya thanks for showing interest for helping me. Mein kavya, ik bohot serious online banking scam phase kr rha hu mera Bank account freeze ho chuka hai, mujhe urget 2000 ki zarurt hai please help me guys !!!!
            Rs. 1 bhee kr do aapka bhla hoga. apko big thankyou woh alag baat h mera thankyou chota hoga.
            yeh pasie mere dost ke account mein aayenge so don't be confused. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
