import React from 'react';

import Main from './Main.jsx';
import Circles from './Circles.jsx';
import Collections from './Collections.jsx';
import { DARK_BG } from '../constants/colors.jsx';

const LeftBar = () => (
    <div style={{backgroundColor: DARK_BG, padding: 20}}>
        <Main />
        <Circles />
        <Collections />
    </div>
);

export default LeftBar;
