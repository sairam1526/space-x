import filterTypes from './filter.types';

const INITIAL_STATE = {
    launchYear: undefined,
    launchStatus: '',
    landingStatus: ''
}

const filterReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case filterTypes.SET_LAUNCH_YEAR:
            return {
                ...state,
                launchYear: action.payload
            };
        case filterTypes.SET_LAUNCH_STATUS:
            return {
                ...state,
                launchStatus: action.payload
            };
        case filterTypes.SET_LANDING_STATUS:
            return {
                ...state,
                landingStatus: action.payload
            };
        default:
            return state;
    }
}

export default filterReducer;