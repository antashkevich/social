import React from 'react';
import {Route} from 'react-router-dom';
import routes from './routes';
import Sidebar from './components/Sidebar';
import HeaderContainer from './containers/HeaderContainer';
import DialogsContainer from './containers/DialogsContainer';
import UsersContainer from './containers/UsersContainer';
import ProfileContainer from './containers/ProfileContainer';

function App() {
  return (
    <div className="app">
      <HeaderContainer />
      <div className="container container__main-content">
        <Sidebar />
        <main className="main-content">
          <Route path={routes.LANDING} render={() => <ProfileContainer />} />
          <Route path={routes.DIALOGS} render={() => <DialogsContainer />} />
          <Route path={routes.USERS} render={() => <UsersContainer />} />
        </main>
      </div>
    </div>
  );
}

export default App;
