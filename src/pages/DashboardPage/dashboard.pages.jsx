import React from 'react';

//import Styles
import './dashboard.styles.scss';

//import components
import TopDisplay from '../../components/TopDisplay/topDisplay.component';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component';

//import data
import { AnimeData } from './animeData';

const Dashboard = () => {
    console.log(AnimeData)
    return (
        <div className="dashboard-container">
            <TopDisplay />
            <div className="collection-preview-top-container">
                {AnimeData.map((collection, index) => (
                    <CollectionPreview key={index} collection={collection} />
                ))}
            </div>
        </div>
    )
}

export default Dashboard;