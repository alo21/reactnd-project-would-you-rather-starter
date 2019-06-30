const initialState = {
    users: [],
    logged: {}
};

const reducer = (state = initialState, action) => {

    let users;
    // let loggedUser;

    if (action.type === 'ADD_USER') {

        users = state.users;
        users.push(action.payload);
        // loggedUser = action.payload;


        return {
            ...state,
            users: users,
            // logged: loggedUser
        }
    } else if (action.type === 'LOGOUT') {

        return {
            ...state,
            logged: []
        }

    } else if (action.type === 'LOGIN') {

        return {
            ...state,
            logged: action.payload
        }

    } else if (action.type === 'ADD_QUESTION_TO_USER') {


        let loggedUser = state.logged;

        loggedUser.questions.push(action.payload);


        return {
            ...state,
            logged: loggedUser
        }
    } else if (action.type === 'ADD_ANSWER_TO_USER') {


        let loggedUser = state.logged;

        const key = action.payload.questionId;
        const answer = action.payload.answer;

        let answers = loggedUser.answers;

        Object.assign(answers, {[key]: answer});


        return {
            ...state,
            logged: loggedUser
        }
    }


    return state
};

export default reducer;