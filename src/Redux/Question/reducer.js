const initialState = {
    questions: [],
    current: {}
};

const reducer = (state = initialState, action) => {

    let questions;


    if (action.type === 'ADD_QUESTION') {


        console.log('question', action.payload);

        questions = state.questions;

        questions.push(action.payload);

        return {
            ...state,
            questions: questions

        }
    } else if (action.type === 'SET_CURRENT') {

        return {
            ...state,
            current: action.payload
        }


    }


    return state;

};

export default reducer;