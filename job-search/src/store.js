import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import jobsReducer from '../reducers/jobs';
import errorsReducer from '../reducers/errors';

// Initially imports are greyed out because they haven't been imported yet. As you put them in, they will fill in

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
|| compose;
const store = createStore(
    combineReducers({
        jobs: jobsReducer,
        errors: errorsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

console.log(store.getState());

export default store;

// This file creates a redux store that uses combineReducers and brought in thunk from redux-thunk as a middleware for managing the asynchronous API handling