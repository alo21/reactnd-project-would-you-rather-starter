const initialState = {
    questions: [],
    current: {}
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
    } else if (action.type === 'SET_CURRENT') {

        return {
            ...state,
            current: action.payload
        }


    } else if (action.type === 'ADD_ANSWER_TO_QUESTION') {


        let currentQuestion = state.questions.filter(question => {
            return question.id === action.payload.questionId
        });

        let currentVotes = currentQuestion[0][action.payload.answer];

        currentVotes.votes.push(action.payload.userId);



        return {
            ...state,
            currentQuestion
        }


    }


    return state;

};

export default reducer;