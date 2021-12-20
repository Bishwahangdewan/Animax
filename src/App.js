import React from 'react'
import { Routes, Route } from 'react-router-dom'

//import pages & components
import LandingPage from './pages/landingPage/landing.pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
