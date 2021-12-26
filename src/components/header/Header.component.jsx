import React from 'react';

//logo import
import Logo from '../../assets/logo.png';

//react-router-components import
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className="header">
        <div>
            {/*-----LOGO------*/}

            <Link to='/'>
                <img className="logo" src={Logo} alt="logo" />
            </Link>

            {/*-------NAV LINKS--------*/}

            <nav>
                <Link className="nav-link" to="/signin">Sign In</Link>
                <Link className="nav-link" to="/signup">Sign Up</Link>
            </nav>
        </div>
    </div>
)

export default Header