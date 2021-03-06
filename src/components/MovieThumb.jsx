import React from 'react';

const MovieThumb = ({movie}) => (
    <div style={{flexGrow: 1}}>
        <img style={{width: 130, height: 200}} src={'http://image.tmdb.org/t/p/w500/' + movie.poster_path} />
        <br />
        <p style={{fontSize: 12, fontWeight: 'bold'}}>{movie.title}</p>
    </div>
);

export default MovieThumb;
