import React from 'react';
import Pagination from '../Pagination';

let Users = (props) => {
    let checkAvatar = (photos) =>
        photos.large || photos.small || "/assets/media/avatar.png";

    let handlePageClick = data => {
        let selected = data.selected + 1;
        props.handlePageClick(selected);
    };

    return <div className="users-block container__decor">
        <h2 className="container__title">My users</h2>
        {
            props.users.map( user => <div className="user-block" key={user.id}>
                <div className="user-block__info-container">
                    <div className="user-block__avatar">
                        <img src={checkAvatar(user.photos)} alt="avatar user" />
                    </div>
                    <div className="user-block__info">
                        <p className="user-block__name">{user.name}</p>

                        { user.status ? <p className="user-block__status">{user.status}</p> : null }

                        { user.uniqueUrlName ? <p className="user-block__nickname">{"user.uniqueUrlName"}</p> : null }
                    </div>
                </div>
                <div className="user-block__action">
                    {user.followed
                        ?
                        <button onClick={() => props.unfollow(user.id)} className="button-action danger">remove</button>
                        :
                        <button onClick={() => props.follow(user.id)} className="button-action">add</button>
                    }
                </div>
            </div>)
        }
        <Pagination
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={handlePageClick}
        />
    </div>;
}

export default Users;
