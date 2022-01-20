import React from 'react';

import './search-box.styles.scss';

const SearchBox = ({ handleOnChange }) => {
    return (
        <div className='search-box-container'>
            <input className="search-input" type="text" placeholder="Search Anime" onChange={(e) => handleOnChange(e)} />
        </div>
    )
}

export default SearchBox;