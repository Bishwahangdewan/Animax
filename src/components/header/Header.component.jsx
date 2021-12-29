import React, { useState } from 'react';

//logo import
import Logo from '../../assets/logo.png';

//react-router-components import
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//import firebase services
import { auth, signOut } from '../../firebase/firebase';

//import components
import Loader from '../loader/loader.component';

import './header.styles.scss';

const Header = ({ loggedinUser }) => {

    const [loaderOn, setLoaderOn] = useState(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        setLoaderOn(!loaderOn)

        setTimeout(() => {
            setLoaderOn(false)
            signOut(auth)
            navigate("/")
        }, 2000);


    }

    return (
        <div className="header-container">
            {loaderOn ? <Loader /> : ''}

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
                            <a className="nav-link" onClick={() => handleLogout()}>Logout</a>
                        </nav>
                        :
                        <nav className='="user-not-logged-in'>
                            <Link className="nav-link" to="/signin">Sign In</Link>
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                        </nav>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header