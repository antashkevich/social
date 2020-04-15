import React from 'react';
import {Route} from 'react-router-dom';
import routes from './routes';
import { connect } from 'react-redux';
import { getAuthUserData } from './redux/authReducer';
import Sidebar from './components/Sidebar';
import HeaderContainer from './containers/HeaderContainer';
import DialogsContainer from './containers/DialogsContainer';
import UsersContainer from './containers/UsersContainer';
import ProfileContainer from './containers/ProfileContainer';
import Login from './components/Login';
import Spinner from './components/common/Preloader/Spinner';
import Photos from './components/PhotosPage/Photos';

class App extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }
  
  render() {
    return !this.props.initial
    ?
      <Spinner />
    :
      <div className="app">
        <HeaderContainer />
        <div className="container container__main-content">
          <Sidebar />
          <main className="main-content">
            <Route path={routes.LANDING} render={() => <ProfileContainer />} />
            <Route path={routes.DIALOGS} render={() => <DialogsContainer />} />
            <Route path={routes.USERS} render={() => <UsersContainer />} />
            <Route path={routes.LOGIN} render={() => <Login />} />
            <Route path={routes.PHOTOS} render={() => <Photos />} />
          </main>
        </div>
      </div>;
  }
}

const mapStateToProps = (state) => ({
  initial: state.auth.initial,
});

export default connect(mapStateToProps, {
  getAuthUserData
})(App);
