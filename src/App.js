import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navigation } from './component/navigation';
import {
  LogIn,
  LogOut,
  Register,
  Profile,
  TestAuthorized,
} from './component/user_auth';
import { Home } from './component/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <div className="container mt-3" style={{ marginTop: 40 }}>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/log-in" component={LogIn} />
            <Route path="/log-out" component={LogOut} />
            <Route path="/profile" component={Profile} />
            <Route path="/test-authorized" component={TestAuthorized} />
          </Switch>
        </main>
      </div>
    </>
  );
}

export default App;
