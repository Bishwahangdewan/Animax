import React from 'react';

import './search-item.styles.scss';

import { Icon } from '@iconify/react';

import { Link } from 'react-router-dom';

const SearchItem = ({ anime }) => {
    // <img src={`/assets/displayImages/cover-image/${anime.img}`} />

    const bgImg = {
        backgroundImage: `url(/assets/displayImages/cover-image/${anime.img})`,
        backgroundSize: 'cover'
    }

    return (
        <div className="search-item-container">
            <div className="search-img-container" style={bgImg}>

            </div>

            <div className='search-content-container'>
                <h2>{anime.title}</h2>

                <Link className='search-details-link' to={`/animeDetails/${anime.id}`}><span className='search-link'>More</span> <Icon className="search-link-icon" icon="carbon:information-filled" /></Link>
            </div>
        </div>
    )
}

export default SearchItem;