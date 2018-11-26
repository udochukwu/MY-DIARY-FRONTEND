import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/Home/Home';
import Signup from './containers/Signup/Signup';


import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Redirect to="/" />
          </Switch>
      </div>
    );
  }
}

export default App;
