import React from 'react';

import Search from './Search.jsx';
import LeftBar from './LeftBar.jsx';
import Center from './Center.jsx';

const Discover = () => (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{flexGrow: 1, flexBasis: 200, flex: '0 0 200px'}}>
            <Search />
            <LeftBar />
        </div>
        <div style={{flexGrow: 1, flexBasis: 'auto'}}><Center /></div>
    </div>
);

export default Discover;
