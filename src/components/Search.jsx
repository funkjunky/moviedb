import React from 'react';

import { RED_BG } from '../constants/colors.jsx';

const Search = () => (
    <div style={{display: 'flex', backgroundColor: RED_BG, height: 85}}>
        <input style={{margin: 'auto'}} type="text" placeholder="Search movies..." />
    </div>
);

export default Search;
