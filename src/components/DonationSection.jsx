import React, { useState } from 'react';

const DonationSection = () => {
  const upiId = 'akki.ray2006@oksbi';
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donation-section" className="donation-section section-margin card">
      <div className="donation-card">
        <h2 className="section-title text-center">Make a Donation</h2>
        <p className="section-subtitle text-center">Scan this QR code with any UPI app to donate.</p>
        
        <div className="qr-container">
          <div className="qr-wrapper">
            <img src="/images/QR.jpeg" alt="UPI QR Code" className="qr-image" />
            <div className="scanner-line"></div>
          </div>
        </div>

        <div className="upi-details">
          <label className="upi-label">UPI ID :</label>
          <div className="upi-box">
            <span className="upi-text">{upiId}</span>
            <button className="btn btn-primary btn-copy" onClick={handleCopy}>
              {copied ? 'Copied! ✓' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
