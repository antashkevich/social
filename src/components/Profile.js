import React from 'react';
import PersonalPostsContainer from '../containers/PersonalPostsContainer';
import ProfileInfo from './ProfileInfo';

const Profile = () => {
  
  return <>
    <div className="preview-block container__decor">
      <img className="preview-block__image" src="https://www.fonedog.com/images/photo-compress/image-compressor-image.jpg" alt='' />
    </div>
    <ProfileInfo />
    <PersonalPostsContainer />
  </>;
}

export default Profile;
