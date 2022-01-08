import React, { useState } from 'react';

//import styles
import './anime-collection-preview.scss';

//import components
import AnimeCard from '../AnimeCard/anime-card.component';

const AnimeCollectionPreview = ({ data }) => {

    const displayAnimeCards = (base, track) => {
        let collection = [];

        for (var i = base; i <= track; i++) {
            if (data.anime_list[i]) {
                collection.push(data.anime_list[i])
            }
        }

        return collection.map((anime, index) => <AnimeCard key={index} data={anime} />)
    }

    return (
        <div className="preview-container">
            <h2>{data.label}</h2>

            <div className='wrapper'>
                <section id="section1">
                    <a href="#section3">
                        <i className="fas fa-arrow-left"></i>
                    </a>
                    {displayAnimeCards(0, 4)}
                    <a href="#section2">
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </section>
            </div>
        </div>
    )
}

export default AnimeCollectionPreview;