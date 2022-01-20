import React from 'react';
import SearchItem from '../SearchItem/SearchItem.component';

import './search-results.styles.scss';

const SearchResults = ({ searchResult }) => {
    console.log(searchResult)
    return (
        <div className="search-result-container">
            {searchResult.map(result => <SearchItem anime={result} />)}
        </div>
    )
}

export default SearchResults;