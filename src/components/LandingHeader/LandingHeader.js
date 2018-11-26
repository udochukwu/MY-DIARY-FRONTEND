import React, { Component } from 'react';
import './LandingHeader.scss';

class LandingHeader extends Component {
  render() {
    return (
      <div>
        <nav className="row">
          <div className="logo-div">
            <h4><a href="#">My Diary</a></h4>
          </div>
          <div className="signup-signin-div">
            <h4>
              <a id="" href="/signup">Sign Up</a>
              <span className="mx-3 text-white">|</span>
              <a id="" href="/login">Login</a>
            </h4>
          </div>
        </nav>
      </div>
    );
  }
}

export default LandingHeader;
