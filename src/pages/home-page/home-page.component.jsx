import React from 'react';

import Filter from '../../components/filter/filter.component';
import Cards from '../cards/cards.component';

import './home-page.styles.css';

const HomePage = () => {

    return (
        <div className="home-page">
            <div className="main-header">
                SpaceX Launch Programs
            </div>
            <div className="main-section">
                <>
                    <Filter/>
                </>
                <>
                    <Cards/>
                </>
            </div>
            <div className="main-footer">
                Developed by Venkata Sairam
            </div>
        </div>
    );
}



export default HomePage;