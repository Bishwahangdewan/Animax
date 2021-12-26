import React from 'react'
import { Routes, Route } from 'react-router-dom'

//import pages & components
import LandingPage from './pages/landingPage/landing.pages';
import Header from './components/header/Header.component';
import SignIn from './pages/signInPage/signin.pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />

      </Routes>
    </div>
  );
}

export default App;
