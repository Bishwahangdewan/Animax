import React, { useState, useEffect } from 'react';

//import styles
import './topDisplay.styles.scss';

//import assets
import Video from '../../assets/video/your_name.mp4';
import { AnimeData } from '../../pages/DashboardPage/animeData';

//import components
import CustomButton from '../custom-button/CustomButton.component';

//import custom hook
import useWindowWidth from '../../utils/custom-hooks/window-width';

const TopDisplay = () => {

    const [toggleVideo, setToggleVideo] = useState(false);
    const [topDisplayData, setTopDisplayData] = useState({});

    const [width, setWidth] = useWindowWidth()

    useEffect(() => {
        AnimeData.forEach(category => {
            if (category.label === "Most Popular") {
                let index = Math.floor(Math.random() * 10);
                setTopDisplayData(category.anime_list[index]);
            }
        })
    }, [])

    //background image
    const backImg = {
        backgroundImage: `url(/assets/displayImages/dashboard-cover/${topDisplayData.img})`,
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
                    <div className="dashboard-title-image-container">
                        <img className="dashboard-title-image" src={`/assets/titleImages/${topDisplayData.titleImg}`} />
                    </div>
                    <p>{topDisplayData.description}</p>

                    <div className="button-container">
                        <CustomButton>View Details</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div onMouseEnter={() => changeToVideo()} onMouseLeave={() => changeToImage()} className="display">
            {width < 720 ?
                <div className="display-container" style={backImg}>
                    {displayContent()}
                </div>
                :
                toggleVideo ?
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