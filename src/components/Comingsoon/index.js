import React from 'react';
import './style.css'; // Import your CSS file

function ComingSoon() {
  return (
    <div className="coming-soon-container">
      <header>
      <div className="coming-soon-breadcrumb"><a href="/">Go Back</a></div>
      </header>
      <h1 className="coming-soon-header">Coming Soon!</h1>
      <div className="construction-animation">
        <img src="/images/contruction.jpg" alt="Construction in progress" />
      </div>
      <p className="coming-soon-message">We're working hard to bring you this page. Please check back later.</p>
    </div>
  );
}

export default ComingSoon;
