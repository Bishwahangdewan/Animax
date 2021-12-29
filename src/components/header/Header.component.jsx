import React from 'react';

//logo import
import Logo from '../../assets/logo.png';

//react-router-components import
import { Link } from 'react-router-dom';

//import firebase services
import { auth, signOut } from '../../firebase/firebase';

import './header.styles.scss';

const Header = ({ loggedinUser }) => (
    <div className="header">
        <div>
            {/*-----LOGO------*/}

            <Link to='/'>
                <img className="logo" src={Logo} alt="logo" />
            </Link>

            {/*-------NAV LINKS--------*/}

            {loggedinUser ?
                <nav className='="user-logged-in'>
                    <Link className="nav-link" to="/signin">Home</Link>
                    <Link className="nav-link" to="/signin">Anime Shows</Link>
                    <Link className="nav-link" to="/signin">Anime Movies</Link>
                    <a className="nav-link" onClick={() => signOut(auth)}>Logout</a>
                </nav>
                :
                <nav className='="user-not-logged-in'>
                    <Link className="nav-link" to="/signin">Sign In</Link>
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </nav>
            }
        </div>
    </div>
)

export default Header