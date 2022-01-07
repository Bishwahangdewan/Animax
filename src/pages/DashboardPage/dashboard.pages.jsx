import React from 'react';

//import Styles
import './dashboard.styles.scss';

//import components
import TopDisplay from '../../components/TopDisplay/topDisplay.component';
import AnimeCollectionPreview from '../../components/AnimeCollectionPreview/anime-collection-preview';

//import data
import { AnimeData } from './animeData';

const Dashboard = () => {

    const displayCollectionPreview = (
        <div>
            {AnimeData.map((data, index) => (
                <AnimeCollectionPreview key={index} data={data} />
            ))}
        </div>
    )

    return (
        <div className="dashboard-container">
            <TopDisplay />

            {displayCollectionPreview}
        </div>
    )
}

export default Dashboard;