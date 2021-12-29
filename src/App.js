import React from 'react';

//import react router dom components
import { Routes, Route, Navigate } from 'react-router-dom';

//import pages & components
import LandingPage from './pages/landingPage/landing.pages';
import Header from './components/header/Header.component';
import SignIn from './pages/signInPage/signin.pages';
import SignUp from './pages/signupPage/signup.pages';

//import Firebase Services
import { auth, onAuthStateChanged } from './firebase/firebase';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      user: {},
      uid: ''
    }
  }

  componentDidMount() {
    //returns a signed in user
    onAuthStateChanged(auth, user => {
      if (user) {
        //user is signed in
        this.setState({ user })
        this.setState({ uid: user.uid })
      }
    });

  }

  render() {
    return (
      <div className="App">
        <Header loggedinUser={this.state.uid} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={this.state.uid ? <Navigate to="/dashboard" /> : <SignIn />} />
          <Route path="/signup" element={this.state.uid ? <Navigate to="/dashboard" /> : <SignUp />} />
        </Routes>
      </div>
    )
  }
}

export default App;
