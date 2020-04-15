import React from 'react';

const Post = (props) => {
  return <div className="personal-posts__item">
    <p>{props.message}</p>
    <p>{props.likesCount}</p>
  </div>;
}

export default Post;