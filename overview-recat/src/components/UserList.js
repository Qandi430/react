import React, {Component} from 'react';
import User from './User';

class UserList extends Component{
    onEdit = user =>{
        this.props.onEdit(user);
    }
    onDelete = user =>{
        this.props.onDelete(user);
    }
    render(){
        const userList = this.props.users.map(user=>(
            <User data={user} key = {user.id} onEdit={this.onEdit} onDelete={this.onDelete}/>
        ))

        return <div>{userList}</div>
    }
}

export default UserList