import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import movies from './reducers/data/movies.jsx';
import app from './reducers/app.jsx';

const reducers = combineReducers({
    data: combineReducers({movies}),
    app,
    routing: routerReducer,
});

export default reducers;
