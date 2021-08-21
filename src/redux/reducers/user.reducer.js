let initialState = {
    userData: {}
}

export default function users(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state
            }
        default:
            return state;
    }
}