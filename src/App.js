import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from './containers/Dashboard/Dashboard';
import Entries from './containers/Entries/Entries';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
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
            <Route exact path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Redirect to="/" />
          </Switch>
      </div>
    );
  }
}

export default App;
