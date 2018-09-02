import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootSaga from './sagas';
import rootReducer from './reducers/root';

const logger = createLogger({ collapsed: true });

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(applyMiddleware(...[logger, sagaMiddleware]));

export const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);
