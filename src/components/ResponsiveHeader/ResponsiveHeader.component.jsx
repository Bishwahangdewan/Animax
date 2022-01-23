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

//import iconify
import { Icon } from '@iconify/react';

//import styles
import './responsive-header.styles.scss';


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
                        ""
                        :
                        <nav className='="user-not-logged-in'>
                            <Link className="nav-link" to="/signin">Sign In</Link>
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                        </nav>
                    }
                </div>
            </div>


            <div className='bottom-links'>
                <nav >
                    <Link className="nav-link" to="/signin">
                        <span>Home</span> <Icon className="search-icon" icon="ant-design:home-filled" />
                    </Link>
                    <Link className="nav-link" to="/signin">
                        <span>Anime Shows</span> <Icon className="search-icon" icon="ic:round-watch-later" />
                    </Link>
                    <Link className="nav-link" to="/search">
                        <span>Search</span> <Icon className="search-icon" icon="octicon:search-16" />
                    </Link>
                    <a className="nav-link" onClick={() => handleLogout()}>Logout</a>
                </nav>
            </div>
        </div>
    )
}

export default Header