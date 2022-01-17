import React from 'react';

//import styles
import './video-player.styles.scss';

//import react-router-dom hooks
import { useParams } from 'react-router-dom';

const VideoPlayer = () => {

    const { anime_id, video_id } = useParams();

    console.log(anime_id, video_id)

    return (
        <div className="video-player-container">
            <video>
                <source src={`/assets/videos/${anime_id}/${video_id}.mp4`} type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoPlayer;