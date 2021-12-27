import React from 'react';
import Google from '../../assets/google.png';

import './CustomButton.styles.scss';

const CustomButton = (props) => (
    <button className={`${props.primary ? 'primary-btn' : ''} ${props.google ? 'google' : ''} btn`}>
        {props.google ? <img src={Google} alt="google" /> : ""}
        {props.children}
    </button>
)

export default CustomButton;