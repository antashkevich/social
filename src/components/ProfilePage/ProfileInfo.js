import React from 'react';
import Spinner from '../Spinner';

const ProfileInfo = (props) => {
    if (!props.profile) return <Spinner />

    let photosList= props.profile.photos;

    let checkAvatar = (photos) =>
        photos.large || photos.small || "/assets/media/avatar.png";

    return (
        <div className="profile-info-block container__decor">
            <p>ava</p>
            <img src={checkAvatar(photosList)} alt="profile avatar" />
            <p>description</p>
        </div>
    );
};

export default ProfileInfo;