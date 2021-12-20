import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = (props) => (
    <button className={`${props.primary ? 'primary-btn' : ''} btn`}>{props.children}</button>
)

export default CustomButton;