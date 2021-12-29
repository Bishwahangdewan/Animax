import React from 'react';
import './loader.styles.scss';

import Loader from '../../assets/loader.gif';

const AppLoader = () => (
    <div className="loader-bg">
        <img src={Loader} alt="loader" />
    </div>
)

export default AppLoader