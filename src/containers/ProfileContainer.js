import React from 'react';
import { getUserProfile, getUserStatus, updateUserStatus } from '../redux/profileReducer';
import Profile from '../components/ProfilePage/Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 6983;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  };

  render() {
    return (
      <Profile 
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateUserStatus} />
    )
  };
}

let mapStateToProps = (state) => {
  return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
  }
}

export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
