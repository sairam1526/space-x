import { takeLatest,all, call,put,select} from 'redux-saga/effects';
import { selectFilter } from '../filter/filter.selectors';

import {spaceXActionTypes} from './space-x.action.types';
import { SPACE_X_URL } from '../../utils/constants';
import { fetchSpaceXAPISuccess, fetchSpaceXAPIFailure } from './space-x.actions';

function* createUrl() {
    let url =  SPACE_X_URL;
    const filter = yield select(selectFilter);
    if(filter.launchYear)
        url += `&launch_year=${filter.launchYear}`;
    if (filter.launchStatus)
        url += `&launch_success=${filter.launchStatus}`;
    if (filter.landingStatus)
        url += `&land_success=${filter.landingStatus}`;
    return url;
}

export function* fetchSpaceXData(){
    try{
        const url = yield call(createUrl);
        const data = yield fetch(url)
        .then(res => res.json());
        yield put(fetchSpaceXAPISuccess(data));
    }catch(err){
        yield put(fetchSpaceXAPIFailure(err.message));
    }
}

export function* onFetchSpaceXApiStart() {
    yield takeLatest(spaceXActionTypes.API_FETCH_START,fetchSpaceXData);
}

export function* spaceXSagas(){
    yield all([
        call(onFetchSpaceXApiStart)
    ]);
}