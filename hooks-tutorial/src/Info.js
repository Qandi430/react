import React, {useState,useEffect, useReducer} from 'react';
import useInput from  './useInput';

// function reducer(state, action){
//     return{
//         ...state,
//         [action.name]: action.value
//     }
// }

const Info = () => {
    const [state, onChange] = useInput({
        name : '',
        nickName: ''
    })

    const {name, nickName} = state;
    // const onChange = e => {
    //     dispatch(e.target);
    // }
    // const [name, setName] = useState('');
    // const [nickName, setNickName] = useState('');

    // //렌더링 될때 마다 실행
    // useEffect(() => {
    //     console.log("렌더링 완료");
    //     console.log({name,nickName});
    // })

    // //마운트 될떄만 실행
    // useEffect(() => {
    //     console.log("마운트 완료")
    // },[])

    // //특정 값이 변경될 때 실행
    // useEffect(() => {
    //     console.log("name이 변경됨")
    // },[name]);

    // //뒷정리하기
    // useEffect(() => {
    //     console.log('effect');
    //     console.log(name);
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     }
    // },[]);

    // const onChangeName = e => {
    //     setName(e.target.value);
    // };

    // const onChangeNickName = e => {
    //     setNickName(e.target.value);
    // };

    return(
        <div>
            <div>
                <input type="text" name="name" value={name} onChange={onChange}/>
                <input type="text" name="nickName" value={nickName} onChange={onChange}/>
            </div>
            <div>
                <div><b>이름:</b>{name}</div>
                <div><b>닉네임:</b>{nickName}</div>
            </div>
        </div>
    )    
}

export default Info;