import React from 'react';
import Post from './Post';

const PersonalPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return <div className="personal-posts container__decor">
      <h2 className="container__title">My posts</h2>
      <div className="create-post">
        <input ref={newPostElement} type="text" className="create-post__area" placeholder="What's new?" />
        <button onClick={() => addPost()} className="create-post__btn">Add</button>
      </div>
      <div className="personal-posts__container">
        {props.posts.map(item =>
          <Post 
            message={item.message} 
            likesCount={item.likes}
            key={item.id}/>
        )}
      </div>
    </div>;
}

export default PersonalPosts;