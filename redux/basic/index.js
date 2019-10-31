//편의를 위하여 각 DOM 엘리먼트에 대한 레퍼런스를 만들어줌
const elNumber = document.getElementById('number');
const btnIncrement = document.getElementById('increment');
const btnDecrement = document.getElementById('decrement');

//액션타입 정의
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//액션 객체를 만들어주는 액션 생성 함수
const increment = (diff) => ({type:INCREMENT, diff:diff});
const decrement = () => ({type:DECREMENT});

//초기값을 설정
const initialState = {
    number : 0
}

/*
    리듀서 함수
    state와 action을 파라미터로 받아옴
    그리고 그에 따라 다음 상태를 정의 한 다음 반환
*/

//여기에 state = initialState 는 , 파라미터의 기본값을 지정
const counter = (state = initialState, action) => {
    console.log(action);
    
    switch(action.type){
        case INCREMENT :
            return{
                number : state.number + action.diff
            };
        case DECREMENT:
            return{
                number : state.number -1
            };
        default:
            return false;
    }
}

// 스토어를 만들 댄 createStore에 리듀서 함수를 넣어서 호출
const {createStore} = Redux;
const store = createStore(counter);

// 상태가 변경될 떄 마다 호출시킬 listner 함수
const render = () =>{
    elNumber.innerText = store.getState().number;
    console.log("실행");
}

// 스토어에 구독을 하고, 뭔가 변화가 있다면, render 함수를 실행

store.subscribe(render);

// 초기 ㄷ렌더링을 위해 직접 실행

render();

// 버튼에 이벤트를 담아줌
// 스토엉 변화를 일으키라고 할 때에는 dispatch 함수에 액션 객체를 넣어 호출
btnIncrement.addEventListener('click', () =>{
    store.dispatch(increment(25));
})

btnDecrement.addEventListener('click', ()=>{
    store.dispatch(decrement());
})