import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import MovieThumb from './MovieThumb.jsx';

const MovieList = ({data}) => (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {data.movies.map((movie) => (
            <Link to={"/movie/"+movie.title} key={movie.id}>
                <MovieThumb movie={movie} />
            </Link>
        ))}
    </div>
);

export default connect(({data}) => ({data}))(MovieList);
