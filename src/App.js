import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './HomePage';
import MentalApp from './MentalApp'; // Import the correct page
import ImagiCore from './ImagiCore';
import CommunityApp from './CommunityApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Githmi_portfolio" element={<Home />} />
        <Route path="/MentalApp" element={<MentalApp />} />
        <Route path="/imagicore" element={<ImagiCore />} />
        <Route path="/CommunityApp" element={<CommunityApp />} />
      </Routes>
    </Router>
  );
}

export default App;
