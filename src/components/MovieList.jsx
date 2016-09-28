import React from 'react';
import { connect } from 'react-redux'

import MovieThumb from './MovieThumb.jsx';

const MovieList = ({data}) => (
    <div>
        {data.movies.map((movie) => (
            <MovieThumb movie={movie} />
        ))}
    </div>
);

export default connect(({data}) => ({data}))(MovieList);
