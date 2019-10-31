import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Map,List,Record} from 'immutable';
import * as serviceWorker from './serviceWorker';

//1. 객체는 MAP
const obj = Map({
    foo:1,
    inner:Map({
        bar : 10
    })
})
console.log(obj.toJS());

//2. 배열은 List
const arr = List([
    Map({foo:1}),
    Map({bar : 2}),
])
console.log(arr.toJS());

//3. 설정할땐 set
let nextObj = obj.set('foo',5);
console.log(nextObj.toJS());
console.log(nextObj !== obj);

//4. 값을 읽을땐 get
console.log(obj.get('foo'));
console.log(arr.get(0));

//5. 읽은다음에 설정 할 때는 updqte
// 두번째 파라미터로는 updater 함수가 들어감;
nextObj = nextObj.update('foo',value => value+1);
console.log(nextObj.toJS());

//6. 내부에 있는걸 ~ 할땐 In을 붙인다.
nextObj = obj.setIn(['inner','bar'],20);
console.log(nextObj.toJS());

let nextArr = arr.setIn([0, 'foo'],10);
console.log(nextArr.getIn([0, 'foo']));

// 8. List 내장 함수는 배열이랑 비슷
nextArr = arr.push(Map({qaz:3}));
console.log(nextArr.toJS());
nextArr = arr.filter(item => item.get('.foo') === 1);
console.log(nextArr.toJS());

// 9.delete 로 key를 지울 수 있음
nextObj = nextObj.delete('foo');
console.log(nextObj.toJS());

nextArr = nextArr.delete(0);
console.log(nextArr.toJS());

const Person = Record({
    name : '홍길동',
    age : 1
});

let person = Person();

console.log(person);

console.log(person.name,person.age);

person = person.set('name','안시현');
console.log(person.name)
//person.name = '철수'  == 오류

//Record에서 사전 준비해주지 않은 값을 넣어도 오류
// ex) person = person.set('job',5);

//값을 따로 지정해 줏수 있다.

person = Person({
    name : '영희',
    age : 10
});

const {name,age} = person // 비구조화 할당 가능
console.log(name,age); //"영희",10

//재생성할 일이 없다면 이렇게 해도 가능
const dog = Record({
    name : '멍멍이',
    age : 1
})

console.log(dog.name);

const nested = Record({
    foo : Record({
        bar:true
    })()
})();

console.log(nested.foo.bar);

const nextNested = nested.setIn(['foo','bar'],false);
console.log(nextNested);



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
