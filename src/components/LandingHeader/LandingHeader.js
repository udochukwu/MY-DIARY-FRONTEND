import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './LandingHeader.scss';

class LandingHeader extends Component {
  render() {
    return (
      <div>
        <nav className="row">
          <div className="logo-div">
            <h4>< Link to="/">My Diary</Link></h4>
          </div>
          <div className="signup-signin-div">
            <h4>
              <Link id="" to="/signup">Sign Up</Link>
              <span className="mx-3 text-white">|</span>
              <Link id="" to="/login">Login</Link>
            </h4>
          </div>
        </nav>
      </div>
    );
  }
}

export default LandingHeader;
