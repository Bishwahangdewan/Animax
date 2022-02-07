import React from 'react';

import './landing.styles.scss';

//importing static images
import Pika from '../../assets/pika.png';
import Happy from '../../assets/happy.png';

//import components
import CustomButton from '../../components/custom-button/CustomButton.component';
import Accordion from '../../components/Accordion/accordion.component';

const LandingPage = () => (
    <div className="landing">

        {/* Showcase Section*/}
        <div className="showcase">
            <div className='showcase-container'>
                <div className="darken">
                    <div className='showcase-content'>
                        <h1>Watch <span className="text-primary">ANIME</span> Anytime</h1>
                        <p>Watch your favourite Anime. You need to sign in in order to watch Anime. </p>
                        <CustomButton link="signin" primary>SIGN IN</CustomButton>
                    </div>
                </div>
            </div>
        </div>

        {/* Sections*/}
        <div className="section">
            <div className="section-content">
                <h1><span className="text-primary">1000+</span> Anime shows in your hand</h1>
                <p>Animax has more than 1000 anime shows that are updated on a regular basis so you can enjoy anywhere , anytime</p>
            </div>

            <img className="pika" src={Pika} alt="section" />
        </div>

        <hr />

        {/*Sections*/}
        <div className="section">
            <img className="happy" src={Happy} alt="section" />

            <div className="section-content">
                <h1><span className='text-primary'>Download Anime</span> and watch it offline.</h1>
                <p>Save you favourite shows and watch it offline.</p>
            </div>

        </div>

        <hr />

        {/*Accordion*/}
        <Accordion />

        <hr />
    </div>
)

export default LandingPage;