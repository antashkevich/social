import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import routes from './routes';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="container container__main-content">
          <Sidebar />
          <main className="main-content">
            <Route exact path={routes.LANDING} render={() => <Profile state={props.state.profilePage} />} />
            <Route path={routes.DIALOGS} render={() => <Dialogs state={props.state.dialogsPage} />} />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
