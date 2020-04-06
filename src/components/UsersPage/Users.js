import React from 'react';
import * as axios from 'axios';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let checkAvatar = (photos) =>
        photos.large || photos.small || "/assets/media/avatar.png";

    return <div className="users-block container__decor">
        <h2 className="container__title">My users</h2>
        {
            props.users.map( user => <div className="user-block" key={user.id}>
                <div className="user-block__info-container">
                    <div className="user-block__avatar">
                        <NavLink to={"/profile/" + user.id}>
                            <img src={checkAvatar(user.photos)} alt="avatar user" />
                        </NavLink>
                    </div>
                    <div className="user-block__info">
                        <p className="user-block__name">{user.name}</p>

                        { user.status ? <p className="user-block__status">{user.status}</p> : null }

                        { user.uniqueUrlName ? <p className="user-block__nickname">{"user.uniqueUrlName"}</p> : null }
                    </div>
                </div>
                <div className="user-block__action">
                    { user.followed
                        ?
                        <button 
                            onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3",
                                    },
                                })
                                .then(response => {
                                    if(response.data.resutCode === 0) {
                                        props.unfollow(user.id);
                                    }
                                });
                                
                            }} 
                            className="button-action danger"
                        >remove</button>
                        :
                        <button 
                            onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3",
                                    },
                                })
                                .then(response => {
                                    debugger
                                    if(response.data.resutCode === 0) {
                                        props.follow(user.id);
                                    }
                                });
                            }} 
                            className="button-action"
                        >add</button>
                    }
                </div>
            </div>)
        }
    </div>;
}

export default Users;
