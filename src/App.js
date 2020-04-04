import React from 'react';
import {Route} from 'react-router-dom';
import routes from './routes';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/ProfilePage/Profile';
import DialogsContainer from './containers/DialogsContainer';
import UsersContainer from './containers/UsersContainer';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container container__main-content">
        <Sidebar />
        <main className="main-content">
          <Route exact path={routes.LANDING} render={() => <Profile />} />
          <Route path={routes.DIALOGS} render={() => <DialogsContainer />} />
          <Route path={routes.USERS} render={() => <UsersContainer />} />
        </main>
      </div>
    </div>
  );
}

export default App;
