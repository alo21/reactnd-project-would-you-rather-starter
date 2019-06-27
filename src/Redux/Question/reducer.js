const initialState = {
    questions: []
};

const reducer = (state = initialState, action) => {

    let questions;

    console.log("I am in add question reducer", action)

    if(action.type === 'ADD_QUESTION'){

        console.log("I am in add question")

        questions = state.questions;

        questions.push(action.payload);

        return {
            ...state,
            questions: questions

        }
    }

    console.log(state)

    return state;

};

export default reducer;