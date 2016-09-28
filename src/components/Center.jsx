import React from 'react';

import Order from './Order.jsx';
import MovieList from './MovieList.jsx';

const Center = () => (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <h1 style={{flexGrow: 1}}>Discover</h1>
            <div style={{flexGrow: 1}}><Order /></div>
            <div style={{flexGrow: 1}} style={{right: 0}}>R U</div>
        </div>
        <MovieList />
    </div>
);

export default Center;
