import React from 'react';

import MovieDetails from './MovieDetails.jsx';

const Prep_MovieDetails = React.createClass({
    componentWillMount() {
        getMovie(this.props.params.id);
    }

    render() {
        return <MovieDetails movie={store.getState().data.movies.find(this.props.params.id)} />
    }
});
