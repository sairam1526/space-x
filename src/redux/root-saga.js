import { all, call } from 'redux-saga/effects';

import { spaceXSagas } from './space-x/space-x.sagas';

export default function* rootSaga() {
    yield all([
        call(spaceXSagas)
    ]);
}
