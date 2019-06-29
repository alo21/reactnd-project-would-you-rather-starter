const initialState = {
    questions: []
};

const reducer = (state = initialState, action) => {

    let questions;


    if (action.type === 'ADD_QUESTION') {


        questions = state.questions;

        questions.push(action.payload);

        return {
            ...state,
            questions: questions

        }
    }


    return state;

};

export default reducer;