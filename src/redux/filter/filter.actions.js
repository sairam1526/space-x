import filterTypes from './filter.types';

export const setLaunchYear = launchYear => ({
    type:filterTypes.SET_LAUNCH_YEAR,
    payload:launchYear
});

export const setLaunchStatus = launchStatus => ({
    type:filterTypes.SET_LAUNCH_STATUS,
    payload:launchStatus
});

export const setLandingStatus = landingStatus => ({
    type:filterTypes.SET_LANDING_STATUS,
    payload:landingStatus
});