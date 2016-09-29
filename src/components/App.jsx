import React from 'react';

import Search from './Search.jsx';
import LeftBar from './LeftBar.jsx';
import Center from './Center.jsx';
import styles from '../../styles/main.scss'; 

const App = ({ children }) => (
    <div>
        {children}
    </div>
);

export default App;
