import React from 'react';
import { connect } from 'react-redux';

import UserItem from './UserItem';
import { addToUsers, removeFromUsers} from '../ActionCreators/Users';

const UserItemList = ({users, removeUser}) =>  
{
    return (
        <div className="user-list list-group">
            {users && users.data && users.data.map ((item, index) => <UserItem key={item.id} item={item} onRemoveClicked={removeUser}/>)}

            {/* <Modal 
                id="confirmDeletionModal" 
                title="Confirmation" 
                message="Are you sure you want to remove this item?" 
                OnOkClicked={this.handleModalClick.bind (this)}
                /> */}
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
        },
        updateUser (user)
        {
            dispatch (this.updateUser(user))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (UserItemList);