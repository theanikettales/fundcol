import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content text-center">
          <div className="heart-icon animate-pulse">❤️</div>
          <h2>Thank You</h2>
          <p className="thank-you-msg">
            "Your kindness and generosity mean everything to us during this difficult time. After contribution please send screen shot of your payemnt to +91 9352913705 "
          </p>
          <div className="divider"></div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Help Kavya.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
