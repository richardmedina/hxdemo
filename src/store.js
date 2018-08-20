import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const reducer = (state, action) => {
    let newState;
    switch (action.type)
    {
        case "USER_REMOVE":
            console.log ("Reducer: " + JSON.stringify(action));
            newState = {
                ...state,
                users: {
                    ...state.users,
                    data : action.showErrorMessage
                        ? state.users.data
                        : state.users.data.filter (item => item.id !== action.user.id)
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

        case "USER_ADD":
            newState = {
                ...state,
                users: {
                    ...state.users,
                    data: state.users.data.concat (action.user)
                }
            }
        break;

        case "USERCREATE_CLEARSTATE":
            newState = {
                ...state,
                result_USER_ADD: 0
            };
        break;

        case "USER_UPDATE":
            newState = {
                ...state
                // users: {
                //     ...state.users,
                //     //data: state.users.data.concat (action.user),
                //     data: state.users.data.map (u => u.id === action.user.id || u)
                    
                //     //arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);
                // }
            }
            console.log ("going: " + JSON.stringify(newState));
            // newState.users.data.forEach((e, i) => {
            //     if(e.id === action.user.id) {
            //         newState.data[i] = action.user;
            //     }
            // });
            if (newState.users && newState.users.data)
                for (let i =0; i < newState.users.data.length; i ++)
                {
                    if (newState.users.data[i].id === action.user.id)
                    {
                        newState.users.data[i] = action.user;
                    }
                }


            console.log ("going2: " + JSON.stringify(newState));

        //console.log ("updateUser.updated: " + JSON.stringify (newState));
        break;

        default:
            newState = state;
            break;
    }

    console.log ("newState: " + JSON.stringify(newState));

    return newState;
}

let initialState = {
    users: [],
    result: 0
};

export default createStore(reducer, initialState, applyMiddleware (thunk));

