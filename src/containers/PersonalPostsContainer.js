import PersonalPosts from '../components/ProfilePage/PersonalPosts';
import { addPostActionCreator } from '../redux/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
  }
}

const PersonalPostsContainer = connect(mapStateToProps, mapDispatchToProps)(PersonalPosts);

export default PersonalPostsContainer;
