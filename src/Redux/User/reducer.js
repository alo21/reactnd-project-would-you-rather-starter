const initialState = {
    users: [],
    logged: []
};

const reducer = (state = initialState, action) => {

    let users;
    let loggedUser;

    if (action.type === 'ADD_USER') {

        users = state.users;
        loggedUser = state.logged;

        users.push(action.payload);
        loggedUser = action.payload;


        return {
            ...state,
            users: users,
            logged: loggedUser
        }
    } else if (action.type === 'LOGOUT') {

        return {
            ...state,
            logged: []
        }

    } else if (action.type === 'LOGIN') {

        return {
            ...state,
            logged: action.payload
        }

    }

    return state
};

export default reducer;