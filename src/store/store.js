import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import loggerMiddleware from '../middlewares/loggerMiddleware';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;


 const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk, loggerMiddleware)
    )
);

export default store;