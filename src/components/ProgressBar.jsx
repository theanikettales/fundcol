import React from 'react';

const ProgressBar = () => {
  const goal = 2000;
  const raised = 15;
  const percentage = Math.min((raised / goal) * 100, 100);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="progress-section section-margin card animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="progress-content">
        <div className="progress-header">
          <div className="progress-stat">
            <span className="stat-label">Raised</span>
            <span className="stat-value raised">{formatCurrency(raised)}</span>
          </div>
          <div className="progress-stat text-right">
            <span className="stat-label">Goal</span>
            <span className="stat-value goal">{formatCurrency(goal)}</span>
          </div>
        </div>

        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill"
            style={{ width: `${percentage}%` }}
          >
            <div className="progress-bar-shine"></div>
          </div>
        </div>
        
        <p className="progress-footer text-center">
          <strong>{Math.round(percentage)}%</strong> funded. Thank you!
        </p>
      </div>
    </section>
  );
};

export default ProgressBar;
