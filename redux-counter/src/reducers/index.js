import * as types from '../actions/ActionTypes';
import { Map,List } from 'immutable';

// const initialState = {
//     color:'black',
//     number : 0
// }

// /*
//     리듀서 함수를 정의. 리듀서는 state와 action을 파라미터로 받음
//     state가 undifined 일때(스토어가 생성될때) store의 기본값을 initialState로 사용
//     action.type 에 따라 다른 작업을 수행하고, 새 상태를 만들어서 반한
//     state를 직접 수정하면 안됨
//     기존 삭태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환
// */

// function counter(state = initialState,action){
//     switch(action.type){
//         case types.INCREMENT : 
//             return{
//                 ...state,
//                 number : state.number+1
//             }
//         case types.DECREMENT :
//             return {
//                 ...state,
//                 number : state.number-1
//             }
//         case types.SET_COLOR:
//             return {
//                 ...state,
//                 color : action.color
//             }
//         default:
//             return state;
//     }
// }


// /* 서블 리듀서를 하나로 합침 */

// const reducers = combineReducers({
//     numberData : number,
//     colorData : color
// })

/* create, remove 추가후 수정*/

// const initialState = {
//     counters : [
//         {
//             color :'black',
//             number : 0
//         }
//     ]
// }

// function counter(state = initialState, action){

//     const {counters} = state;

//     switch(action.type){
//         case types.CREATE :
//             return {
//                 counters :[
//                     ...counters,
//                     {
//                         color:action.color,
//                         number :0
//                     }
//                 ]
//             };
//         case types.REMOVE :
//             return {
//                 counters : counters.slice(0,counters.length-1)
//             };
//         case types.INCREMENT:
//             return{
//                 counters : [
//                     ...counters.slice(0,action.index),
//                     {
//                         ...counters[action.index],
//                         number:counters[action.index].number +1
//                     },
//                     ...counters.slice(action.index+1,action.length)
//                 ]    
//             };
//         case types.DECREMENT:
//             return{
//                 counters : [
//                     ...counters.slice(0,action.index),
//                     {
//                         ...counters[action.index],
//                         number:counters[action.index].number -1
//                     },
//                     ...counters.slice(action.index+1,counters.length)
//                 ]
//             };
//         case types.SET_COLOR:
//             return{
//                 counters : [
//                     ...counters.slice(0,action.index),
//                     {
//                         ...counters[action.index],
//                         color:action.color
//                     },
//                     ...counters.slice(action.index+1,counters.length)
//                 ]   
//             };
//         default :
//             return state;

//     }
// }

/* immutable 추가 */
const initialState = Map({
    counters : List([
        Map({
            color:'black',
            number:0
        })
    ])
})


function counter(state = initialState, action){
    const counters = state.get('counters');

    switch(action.type){
        case types.CREATE :
            return state.set('counters',counters.push(Map({
                color :action.color,
                number:0
            })))
        case types.REMOVE :
            return state.set('counters',counters.pop());
        case types.INCREMENT :
            return state.set('counters', counters.update(
                action.index,
                (counter)=> counter.set('number',counter.get('number')+1)
            ));
        case types.DECREMENT :
            return state.set('counters',counters.update(
                action.index,
                (counter)=>counter.set('number',counter.get('number')-1)
            ));
        case types.SET_COLOR :
            return state.set('counters', counters.update(
                action.index, 
                (counter) => counter.set('color', action.color))
            );
        default:
            return state;

    }
}

export default counter;