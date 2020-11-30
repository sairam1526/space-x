import { spaceXActionTypes } from './space-x.action.types';

const INITIAL_STATE = {
    spaceXdata:[],
    isLoading:true,
    errorMessage: undefined
}
const spaceXReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case spaceXActionTypes.API_FETCH_START:
            return {
                ...state,
                isLoading:true
            };
        case spaceXActionTypes.API_FETCH_SUCCESS:
            return {
                ...state,
                isLoading:false,
                spaceXdata:action.payload
            };
        case spaceXActionTypes.API_FETCH_FAILURE:
            return {
                ...state,
                isLoading:false,
                errorMessage:action.payload
            };
        default:
            return state;
    }
}

export default spaceXReducer;