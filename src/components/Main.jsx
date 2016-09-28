import React from 'react';

import { LEFT_BAR_HEADER, LEFT_BAR_LI } from '../constants/styles.jsx';

const Main = () => (
    <div>
        <h2 style={LEFT_BAR_HEADER}>Main</h2>
        <ul style={LEFT_BAR_LI}>
            <li>Playing</li>
            <li>Discover</li>
            <li>Activity</li>
            <li>Top Charts</li>
            <li>New Releases</li>
        </ul>
    </div>
);

export default Main;
