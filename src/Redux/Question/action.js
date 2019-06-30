export const addQuestion = question => {

    return{
        type: 'ADD_QUESTION',
        payload: question
    }
};

export const setCurrentQuestion = question => {

    return{
        type: 'SET_CURRENT',
        payload: question
    }
};

export const addAnswerToQuestion = (questionId, answer, userId) => {

    return{
        type: 'ADD_ANSWER_TO_QUESTION',
        payload: {questionId, answer, userId}
    }
};