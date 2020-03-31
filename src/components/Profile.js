import React from 'react';
import PersonalPosts from './PersonalPosts';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
  return <>
    <div className="preview-block container__decor">
      <img className="preview-block__image" src="https://www.fonedog.com/images/photo-compress/image-compressor-image.jpg" alt='' />
    </div>
    <ProfileInfo />
    <PersonalPosts 
      posts={props.profilePage.postsData}
      newPostText={props.profilePage.newPostText}
      dispatch={props.dispatch} />
  </>;
}

export default Profile;
