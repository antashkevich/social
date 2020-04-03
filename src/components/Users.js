import React from 'react';
import * as axios from 'axios';
import Pagination from './Pagination';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    checkAvatar(photos) {
        return photos.large || photos.small || "/assets/media/avatar.png";
    };

    handlePageClick = data => {
        let selected = data.selected + 1;    
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${selected}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
        });
    };

    render () {
        return <div className="users-block container__decor">
            <h2 className="container__title">My users</h2>
            {
                this.props.users.map( user => <div className="user-block" key={user.id}>
                    <div className="user-block__info-container">
                        <div className="user-block__avatar">
                            <img src={this.checkAvatar(user.photos)} alt="avatar user" />
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
                            <button onClick={() => this.props.unfollow(user.id)} className="button-action danger">remove</button>
                            :
                            <button onClick={() => this.props.follow(user.id)} className="button-action">add</button>
                        }
                    </div>
                </div>
            )}
            <Pagination
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.handlePageClick}
            />
        </div>
    };
}

// const Users = (props) => {

//     if(props.users.length === 0) {
//         axios.get("https://social-network.samuraijs.com/api/1.0/users")
//         .then(response => {
//             props.setUsers(response.data.items);
//         });
//     }

//     let checkAvatar = (photos) => photos.large || photos.small || "/assets/media/avatar.png";

//     return <div className="users-block container__decor">
//         <h2 className="container__title">My users</h2>
//         {
//             props.users.map( user => <div className="user-block" key={user.id}>
//                 <div className="user-block__info-container">
//                     <div className="user-block__avatar">
//                         <img src={checkAvatar(user.photos)} alt="avatar user" />
//                     </div>
//                     <div className="user-block__info">
//                         <p className="user-block__name">{user.name}</p>

//                         { user.status ? <p className="user-block__status">{user.status}</p> : null }

//                         { user.uniqueUrlName ? <p className="user-block__nickname">{"user.uniqueUrlName"}</p> : null }
//                     </div>
//                 </div>
//                 <div className="user-block__action">
//                     {user.followed
//                         ?
//                         <button onClick={() => props.unfollow(user.id)} className="button-action danger">remove</button>
//                         :
//                         <button onClick={() => props.follow(user.id)} className="button-action">add</button>
//                     }
//                 </div>
//             </div>
//         )}
//     </div>
// };

export default Users;
