//App code
function ratherbe(state =[], action) {
    if (action.type == 'ADD_QUESTION') {

        return state.concat([action.payload])
    }

    return state
}


function user(state =[], action) {
    if (action.type == 'ADD_USER') {

        return state.concat([action.payload])
    }

    return state
}

export {ratherbe, user};