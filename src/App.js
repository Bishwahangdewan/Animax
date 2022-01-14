import React from 'react';

//import react router dom components
import { Routes, Route, Navigate } from 'react-router-dom';

//import pages & components
import LandingPage from './pages/landingPage/landing.pages';
import Header from './components/header/Header.component';
import SignIn from './pages/signInPage/signin.pages';
import SignUp from './pages/signupPage/signup.pages';
import Dashboard from './pages/DashboardPage/dashboard.pages';
import AnimeDetails from './pages/animeDetails/AnimeDetailspages';

//import Firebase Services
import { auth, onAuthStateChanged } from './firebase/firebase';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      uid: '',
    }
  }

  //on auth state changed returns a function which should be called while unmounting in order to cancel subscription and avoid memory leaks
  unsubscribeFromAuth = null;

  componentDidMount() {
    //returns a signed in user
    this.unsubscribeFromAuth = onAuthStateChanged(auth, user => {
      if (user) {
        //user is signed in
        this.setState({ uid: user.uid })
      } else {
        this.setState({ uid: "" })
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <Header loggedinUser={this.state.uid} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={this.state.uid ? <Navigate to="/dashboard" /> : <SignIn />} />
          <Route path="/signup" element={this.state.uid ? <Navigate to="/dashboard" /> : <SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/animeDetails/:id" element={<AnimeDetails />} />
        </Routes>
      </div>
    )
  }
}

export default App;
