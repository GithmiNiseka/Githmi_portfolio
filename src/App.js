
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home.js'
import LMSCaseStudy from './Components/lmsCaseStudy';
import LexTrustCaseStudy from './Components/lexTrustCaseStudy.js';

function App() {
  return (
    <div className="App">
    <Router>
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lmsCaseStudy" element={<LMSCaseStudy />} />
        <Route path="/lexTrustCaseStudy" element={<LexTrustCaseStudy />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
