const initialState = {
    users: {},
    logged: {}
};

const reducer = (state = initialState, action) => {

    if (action.type === 'ADD_USER') {

        return {
            ...state,
            users: action.payload
        }
    }

    if (action.type === 'LOGIN_USER') {
        return {
            ...state,
            logged: action.payload
        }

    }

    return state
};

export default reducer;