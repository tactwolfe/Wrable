import React from 'react';

import './Post.css';

const post = (props) => {

    return(
        <div className="post">
            <h1 className="post_user">{props.author}</h1>
            <p className="post_para">{props.posts}</p>
        </div>
    );
}

export default post;