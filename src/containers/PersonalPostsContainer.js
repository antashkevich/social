import PersonalPosts from '../components/PersonalPosts';
import { addPostActionCreator, updateNewPostActionCreator } from '../redux/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  }
}

const PersonalPostsContainer = connect(mapStateToProps, mapDispatchToProps)(PersonalPosts);

export default PersonalPostsContainer;
