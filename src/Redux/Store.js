// //App code
// function ratherbe(state =[], action) {
//     if (action.type == 'ADD_QUESTION') {
//
//         return state.concat([action.payload])
//     }
//
//     return state
// }
//
//
// function user(state =[], action) {
//     if (action.type == 'ADD_USER') {
//
//         return state.concat([action.payload])
//     }
//
//     return state
// }

// function bothReducer(state = {}, action) {
//     return{
//         ratherbe: ratherbe(state.ratherbe, action),
//         user: user(state.user, action)
//     }
// }

//Library code
function createStore(reducer) {

    let state;
    let listeners;

    const getState = () => state;

    const subscribe = (listener) => {
        listeners.push(listener)

        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    const dispatch = (action) => {
        state = reducer(state, action)

        listeners.forEach((listener)=>listener())
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}