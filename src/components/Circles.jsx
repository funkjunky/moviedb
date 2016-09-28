import React from 'react';

import { LEFT_BAR_HEADER, LEFT_BAR_LI } from '../constants/styles.jsx';

//TODO: use an API here
const Circles = () => (
    <div>
        <h2 style={LEFT_BAR_HEADER}>Your Movie Circles</h2>
        <ul style={LEFT_BAR_LI}>
            <li>This I Must See</li>
            <li>The Best</li>
        </ul>
    </div>
);

export default Circles;
