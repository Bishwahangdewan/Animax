import React, { useState } from 'react';

//iconify library
import { Icon } from '@iconify/react';

//react-router-components
import { Link } from 'react-router-dom';


//import styles
import './collection-item.styles.scss';


const CollectionItem = ({ anime }) => {

    const [showDetails, setShowDetails] = useState(false);

    const bgImg = {
        backgroundImage: `url('/assets/displayImages/cover-image/${anime.img}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }

    const collectionItemContent = () => (
        <div className="collection-item-content">
            <div className="content-top">
                <h2>{anime.title}</h2>
                <Link to={`/animeDetails/${anime.id}`}>
                    <Icon className="icon" icon="grommet-icons:circle-information" />
                </Link>
            </div>
            <p className="season">No of Seasons: {anime.no_of_seasons}</p>
            <p>{anime.description.substr(0, 110) + "..."}</p>
        </div>
    )

    return (
        <div className="collection-item-top-container" onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
            <div className="collection-item-container" style={bgImg}>

            </div>

            {showDetails ? collectionItemContent() : ""}
        </div>
    )
}

export default CollectionItem;

