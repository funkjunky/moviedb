import { combineReducers } from 'redux';

import movies from './reducers/data/movies.jsx';
import app from './reducers/app.jsx';

const reducers = combineReducers({
    data: combineReducers({movies}),
    app
});

export default reducers;
