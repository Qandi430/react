import React from 'react';
import withSplitting from './withSplitting';

const SplitMe = withSplitting(()=> import('./SplitMe'));

class App extends React.Component{
  state = {
    visiable : false
  }
  handleClick = () => {
    this.setState({
      visiable : true
    })
  }
  render(){

    const {visiable} = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        {visiable && <SplitMe/>}
      </div>
    );
  }  
}


export default App;
