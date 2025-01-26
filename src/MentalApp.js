import React from 'react';
import mentalCS from './img/mentalCS.jpg';

function MentalApp() {  // Renamed to MetalDetail
  return (
    <div className="center-container">
      <img src={mentalCS} className="centered-image" alt="cs" id="mentalCS" />
    </div>
  );
}

export default MentalApp;
