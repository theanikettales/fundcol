import React from 'react';

const Instructions = () => {
  const steps = [
    {
      id: 1,
      title: "Open Any UPI App",
      desc: "Google Pay, PhonePe, Paytm, BHIM, Amazon Pay etc.",
      icon: "📱"
    },
    {
      id: 2,
      title: "Scan OR Code",
      desc: "Tap on the scanner icon and scan the given QR code.",
      icon: "📷"
    },
    {
      id: 3,
      title: "Enter Amount",
      desc: "Enter your desired donation amount and proceed to pay.",
      icon: "₹"
    },
    {
      id: 4,
      title: "Confirm Payment",
      desc: "Enter your UPI PIN to complete the transaction.",
      icon: "✅"
    }
  ];

  return (
    <section className="instructions-section section-margin">
      <h2 className="section-title text-center">How to Donate?</h2>
      <div className="steps-container">
        {steps.map(step => (
          <div key={step.id} className="step-card card">
            <div className="step-icon">
              {step.icon}
            </div>
            <div className="step-details">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
            <div className="step-number">{step.id}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructions;
