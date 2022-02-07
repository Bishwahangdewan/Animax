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
import VideoPlayer from './components/VideoPlayer/VideoPlayer.component';
import SearchPage from './pages/SearchPage/SearchPage.pages';
import ResponsiveHeader from './components/ResponsiveHeader/ResponsiveHeader.component';
import Footer from './components/Footer/Footer.components';

//import Firebase Services
import { auth, onAuthStateChanged } from './firebase/firebase';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      uid: '',
      width: window.innerWidth
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

  //responsive
  componentDidUpdate() {
    window.addEventListener('resize', () => this.setState({ width: window.innerWidth }))
  }

  render() {
    return (
      <div className="App">
        {this.state.width < 720 ? <ResponsiveHeader loggedinUser={this.state.uid} /> : <Header loggedinUser={this.state.uid} />}
        <Routes>
          <Route path="/" element={this.state.uid ? <Navigate to="/dashboard" /> : <LandingPage />} />
          <Route path="/signin" element={this.state.uid ? <Navigate to="/dashboard" /> : <SignIn />} />
          <Route path="/signup" element={this.state.uid ? <Navigate to="/dashboard" /> : <SignUp />} />
          <Route path="/dashboard" element={this.state.uid ? <Dashboard /> : <Navigate to="/signin" />} />
          <Route path="/animeDetails/:id" element={<AnimeDetails />} />
          <Route path="/video/:anime_id/:video_id" element={this.state.uid ? <VideoPlayer /> : <Navigate to="/signin" />} />
          <Route path="/search" element={this.state.uid ? <SearchPage /> : <Navigate to="/signin" />} />
        </Routes>

        <Footer />
      </div>
    )
  }
}

export default App;
