// 액션 타입
export const FETCH_USER = 'user/FETCH_USER';

//액션 생성자
export const fetchUser = () => ({type: FETCH_USER});

// 초기 상태
const initialState  = {
    user : [],
    isEditing : false,
    editingUser : {}
}

// 리듀서
export default (state = initialState, action) =>{
    switch(action.type){
        case FETCH_USER :
        default:
            return state
    }
}