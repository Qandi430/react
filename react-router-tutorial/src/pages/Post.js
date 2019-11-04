import React from 'react';

const Post = ({match,location}) => {
    return (
        <div>
            포스트 {match.params.id}
            <p><b>location.pathname</b>{location.pathname}</p>
            <p><b>match.path</b>{match.path}</p>
            <p><b>match.url</b>{match.url}</p>
        </div>
    );
};

export default Post;