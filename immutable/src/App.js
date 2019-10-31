import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import { Map,List,Record } from 'immutable';

//User를 위한 Record 생성
const User = Record({
  id : null,
  username : null,
});

//Data를 위한 Record 생성
const Data = Record({
  input:'',
  users : List()
});

class App extends Component{
  id = 3;
  
  state = {
    /**basic */
    // input : '',
    // users : [
    //   {id :1, username:'velopert',email:'public.velopert@gmail.com'},
    //   {id :2, username:'mjkim',email:'vleopert@gmail.com'},
    // ]

    /** immutable map list */
    // data : Map({
    //   input : '',
    //   users : List([
    //     Map({
    //       id : 1,
    //       username : 'velopert'
    //     }),
    //     Map({
    //       id : 2,
    //       username : 'mjkim'
    //     }),
    //   ])
    // })

    /** immutable Record */
    data : Data({
      users: List([
        User({
          id : 1,
          username : 'velopert'
        }),
        User({
          id : 2,
          username : 'mjkim'
        })
      ])
    })
  }

  onChange = (e) =>{
    // const {value} = e.target;
    // this.setState({
    //   input : value
    // })
    const {value} = e.target;
    const {data} = this.state;
    this.setState({
      data : data.set('input',value)
    })
  }
  onButtonClick = (e) => {
    // this.setState(({ users, input }) => ({
    //   input: '',
    //   users: users.concat({
    //     id: this.id++,
    //     username: input
    //   })
    // }))
    const{data} = this.state;
    // this.setState({
    //   data : data.set('input','')
    //              .update('users',users=>users.push(Map({id:this.id++,username:data.get('input')})))
    // })
    this.setState({
      data : data.set('input','').update('users',users=>users.push(new User({id:this.id++,username:data.input})))
    })
  }
  render(){
    const {onChange,onButtonClick} = this;
    // const {data} = this.state;
    // const input = data.get('input');
    // const users = data.get('users');

    const {data : {input,users}} = this.state;

    return(
      <div>
        <div>
          <input onChange = {onChange} value={input}/>
          <button onClick={onButtonClick}>추가</button>
        </div>
        <h1>사용자 목록</h1>
        <div>
          <UserList users={users} />
        </div>
      </div>
    )
  }

}

export default App;
