import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'
import promise from 'redux-promise';
import App from './components/App.jsx';

//import reducers from './reducers.jsx';

let reducers = () => ({});

let loggerMiddleware = createLogger();

let store = createStore(reducers, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
