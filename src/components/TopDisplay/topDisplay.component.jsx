import React, { useState } from 'react';

//import styles
import './topDisplay.styles.scss';

//import assets
import DisplayImage from '../../assets/displayImages/your_name.jpg';
import Video from '../../assets/video/your_name.mp4';

//import components
import CustomButton from '../custom-button/CustomButton.component';

const TopDisplay = () => {

    const [toggleVideo, setToggleVideo] = useState(false);

    //background image
    const backImg = {
        backgroundImage: `url(${DisplayImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    //full screen height
    const fullHeight = {
        height: '100vh',
        width: '100%'
    }

    //After 3 seconds of hover change to video
    const changeToVideo = () => {
        setTimeout(() => {
            setToggleVideo(true)
        }, 1000)
    }

    //Change to image on mouse leave
    const changeToImage = () => {
        setToggleVideo(false);
    }

    //const displayContent
    const displayContent = () => (
        <div>
            <div className='overlay'></div>

            <div className='container'>
                <div className='display-content'>
                    <h1>Your Name</h1>
                    <p> Bored of the town, Mitsuha Miyamizu a high school girl wishes to be a Tokyo boy in her next life. One day, she inexplicably begins to switch bodies intermittently with Taki Tachibana.</p>

                    <div className="button-container">
                        <CustomButton>View Details</CustomButton>
                        <CustomButton primary>Watch</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div onMouseEnter={() => changeToVideo()} onMouseLeave={() => changeToImage()} className="display">
            {toggleVideo ?

                <div className="display-container">
                    <video autoPlay loop id="myVideo" style={toggleVideo ? fullHeight : ''}>
                        <source src={Video} type="video/mp4" />
                    </video>

                    <div className="video-container">
                        {displayContent()}
                    </div>
                </div>

                :
                <div className="display-container" style={backImg}>
                    {displayContent()}
                </div>
            }
        </div>
    )
}

export default TopDisplay;