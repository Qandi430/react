import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  // const value = 1;
  // const style = {
  //   backgroundColor: 'black',
  //   padding: '16px',
  //   color: 'white',
  //   fontSize: '12px'
  // };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    //React.Fragment
    // <React.Fragment>
    //   <div>
    //     Hello
    //   </div>
    //   <div>
    //     Bye
    //   </div>
    // </React.Fragment>

    //삼항 연산자
    // <div>
    //   {
    //     1+1 === 2 
    //       ?<div>Collect</div> 
    //       :<div>Wrong</div>
    //     }
    // </div>

    //AND연산자
    // <div>
    //   {
    //     1+1===2 &&<div>Collect</div>
    //   }
    // </div>


    //IIFE - IF
    // <div>
    //   {
    //     (function() {
    //       if (value === 1) return (<div>하나</div>);
    //       if (value === 2) return (<div>둘</div>);
    //       if (value === 3) return (<div>셋</div>);
    //     })()
    //   }
    // </div>

    //IIFE - switch
    // <div>
    //   {
    //     (function(){
    //       switch(value){
    //         case 1:
    //           return <div>하나</div>;
    //         case 2:
    //           return <div>둘</div>;
    //         case 3:
    //           return <div>셋</div>;
    //         default:
    //           return <div>없음</div>; 
    //       }
    //     })()
    //   }
    // </div>

    // style - 자바스크립트 객체로 카멜케이스로 작성
    // <div style={style}>
    //     hi there
    // </div>

    // class - className="클래스명"으로 작성
    // <div className="App">
    //   리액트
    // </div>

    // comment - 주석은 {/* 주석문 */} 으로 작성 (html에서 확인 불가능)
    <div>
      {/* 주석은 이렇게 */}
      <h1
        // 태그 사이에
      >리액트</h1>
    </div>
  );
}

export default App;
