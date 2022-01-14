import React from 'react';

import './display-genre.styles.scss';

const DisplayGenre = ({ genre }) => {

    return (
        <div className="genre">
            {genre}
        </div>
    )
}

export default DisplayGenre;