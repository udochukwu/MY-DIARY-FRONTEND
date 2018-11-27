import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from './containers/Dashboard/Dashboard';
import Entries from './containers/Entries/Entries';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import NewEntry from './containers/NewEntry/NewEntry';
import ViewEntry from './containers/ViewEntry/ViewEntry';
import PrivateRoute from './PrivateRoute';
import Signup from './containers/Signup/Signup';


import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/entries" component={Entries} />
            <PrivateRoute exact path="/entries/new" component={NewEntry} />
            <PrivateRoute path="/entries/:entryid" component={ViewEntry} />
            <Route exact path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Redirect to="/" />
          </Switch>
      </div>
    );
  }
}

export default App;
