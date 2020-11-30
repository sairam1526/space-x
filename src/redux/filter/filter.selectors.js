import { createSelector } from 'reselect';

export const selectFilter = state => state.filter;

export const selectLaunchYear = createSelector(
    [selectFilter],
    filter => filter.launchYear
);

export const selectLaunchStatus = createSelector(
    [selectFilter],
    filter => filter.launchStatus
);

export const selectLandingStatus = createSelector(
    [selectFilter],
    filter => filter.landingStatus
);

