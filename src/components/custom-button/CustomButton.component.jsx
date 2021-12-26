import React from 'react';
import './CustomButton.styles.scss';

import { Link } from 'react-router-dom';

const CustomButton = (props) => (
    <Link to="/" className={`${props.primary ? 'primary-btn' : ''} btn`}>{props.children}</Link>
)

export default CustomButton;