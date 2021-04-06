import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import authService from './services/auth.service';
import { LogIn, LogOut, Register, TestAuthorized } from './component/user_auth';
import { Home } from './component/home';
import { AuthorizedApp } from './component/AuthorizedApp';
import { Header } from './component/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <>
      <Header currentUser={currentUser} />
      {currentUser ? (
        <AuthorizedApp />
      ) : (
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/log-in" component={LogIn} />
            <Route path="/log-out" component={LogOut} />
            <Route path="/test-authorized" component={TestAuthorized} />
          </Switch>
        </main>
      )}
    </>
  );
}

export default App;
