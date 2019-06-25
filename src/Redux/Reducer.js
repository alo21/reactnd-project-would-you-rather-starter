
const intitialState = {
    value: 0
};

const actions = {
    'ADD_ONE': addOne
};

function addOne(state, action) {
    return{
        value: [...state.value, action.payload]
    }
}

const reducer = (state, action) => {

        return 'State'
    };


export default {reducer, actions};
