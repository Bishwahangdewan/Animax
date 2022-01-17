import React, { useState } from 'react';

//react-router-dom
import { useParams } from 'react-router-dom';

//import styles
import './anime-details.styles.scss';

//import data
import { AnimeData } from '../DashboardPage/animeData';
import { useEffect } from 'react/cjs/react.development';

//import components
import DisplayGenre from '../../components/DisplayGenre/DisplayGenre.component';
import EpisodeList from '../../components/EpisodeList/EpisodeList.component';


const AnimeDetails = () => {
    const [animeDetails, setAnimeDetails] = useState({});
    const [animeGenre, setAnimeGenre] = useState([]);
    const [animeSeasons, setAnimeSeasons] = useState([]);
    const [currentSeason, setCurrentSeasons] = useState(1);
    const [currentSeasonDetails, setCurrentSeasonDetails] = useState({ season: "", season_episodes: [] });

    const { id } = useParams();

    useEffect(() => {
        AnimeData.forEach(category => {
            category.anime_list.forEach(anime => {
                if (anime.id === id) {
                    setAnimeDetails(anime);
                    setAnimeGenre(anime.genre)
                    setAnimeSeasons(anime.episodes)

                    animeSeasons.forEach(seasons => {
                        if (parseInt(seasons.season) === currentSeason) {
                            setCurrentSeasonDetails(seasons)
                        }
                    })
                }
            })
        })

    }, [currentSeason, animeSeasons])

    //bg img
    const bgImg = {
        backgroundImage: `url('/assets/displayImages/back-img/${animeDetails.img}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    //showGenre
    const showGenre = (
        animeGenre.map((eachGenre, index) => <DisplayGenre key={index} genre={eachGenre} />)
    )

    //seasons option for select tag
    const seasons = (
        animeSeasons.map((eachSeason, index) => <option key={index} value={eachSeason.season}>{eachSeason.season}</option>)
    )


    //handle season change
    const handleSeasonChange = (e) => {
        setCurrentSeasons(parseInt(e.target.value));
    }

    return (
        <div className="anime-details-container">

            <div className="dark-overlay"></div>

            <div className="details-top" style={bgImg} >

                <div className="details-content">
                    <div className='title-image'>
                        <img src={`/assets/titleImages/${animeDetails.titleImg}`} />
                    </div>

                    <p>{animeDetails.description}</p>
                    <p>Release Year : {animeDetails.release_year}</p>

                    <div className="genreContainer" >{showGenre}</div>
                </div>
            </div>

            <div className="episode-container">
                <h2>Episodes</h2>

                <div className="season-dropdown">
                    <span>Season : </span>
                    <select className="dropdown" onChange={(e) => handleSeasonChange(e)}>
                        {seasons}
                    </select>
                </div>
            </div>


            <EpisodeList season={currentSeason} allEpisodes={currentSeasonDetails} />
        </div>
    )
}

export default AnimeDetails;