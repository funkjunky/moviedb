const movies = (state = [], action) => {
    switch(action.type) {
        case 'add movies':
            console.log('length: ', action.movies.length);
            return [...state, ...action.movies];
        default:
            return state;
    }
}

export default movies;
