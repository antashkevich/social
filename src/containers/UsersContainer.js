import React from 'react';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../redux/usersReducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from '../components/UsersPage/Users';
import Spinner from '../components/Spinner';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
  
// let mapDispatchToProps = (dispatch) => {
//     return {
//       follow: (userId) => {
//         dispatch(follow(userId));
//       },
//       unfollow: (userId) => {
//         dispatch(unfollow(userId));
//       },
//       setUsers: (users) => {
//         dispatch(setUsers(users));
//       },
//       setCurrentPage: (currentPage) => {
//         dispatch(setCurrentPage(currentPage));
//       },
//       setTotalUsersCount: (totalUsersCount) => {
//         dispatch(setTotalUsersCount(totalUsersCount));
//       },
//       toggleIsFetching: (isFetching) => {
//         dispatch(toggleIsFetching(isFetching));
//       },

//     }
// }

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    handlePageClick = (selected) => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${selected}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setCurrentPage(selected);
        });
    };

    render () {
        return <>
            {
                this.props.isFetching
                ?
                <Spinner />
                :
                <Users 
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    handlePageClick={this.handlePageClick}
                />
            }
        </>
    };
}

const UsersContainer = connect(mapStateToProps,
    {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
  }
  )(UserContainer);

export default UsersContainer;
