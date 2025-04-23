import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StatsLanding from './pages/Landing';
import Compiler from './pages/Compiler';
import Labs from './pages/Labs';
import Learn from './pages/Learn';
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<StatsLanding />} />
          <Route path="/compiler" element={<Compiler />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/learn" element={<Learn />} />
      </Routes>
    </Router>
  );
}

export default App;