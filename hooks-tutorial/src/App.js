import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Info from './Info';
import ContextSample from './ContextSample';
import Average from './Average';
import MyComponent from './MyComponent';
import RefSample from './RefSample';
import UsePromiseSample from './UsePromiseSample';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    // <div>
    //   <button onClick={() => {setVisible(!visible)}}>
    //     {visible ? '숨기기' : '보이기'}
    //   </button>
    //   <hr/>
    //   {visible && <Info/>}
    // </div>
    <UsePromiseSample />
  )
}


export default App;
