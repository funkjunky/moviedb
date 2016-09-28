import React from 'react';

const MovieThumb = ({movie}) => (
    <span>
        <img style={{width: 30, height: 60}} src={'http://image.tmdb.org/t/p/w500/' + movie.poster_path} />
        {movie.title}
    </span>
);

export default MovieThumb;
