import React, { useState } from 'react';

//import styles
import './anime-card.styles.scss';

const AnimeCard = ({ data }) => {

    const [isHidden, setIsHidden] = useState(true);

    const animeCardBackImg = {

    }

    return (
        <div className="anime-card-container" onMouseEnter={() => setIsHidden(false)} onMouseLeave={() => setIsHidden(true)}>
            <div className="anime-img-container">
                {/* FOR BACKGROUND IMAGE */}
            </div>


            <div className={`${isHidden ? 'hidden' : ''} anime-display-container`}>
                <h1>{data.title}</h1>
            </div>

        </div>
    )
}

export default AnimeCard;