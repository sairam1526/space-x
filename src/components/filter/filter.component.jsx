import React from 'react';
import { connect } from 'react-redux';

import { selectLaunchYear, selectLaunchStatus, selectLandingStatus } from '../../redux/filter/filter.selectors';
import { setLaunchYear, setLaunchStatus, setLandingStatus } from '../../redux/filter/filter.actions';
import { fetchSpaceXAPIStart } from '../../redux/space-x/space-x.actions';
import LAUNCH_YEARS from './filter-data';

import './filter.styles.css';

const Filter = ({ launchYear, 
                launchStatus,
                landingStatus,
                setLaunchYear, 
                setLaunchStatus,
                setLandingStatus,
                fetchSpaceXAPIStart }) => {

    const handleClickYear = event => {
        setLaunchYear(parseInt(event.target.value));
        fetchSpaceXAPIStart();
    }

    const handleClickLaunchStatus = event => {
        let status = event.target.value.toLowerCase();
        if( launchStatus === status ){
            setLaunchStatus('');
        } else {
            setLaunchStatus(status);
        }
        fetchSpaceXAPIStart();
    }

    const handleClickLandingStatus = event => {
        let status = event.target.value.toLowerCase();
        if( landingStatus === status ){
            setLandingStatus('');
        } else {
            setLandingStatus(status);
        }
        fetchSpaceXAPIStart();
    }

    return (
        <div className="filter-container">
            <div className="filter-heading">
                Filters
            </div>
            <div className="filter-section">
                <div className="section-heading">
                    Launch Year
                </div>
                <div className="section-content">
                    {
                        LAUNCH_YEARS.map(year => (
                            <input 
                                type="button" 
                                key={year} 
                                className={`filter-prop ${launchYear === year? 'prop-selected':''}`} 
                                value={ year }
                                onClick = { handleClickYear }
                            />
                        ))
                    }
                </div>
            </div>
            <div className="filter-section">
            <div className="section-heading">
                    Successful Launch
                </div>
                <div className="section-content">
                    <input 
                        type="button" 
                        className={`filter-prop ${ launchStatus === 'true'? 'prop-selected':'' }`} 
                        value="True"
                        onClick= { handleClickLaunchStatus }
                    />
                    <input 
                        type="button" 
                        className={`filter-prop ${ launchStatus === 'false'? 'prop-selected':'' }`} 
                        value="False"
                        onClick= { handleClickLaunchStatus }
                    />
                </div>
            </div>
            <div className="filter-section">
            <div className="section-heading">
                    Successful Landing
                </div>
                <div className="section-content">
                    <input 
                        type="button" 
                        className={`filter-prop ${ landingStatus === 'true'? 'prop-selected':'' }`} 
                        value="True"
                        onClick= { handleClickLandingStatus }
                    />
                    <input 
                        type="button" 
                        className={`filter-prop ${ landingStatus === 'false'? 'prop-selected':'' }`} 
                        value="False"
                        onClick= { handleClickLandingStatus }
                    />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    launchYear: selectLaunchYear(state),
    launchStatus: selectLaunchStatus(state),
    landingStatus: selectLandingStatus(state)  
});

const mapDispatchToProps = dispatch => ({
    setLaunchYear: year => dispatch(setLaunchYear(year)),
    setLaunchStatus: launchStatus => dispatch(setLaunchStatus(launchStatus)),
    setLandingStatus: landingStatus => dispatch(setLandingStatus(landingStatus)),
    fetchSpaceXAPIStart: () => dispatch(fetchSpaceXAPIStart())
});

export default connect(mapStateToProps, mapDispatchToProps )(Filter);