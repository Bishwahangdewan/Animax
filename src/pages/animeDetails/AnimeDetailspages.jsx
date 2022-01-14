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


const AnimeDetails = () => {
    const [animeDetails, setAnimeDetails] = useState({})
    const [animeGenre, setAnimeGenre] = useState([])

    const { id } = useParams();

    useEffect(() => {

        AnimeData.forEach(category => {
            category.anime_list.forEach(anime => {
                if (anime.id === id) {
                    setAnimeDetails(anime);
                    setAnimeGenre(anime.genre)
                }
            })
        })
    }, [])

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
        </div>
    )
}

export default AnimeDetails;