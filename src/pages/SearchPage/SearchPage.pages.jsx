import React, { useState, useEffect } from 'react';

//import styles
import './search-page.styles.scss';

//import components
import SearchBox from '../../components/SearchBox/SearchBox.component';
import SearchResults from '../../components/SearchResults/SearchResults.component';

//import data
import { AnimeData } from '../../pages/DashboardPage/animeData';

const SearchPage = () => {

    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        if (searchValue !== "") {
            let finalResult = [];

            AnimeData.forEach(category => {
                let categoryResults = [];
                categoryResults = category.anime_list.filter(anime => anime.title.toLowerCase().includes(searchValue))

                categoryResults.forEach(result => finalResult.push(result));
            })

            setSearchResult(finalResult);
        }
    }, [searchValue])

    const handleOnChange = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <div>
            <SearchBox handleOnChange={(e) => handleOnChange(e)} />

            <SearchResults searchResult={searchResult} />

        </div>
    )
}

export default SearchPage;