import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'
import promise from 'redux-promise';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import fetch from 'isomorphic-fetch';

import reducers from './reducers.jsx';
import { getNowPlaying } from './actions.jsx';

import App from './components/App.jsx';
import Discover from './components/Discover.jsx';

//import Prep_MovieDetails from './components/Prep_MovieDetails.jsx';

let loggerMiddleware = createLogger();

let store = createStore(reducers, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
));

const history = syncHistoryWithStore(browserHistory, store);

const getMovie = (nextState, replace, next) => {
    //do async action, then call next...
    console.log('nextState: ', nextState, nextState.routes[1].component.props);
    fetch('https://api.themoviedb.org/3/movie/' + nextState.params.id + '?api_key=06932897b1a054a41b89841e1e8767de')
        .then(response => response.json())
        .then(movie => {
            store.dispatch({type: 'set_movie_details', id: movie.id, details: movie})
        });

    next();
}

//<Route path="/movie/:id" component={Prep_MovieDetails} />

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Discover} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

getNowPlaying(store.dispatch);
