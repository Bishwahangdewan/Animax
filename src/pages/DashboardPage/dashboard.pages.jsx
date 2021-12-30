import React from 'react';

//import Styles
import './dashboard.styles.scss';

//import components
import TopDisplay from '../../components/TopDisplay/topDisplay.component';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <TopDisplay />
        </div>
    )
}

export default Dashboard;