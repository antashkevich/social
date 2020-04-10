import React from 'react';
import Post from '../Post';
import { Field, reduxForm } from 'redux-form'

const PersonalPosts = (props) => {
  // let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return <div className="personal-posts container__decor">
    <h2 className="container__title">My posts</h2>

    <AddNewPostReduxForm onSubmit={onAddPost} />

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

const AddNewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit} className="create-post">
    <Field 
      // ref={newPostElement}
      type="text"
      name="newPostText"
      component="input"
      className="create-post__area" 
      placeholder="What's new?" />
    <button className="button-action">Add</button>
  </form>;
};

const AddNewPostReduxForm = reduxForm({
  form: 'profileAddNewPostForm'
})(AddNewPostForm);

export default PersonalPosts;