const app = (state = { order: 'default', display: 'now playing', search: '' }, { type, display, search }) => {
    switch(type) {
        case 'change display':
            return { ...state, display: display };
        case 'update search':
            return { ...state, search: search };
        default:
            return state;
    }
}

export default app;
