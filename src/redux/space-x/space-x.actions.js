import {spaceXActionTypes} from './space-x.action.types';

export const fetchSpaceXAPIStart = () => ({
    type: spaceXActionTypes.API_FETCH_START
});

export const fetchSpaceXAPISuccess = (spaceXdata) => ({
    type: spaceXActionTypes.API_FETCH_SUCCESS,
    payload: spaceXdata
});

export const fetchSpaceXAPIFailure = (errorMessage) => ({
    type: spaceXActionTypes.API_FETCH_FAILURE,
    payload: errorMessage
});