import axios from 'axios';


function refreshUsers ()
{
    return dispatch => {
        return axios.get ("https://reqres.in/api/users?page=1&per_page=100")
            .then (response => {
                dispatch ({
                    type: "USERS_REFRESH",
                    users: response.data
                });
            });    
    }
}

function addToUsers (user)
{
    return {
        type: "USER_ADD",
        user
    }
}

function removeFromUsers (user)
{
    return {
        type: "USER_REMOVE",
        user
    }
}


export { refreshUsers, addToUsers, removeFromUsers };
