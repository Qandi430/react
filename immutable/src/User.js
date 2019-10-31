import React,{Component} from 'react';

class User extends Component{

    shouldComponentUpdate(prevProps,prevState){
        return this.props.user !== prevProps.user;
    }

    render(){
        const {username} = this.props.user;
        console.log("%s 렌더링",username);

        return(
            <div>
                {username}
            </div>
        )
    }
}

export default User;