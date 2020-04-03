import Users from '../components/Users';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator } from '../redux/usersReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
  }
  
  let mapDispatchToProps = (dispatch) => {
    return {
      follow: (userId) => {
        dispatch(followActionCreator(userId));
      },
      unfollow: (userId) => {
        dispatch(unfollowActionCreator(userId));
      },
      setUsers: (users) => {
        dispatch(setUsersActionCreator(users));
      },
      setCurrentPage: (currentPage) => {
        dispatch(setCurrentPageActionCreator(currentPage))
      },
      setTotalUsersCount: (totalUsersCount) => {
        dispatch(setTotalUsersCountActionCreator(totalUsersCount))
      },
    }
  }

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
