import React, { useState } from 'react';

//import styles
import './anime-collection-preview.scss';

//import components
import AnimeCard from '../AnimeCard/anime-card.component';

const AnimeCollectionPreview = ({ data }) => {

    const [trackIndex, setTrackIndex] = useState(3);
    const [baseIndex, setBaseIndex] = useState(0);

    const displayAnimeCards = () => {
        let collection = [];

        for (var i = baseIndex; i <= trackIndex; i++) {
            if (data.anime_list[i]) {
                collection.push(data.anime_list[i])
            }
        }

        return collection.map((anime, index) => <AnimeCard key={index} data={anime} />)
    }

    return (
        <div className="preview-container">
            <h2>{data.label}</h2>

            <section id="section1">
                <a href="#section3"></a>
                {displayAnimeCards()}
                <a href="#section2"></a>
            </section>
        </div>
    )
}

export default AnimeCollectionPreview;