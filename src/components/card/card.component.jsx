import React from 'react';

import './card.styles.css';

const Card = ({mission}) => {

    const { flight_number,
            launch_success,
            launch_year,
            mission_id,
            mission_name, 
            rocket:{first_stage:{cores}},
            links:{mission_patch_small}} = mission;
    const { land_success } = cores[0];
    return (
        <div className="card">
            <div className="img-card">
                <img defer className="imge" src={mission_patch_small} alt={mission_name}
                />
                
            </div>
            <div className="mission-name">{mission_name}#{flight_number}</div>
            <div className="mission-ids">
                <div className="prop-label">Mission Ids:</div>
                <ul>
                    {
                       mission_id.length ?
                    mission_id.map(id => <li key={id}>{id}</li>) 
                    :
                    null
                    }
                </ul>
            </div>
            <div className="display-prop">
                <span className="prop-label">Launch Year:</span>
                <span className="prop-value">{launch_year}</span>
            </div>
            <div className="display-prop">
                <span className="prop-label">Successful Launch: </span>
                <span className="prop-value">{launch_success.toString()}</span>
            </div>
            <div className="display-prop">
                <span className="prop-label">Successful Landing: </span>
                <span className="prop-value">{land_success?"true":"false"}</span>
            </div>
        </div>
    );
}


export default Card;