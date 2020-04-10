import React from 'react';
import Spinner from '../Spinner';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) return <Spinner />

    let photosList= props.profile.photos;

    let checkAvatar = (photos) =>
        photos.large || photos.small || "/assets/media/avatar.png";

    return (
        <div className="profile-info-block container__decor">
            <img src={checkAvatar(photosList)} alt="profile avatar" />
            <ProfileStatus 
                status={props.status}
                updateStatus={props.updateStatus} />
        </div>
    );
};

export default ProfileInfo;