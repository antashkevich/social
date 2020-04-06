import React from 'react';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../redux/usersReducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from '../components/UsersPage/Users';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
        })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            });
    };

    handlePageClick = data => {
        let selected = data.selected + 1;
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${selected}&count=${this.props.pageSize}`, {
            withCredentials: true,
        })
        .then(response => {
            this.props.setCurrentPage(selected);
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);
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
                />
            }
            <Pagination
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.handlePageClick}
            />
        </>
    };
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
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
