import React from 'react';

//styles
import './episode-list.styles.scss';

//import components
import SingleEpisode from '../SingleEpisode/SingleEpisode.component';

const EpisodeList = ({ allEpisodes }) => {

    const singleEpisodeDisplay = (
        <div>
            {allEpisodes.season_episodes.map((episode, index) => <SingleEpisode key={index} episode={episode}></SingleEpisode>)}
        </div>
    )

    return (
        <div className="episode-list-container">
            {singleEpisodeDisplay}
        </div>
    )
}

export default EpisodeList;