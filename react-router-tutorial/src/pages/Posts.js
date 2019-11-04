import React from 'react';
import {Link,Route} from 'react-router-dom';
import {Post} from 'pages';

const Posts = ({match,location}) => {
    return (
        <div>
            <h2>Post List</h2>
            <ul>
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                <li><Link to={`${match.url}/3`}>Post #3</Link></li>
                <li><Link to={`${match.url}/4`}>Post #4</Link></li>
            </ul>
            <p><b>location.pathname</b>{location.pathname}</p>
            <p><b>match.path</b>{match.path}</p>
            <p><b>match.url</b>{match.url}</p>
            <Route exact path={match.url} render={()=>(<h3>Please select my post</h3>)}/>
            <Route path={`${match.url}/:id`} component={Post}/>
        </div>
    );
};

export default Posts;