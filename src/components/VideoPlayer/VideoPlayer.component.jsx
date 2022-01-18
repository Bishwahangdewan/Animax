import React, { useState, useRef } from 'react';

//import styles
import './video-player.styles.scss';

//import iconify - react
import { Icon } from '@iconify/react';

//import react-router-dom hooks
import { useParams } from 'react-router-dom';

const VideoPlayer = () => {

    const [displayControl, setDisplayControl] = useState(true);
    const [playControl, setPlaycontrol] = useState(true);
    const [width, setWidth] = useState(0);

    const videoRef = useRef(null);

    const { anime_id, video_id } = useParams();

    const yellowBarWidth = {
        width: `${width}%`
    }


    //ICONS FUNCTIONALITY

    const toggleControls = () => {
        setDisplayControl(true);
    }

    const togglePlay = () => {
        setPlaycontrol(!playControl);
        console.log(videoRef)
        videoRef.current.play();
    }

    const togglePause = () => {
        setPlaycontrol(!playControl);
        videoRef.current.pause();
    }

    const toggleFullScreen = () => {
        videoRef.current.webkitEnterFullScreen()
    }

    const handleTimeChange = () => {
        const newWidth = Math.floor((videoRef.current.currentTime / videoRef.current.duration) * 100);
        setWidth(newWidth);
    }

    const skip = (sign) => {
        if (sign === "+") {
            videoRef.current.currentTime += 10;
        } else if (sign === "-") {
            videoRef.current.currentTime -= 10;
        }
    }

    const volume = (sign) => {
        if (sign === "+") {
            if (videoRef.current.volume < 1) { videoRef.current.volume += 0.1; }
        } else if (sign == "-") {
            if (videoRef.current.volume > 0) { videoRef.current.volume -= 0.1; }
        }
    }

    return (
        <div className="video-player-container" onMouseOver={() => toggleControls()}>
            <video ref={videoRef} onTimeUpdate={() => handleTimeChange()}>
                <source src={`/assets/videos/${anime_id}/${video_id}.mp4`} type="video/mp4" />
            </video>

            {displayControl ?
                <div className="controls">
                    <div className='video-bar'>
                        <div className="yellow-bar" style={yellowBarWidth}></div>
                    </div>

                    <div className="video-icons">
                        <div className="left-buttons">
                            {playControl ?
                                <Icon className="icon" icon="carbon:play-filled-alt" onClick={() => togglePlay()} />
                                :
                                <Icon className="icon" icon="carbon:pause-filled" onClick={() => togglePause()} />
                            }
                            <Icon className="icon" icon="fluent:skip-backward-10-32-filled" onClick={() => skip("-")} />
                            <Icon className="icon" icon="fluent:skip-forward-10-24-filled" onClick={() => skip("+")} />
                            <Icon className="icon" icon="carbon:volume-up-filled-alt" onClick={() => volume("+")} />
                            <Icon className="icon" icon="carbon:volume-down-filled-alt" onClick={() => volume("-")} />
                        </div>

                        <div className="video-title">
                            <p>{ }</p>
                        </div>

                        <div className="right-buttons">
                            <Icon className="icon" icon="ri:fullscreen-line" onClick={() => toggleFullScreen()} />
                        </div>
                    </div>
                </div> : ""}
        </div>
    )
}

export default VideoPlayer;