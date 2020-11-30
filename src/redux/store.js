import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import logger from 'redux-logger';

import rootSaga from './root-saga';
import rootReducer from './rootReducer';

const sagaMiddleWare = createSagaMiddleWare();
const middleWares = [sagaMiddleWare];

middleWares.push(logger);

const store = createStore(rootReducer,applyMiddleware(...middleWares));
sagaMiddleWare.run(rootSaga);

export default store;
