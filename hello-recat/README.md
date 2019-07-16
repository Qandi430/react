## Studing React

### 1. create-react-app

    준비사항
    1. Node.js: Webpack 과 Babel 같은 도구들이 자바스크립트 런타임인 Node.js 를 기반으로 만들어져있습니다. 그렇기에 해당 도구들을 사용하기 위해서 Node.js 를 설치합니다.
    2. Yarn: Yarn 은 조금 개선된 버전의 npm 이라고 생각하시면 됩니다. npm 은 Node.js 를 설치하게 될 때 같이 딸려오는 패키지 매니저 도구입니다. 프로젝트에서 사용되는 라이브러리를 설치하고 해당 라이브러리들의 버전 관리를 하게 될 때 사용하죠. 우리가 Yarn 을 사용하는 이유는, 더 나은 속도, 더 나은 캐싱 시스템을 사용하기 위함입니다.
    3. 코드 에디터: 그리고, 코드 에디터를 준비하세요. 여러분이 좋아하는 에디터가 있다면, 따로 새로 설치하지 않고 기존에 사용하시던걸 사용하셔도 됩니다. 저는 주로 VSCode 를 사용합니다. 이 외에도, Atom, WebStorm, Sublime 같은 훌륭한 선택지가 있습니다.
    4. 윈도우의 경우, Git for Windows 를 설치해서 앞으로 터미널에 무엇을 입력하라는 내용이 있으면 함께 설치되는 Git Bash 를 사용하세요.
    
    create-react-app 설치
    npm install -g create-react-app or yarn global add create-react-app
    
    create-react-app 실행
    create-react-app hello-react


### 2.JSX
    import = 무언가를 불러오는것.
    컴포넌트를 만드는 2가지 방법
    1. class로 만든다. 
    ex) class App extends Component {
       render() {
            return (
                <div>....</div>
            )
        }
    }
    
    class로 컴포넌트를 만들때 렌더 함수가 필요
    그 내부에는 JSX를 리턴한다.
    
    2. 함수로 만든다.
    
    항상 하단에는 export문으로 내보내기를 한다.
    ex)
    export default App;
    
    그리고 브라우저 상에 우리의 리액트 컴포넌트를 보여주기 위해서는 ReactDOM.render 함수를 사용한다. 
    첫번째 파라미터는 렌더링 할 결과물이고, 두번째 파라미터는 컴포넌트를 어떤 DOM 에 그릴지 정해준다.
    ex)
    ReactDOM.render(<App />, document.getElementById('root')); (App 컴포넌트를 #root에 그린다)
    
    JSX
    JSX는 HTML 과 비슷한 문법으로 작성을 하면 이를 React.createElement 를 사용하는 자바스크립트 형태로 변환시켜준다.
    
    특징
    1. 항상 닫혀야한다. <div>가 있다면 </div>로 닫아줘야한다. 또는 <input/>식으로 닫는 태그가있어야한다.
    2. 두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져있어야 한다
    ex ) <div>Hello</div>        <div>
         <div>World</div>  X         <div>Hello</div>    O
                                     <div>World</div>   
                                 </div>
    
       또는 React.Flagment 로 감싸줘야한다.
       ex)  <React.Flagment>
                <div>Hello</div>
                <div>World</div>
            </Reac.Flagment>
    
    
    JSX 안에 자바스크립트 값 사용하기 {변수명}으로 사용가능
    ex) const name = 'react';
        return (
          <div>
            hello {name}!
          </div>
        )  
    
    조건부 렌더링
    JSX 내부에서 조건부 렌더링을 할 때는 보통 삼항 연산자를 사용하거나, AND 연산자를 사용
    
    if 문을 사용 할 수는 없다 (사용하려면 IIFE(즉시 실행 함수 표현) 을 사용해아합니다.)
    AND 연산자의 경우 단순히 우리의 조건이 true 일 때만 보여주고 false 경우 아무것도 보여주고 싶지 않을 때 사용
    
    삼항 연산자  {
                    1+1 === 2 
                        ?<div>Collect</div> 
                        :<div>Wrong</div>
                }
    AND 연산자  {
                    1+1===2 &&<div>Collect</div>
                }
                
   IIFE const value = 1;
        return (
          <div>
            {
              (function() {
                if (value === 1) return (<div>하나</div>);
                if (value === 2) return (<div>둘</div>);
                if (value === 3) return (<div>셋</div>);
              })()
            }
          </div>
        );
    switch문으로 사용 가능    
    
    Style
    자바스크립트 객체로 만들어 적용가능 but CamelCase로 작성
    ex)
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };

    return (
      <div style={style}>
        hi there
      </div>
    );
    
    className
    JSX 클래스는 className="클래스명" 으로 작성
    ex)
    return (
      <div className="App">
        리액트
      </div>
    );
    
    주석
    주석은 {/* 주석문 */}으로 작성 (html에서 확인불가능)
    ex)
    <div>
        {/* 주석은 이렇게 */}
        <h1
          // 태그 사이에
        >리액트</h1>
      </div>
   
