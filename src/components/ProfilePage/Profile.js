import React from 'react';
import PersonalPostsContainer from '../../containers/PersonalPostsContainer';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
  
  return <>
    <div className="preview-block container__decor">
      <img className="preview-block__image" src="/assets/media/preview-image.jpg" alt='' />
    </div>
    <ProfileInfo profile={props.profile} />
    <PersonalPostsContainer />
  </>;
}

export default Profile;
