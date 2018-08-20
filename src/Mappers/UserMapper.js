import { addToUsers, removeFromUsers, userCreateClearState, updateUser, refreshUsers} from '../ActionCreators/Users'


const mapStateToProps = state => {
    return { 
      users: state.users
    };
  }
  
const mapDispatchToProps = dispatch => {
    return {
        refreshUserList (successCallback, errorCallback)
        {
            return dispatch (refreshUsers(successCallback, errorCallback));
        },

        removeUser (user, successCallback, errorCallback)
        {
            return dispatch (removeFromUsers (user, successCallback, errorCallback));
        },

        addUser (user, successCallback, errorCallback)
        {
            return dispatch (addToUsers(user, successCallback, errorCallback));
        },
        updateUser (user, successCallback, errorCallback)
        {
            return dispatch (updateUser(user, successCallback, errorCallback));
        },
        userCreateClearState ()
        {
            return dispatch (userCreateClearState ());
        }
    }
}

export { mapStateToProps, mapDispatchToProps};

