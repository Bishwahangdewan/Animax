import React from 'react';
import Google from '../../assets/google.png';

import './CustomButton.styles.scss';

import { Link } from 'react-router-dom';

const CustomButton = (props) => (
    <div>
        {props.link ?
            <Link to={`/${props.link}`} className={`${props.primary ? 'primary-btn' : ''} ${props.google ? 'google' : ''} btn`}>
                {props.google ? <img src={Google} alt="google" /> : ""}
                {props.children}
            </Link>
            :
            <button className={`${props.primary ? 'primary-btn' : ''} ${props.google ? 'google' : ''} btn`}>
                {props.google ? <img src={Google} alt="google" /> : ""}
                {props.children}
            </button>
        }
    </div>
)

export default CustomButton;