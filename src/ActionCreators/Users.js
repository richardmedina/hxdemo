import axios from 'axios';

const RESULT_UNDEFINED = 0;
const RESULT_SUCCESS = 1;
const RESULT_ERROR = 2;

const DELAY = 0;


function userCreateClearState ()
{
    return {
        type: "USERCREATE_CLEARSTATE"
    };
}

function refreshUsers (successCallback = () => {}, errorCallback = () => {})
{
    return dispatch => {
        return axios.get ("https://reqres.in/api/users?page=1&per_page=100&delay=" + DELAY)
            .then (response => {
                if (response.status == 200)
                {
                    successCallback ();
                    return dispatch ({
                        type: "USERS_REFRESH",
                        users: response.data
                    });
                }
                errorCallback ();
            })
            .catch(error => {
                errorCallback ();
            });
    }
}

function addToUsers (user, successCallback, errorCallback)
{
    console.log ("addToUsers");
    
    return dispatch => {
        axios.post ("https://reqres.in/api/users?delay=" + DELAY, user)
        .then (response => {
            if (response.status == 201)
            {
                successCallback ();
                return dispatch ({
                    type: "USER_ADD",
                    user: response.data,
                    result: RESULT_SUCCESS
                });
            }
            errorCallback ();
        })
        .catch (error => {
            errorCallback ();
        });
    }
}

function removeFromUsers (user, successCallback, errorCallback)
{
    return dispatch => {
        axios.delete ("https://reqres.in/api/users/" + user.id + "?delay=" + DELAY)
            .then (response => {
                if (response.status == 204)
                {
                    successCallback ();
                    return dispatch ({
                        type: "USER_REMOVE",
                        user
                    });
                }
                errorCallback ();
            })
            .catch (error => {
                errorCallback ();
            });
    };
}


function updateUser (user, successCallback, errorCallback)
{
    console.log("updateUser http: Trying to update" + JSON.stringify(user));
    return dispatch => {
        axios.put ("https://reqres.in/api/users/" + user.id + "?delay=" + DELAY, user)
            .then (response => {
                console.log ("httpUpdateOK:" + JSON.stringify(response));
                if (response.status == 200)
                {
                    successCallback ();
                    return dispatch ({
                        type: "USER_UPDATE",
                        user
                    });
                }
                errorCallback ();
            })
            .catch (error => {
                console.log ("Error updating: " + JSON.stringify(error));
                errorCallback ();
            });
    };

    // return {
    //     type: "USER_UPDATE",
    //     user
    // };
}


export { refreshUsers, addToUsers, updateUser, removeFromUsers, userCreateClearState };
