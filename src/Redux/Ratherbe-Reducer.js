const initialState = {
    ratherbe: {}
};

const reducer = (state = initialState, action) => {

    console.log("in ratherbe reducer");

    if (action.type === 'ADD_QUESTION') {

        console.log("In add question");

        return state.concat([action.payload])
    }

    return state
};

export default reducer;