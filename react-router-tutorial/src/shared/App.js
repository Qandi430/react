import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About ,Posts} from 'pages';
import Menu from 'components/Menu';


class App extends Component {

    AboutPreLoader = () =>{
        console.log("AboutPreLoader")
        About.preload();
    }

    render() {
        const AboutPreLoader = this.AboutPreLoader;
        return (
            <div>
                <Menu AboutPreLoader={AboutPreLoader}/>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Route path="/posts" component={Posts}/>
            </div>
            
        );
    }
}

export default App;