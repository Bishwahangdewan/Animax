import React from 'react';

//react-router-dom
import { Link } from 'react-router-dom';

//import styles
import './single-episode.styles.scss';

//iconify
import { Icon } from '@iconify/react';

//import react router dom utils
import { useParams } from 'react-router-dom';

const SingleEpisode = ({ episode }) => {

    const { id } = useParams();

    return (
        <div className="single-episode-container">
            <div className="episode-hover-container">
                <p className="episode-no">{episode.episode_no}</p>

                <div className="episode-img-container">
                    <img src={`/assets/videoThumbnails/${id}/${episode.episode_no}.jpg`} alt="thumbnail" />
                    <Icon className="play-button-icon" icon="gg:play-button-o" />
                </div>
                <div className="episode-details">
                    <p className="episode-title"><Link className="episode-link" to={`/video/${id}/${episode.episode_id}`}>{episode.episode_title}</Link></p>
                    <p className="episode-desc">{episode.episode_description}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleEpisode;