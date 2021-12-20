import React from 'react';

import './landing.styles.scss';

//import components
import CustomButton from '../../components/custom-button/CustomButton.component';

const LandingPage = () => (
    <div className="landing">
        {/* Showcase Section*/}
        <div className='showcase-container'>
            <div className="darken">
                <div className='showcase-content'>
                    <h1>Watch <span className="text-primary">ANIME</span> Anytime</h1>
                    <p>Watch your favourite Anime. You need to sign in in order to watch Anime. </p>
                    <CustomButton primary>SIGN IN</CustomButton>
                </div>
            </div>
        </div>
    </div>
)

export default LandingPage;