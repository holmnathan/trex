import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Aside, AsideNavigation } from './aside';
import { Dashboard } from './dashboard';
import { Profile } from './user_auth';

const AuthorizedApp = () => {
  return (
    <div className="container-fluid d-flex h-100">
      <div className="row justify-content-md-center">
        <Aside>
          <AsideNavigation />
        </Aside>
        <main className="col p-3">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </main>
        <Aside></Aside>
      </div>
    </div>
  );
};

export { AuthorizedApp };
