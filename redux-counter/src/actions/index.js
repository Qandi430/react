/*
    action 객체를 만드는 액션 생성자를 생성
    여기서 ()=>({}) 은, function(){reuturn{}} 와 동일한 의미
    scope 이슈와 관계없이 편의상 사용
*/

import * as types from './ActionTypes';

export const create = (color) => ({
    type : types.CREATE,
    color
});

export const remove = () =>({
    type : types.REMOVE
});

export const increment = (index) => ({
    type : types.INCREMENT,
    index
});

export const decrement = (index) => ({
    type : types.DECREMENT,
    index
});

export const setColor = ({index,color}) => ({
    type : types.SET_COLOR,
    index,
    color
});
