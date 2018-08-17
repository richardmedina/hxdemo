import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const reducer = (state, action) => {
    let newState = state;
    console.log ("old state: " + JSON.stringify(state));
    switch (action.type)
    {
        case "USER_REMOVE":
            newState = {
                ...state,
                users: {
                    ...state.users,
                    data : state.users.data.filter (item => item.id !== action.user.id)
                }
            };
        break;

        case "USERS_REFRESH":
            newState = {
                ...state,
                users: { 
                    ...action.users 
                }
            }
        break;
        default:
            newState = state;
            break;
    }

    console.log ("newState: " + JSON.stringify (newState));

    return newState;
}

let initialState = {
    users: []
};

export default createStore(reducer, initialState, applyMiddleware (thunk));

