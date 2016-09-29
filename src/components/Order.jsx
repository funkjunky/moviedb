import React from 'react';

import { BLUE_TEXT } from '../constants/colors.jsx';

const Order = () => (
    <div>
        <ul style={{listStyleType: 'none'}}>
            <li style={{borderRight: '1px solid gray', float: 'left', paddingRight: 5, marginRight: 5}}>Release Date</li>
            <li style={{color: BLUE_TEXT}}>Popularity</li>
        </ul>
    </div>
);

export default Order;
