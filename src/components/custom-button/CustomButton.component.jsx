import React from 'react';
import Google from '../../assets/google.png';

import './CustomButton.styles.scss';

import { Link } from 'react-router-dom';

const CustomButton = (props) => (
    <Link to="/" className={`${props.primary ? 'primary-btn' : ''} ${props.google ? 'google' : ''} btn`}>
        {props.google ? <img src={Google} alt="google" /> : ""}
        {props.children}
    </Link>
)

export default CustomButton;