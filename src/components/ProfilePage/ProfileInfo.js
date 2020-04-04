import React from 'react';
import Spinner from '../Spinner';

const ProfileInfo = (props) => {
    if (!props.profile) return <Spinner />

    return (
        <div className="profile-info-block container__decor">
            <p>ava</p>
            <img src={props.profile.photos.large} alt="profile avatar" />
            <p>description</p>
        </div>
    );
};

export default ProfileInfo;