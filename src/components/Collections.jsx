import React from 'react';

import { LEFT_BAR_HEADER, LEFT_BAR_LI } from '../constants/styles.jsx';

//TODO: use an API here
const Collections = () => (
    <div>
        <h2 style={LEFT_BAR_HEADER}>Collections</h2>
        <ul style={LEFT_BAR_LI}>
            <li>Me and Bob</li>
            <li>Travel Movies</li>
        </ul>
    </div>
);

export default Collections;
