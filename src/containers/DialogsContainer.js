import Dialogs from '../components/DialogsPage/Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (text) => {
      dispatch(updateNewMessageBodyCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
