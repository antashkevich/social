import React from 'react';
import Post from '../Post';

const PersonalPosts = (props) => {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return <div className="personal-posts container__decor">
      <h2 className="container__title">My posts</h2>
      <div className="create-post">
        <input 
          ref={newPostElement}
          onChange={onPostChange}
          value={props.profilePage.newPostText}
          type="text" 
          className="create-post__area" 
          placeholder="What's new?" />
        <button onClick={onAddPost} className="button-action">Add</button>
      </div>
      <div className="personal-posts__container">
        {props.profilePage.postsData.map(item =>
          <Post 
            message={item.message} 
            likesCount={item.likes}
            key={item.id}/>
        )}
      </div>
    </div>;
}

export default PersonalPosts;