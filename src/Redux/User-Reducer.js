const initialState = {
    users: {}
};

const reducer = (state = initialState, action) => {

    if (action.type === 'ADD_USER') {

        console.log("In add User");
        console.log(action.payload);

        return {
            ...state,
            users: action.payload
        }
    }

    return state
};

export default reducer;