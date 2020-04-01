import React from 'react';
import {Route} from 'react-router-dom';
import routes from './routes';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import DialogsContainer from './containers/DialogsContainer';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container container__main-content">
        <Sidebar />
        <main className="main-content">
          <Route exact path={routes.LANDING} render={() => <Profile />
          } />
          <Route path={routes.DIALOGS} render={() => <DialogsContainer />} />
        </main>
      </div>
    </div>
  );
}

export default App;
