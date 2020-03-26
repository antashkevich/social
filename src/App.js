import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container container__main-content">
        <Sidebar />
        <main className="main-content">
          <Profile />
        </main>
      </div>
    </div>
  );
}

export default App;
