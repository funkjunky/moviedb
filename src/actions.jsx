import fetch from 'isomorphic-fetch';

export const getNowPlaying = (dispatch) => {
    const date = new Date();
    //TODO: below doesn't work past a month, but I don't have time to use momentjs
    const from = date.getFullYear() + '-' + date.getMonth() + '-' + (date.getDate() - 10);
    const to = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    return fetch('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=' + from + '&primary_release_date.lte=' + to + '&api_key=06932897b1a054a41b89841e1e8767de')
        .then(response => response.json())
        .then(page => dispatch({
            type: 'add movies',
            movies: page.results,
        }));
};
