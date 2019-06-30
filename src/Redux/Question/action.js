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