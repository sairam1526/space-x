import { combineReducers } from 'redux';
import spaceXReducer from './space-x/space-x.reducer';
import filterReducer from './filter/filter.reducer';

const rootReducer = combineReducers({
    spaceXData: spaceXReducer,
    filter: filterReducer
});

export default rootReducer;

