import React from 'react';
import './ProgressBar.css'; // Importe o CSS

const ProgressBar = ({ progress }) => {
  const totalCircles = 10;
  const filledWidth = `${(progress / 100) * 100}%`;

  return (
    <div className="progress-space">
      <div className="progress-bar" style={{ width: filledWidth }} />
      <div className="circles">
        {[...Array(totalCircles)].map((_, index) => (
          <div key={index} className="circle" />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;