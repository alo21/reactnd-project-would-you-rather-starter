export const addUser= user => {
    return{
        type: 'ADD_USER',
        payload: user
    }
};

export const logoutUser = () => {
    return {
        type: 'LOGOUT',
    }
};

export const loginUser = user => {
    return {
        type: 'LOGIN',
        payload: user
    }
};


export const addQuestionIdToUser = question => {
    return {
        type: 'ADD_QUESTION_TO_USER',
        payload: question
    }
};

export const addAnswerToUser = (questionId, answer) => {
    return {
        type: 'ADD_ANSWER_TO_USER',
        payload: {questionId, answer}
    }
};

