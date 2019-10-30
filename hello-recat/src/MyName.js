import React,{Component} from 'react';

const MyName = ({name}) => {
    return(
        <div>
            Hello {name}
        </div>
    )
}

MyName.defaultProps = {
    name : '기본이름2'
}

export default MyName