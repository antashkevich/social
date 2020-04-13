import React from 'react';
import { follow, unfollow, setCurrentPage, getUsers } from '../redux/usersReducer';
import { connect } from 'react-redux';
import Users from '../components/UsersPage/Users';
import Pagination from '../components/Pagination';
import Spinner from '../components/common/Preloader/Spinner';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    handlePageClick = data => {
        let selected = data.selected + 1;
        this.props.getUsers(selected, this.props.pageSize);
    };

    render () {
        return <>
            {this.props.isFetching
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
                    followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth,
    }
}

export default compose(
    connect(mapStateToProps,{
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
  }),
  withAuthRedirect
  )(UserContainer);
