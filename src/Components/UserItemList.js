import React from 'react';
import { connect } from 'react-redux';

import UserItem from './UserItem';
import { addToUsers, removeFromUsers} from '../ActionCreators/Users';

const UserItemList = ({users, removeUser}) =>  
{
    return (
        <div className="user-list list-group">
            {users && users.data && users.data.map ((item, index) => <UserItem key={item.id} item={item} onRemoveClicked={removeUser}/>)}
        </div>
    );
}

const mapStateToProps = state => {
    return { 
      users: state.users 
    };
  }
  
const mapDispatchToProps = dispatch => {
    return {
        refreshUsers ()
        {
            dispatch (this.refreshUsers())
        },

        removeUser (user)
        {
            dispatch (removeFromUsers (user));
        },

        addUser (user)
        {
            dispatch (addToUsers(user))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (UserItemList);