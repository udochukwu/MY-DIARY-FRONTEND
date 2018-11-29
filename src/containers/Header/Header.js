import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LOGOUT } from '../../actionTypes/UserConstants';
import { asyncActions } from '../../util/AsyncUtil';
import './Header.scss';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      showSidebar: false,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.showSidebar = this.toggleSidebar.bind(this);
    this.hideSidebar = this.hideSidebar.bind(this);
    this.logout = this.logout.bind(this);
  }

  toggleSidebar(e) {
    e.preventDefault();
    this.setState({
      showSidebar: !this.state.showSidebar,
    });
  }

  showSidebar() {
    if (!this.state.showSidebar) {
      this.toggleSideBar();
    }
  }

  hideSidebar() {
    this.setState({
      showSidebar: false
    });
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
    localStorage.removeItem('token');
    this.props.history.push('/');
  }

  render() {
    const {
      showSidebar,
    } = this.state;
    return (
      <div>
        { showSidebar
        && <nav className="side-bar-nav " id="mySidebar">
          <div className="bg-light p-5">
            <span onClick={this.hideSidebar} id="navClsBtn" >&times;</span>
          </div>
          <ul>
            <li><Link to="/entries"><span className="mx-3"><i className="fas fa-book"></i></span>Entries</Link></li>
            <li><a href="/entries/new"><span className="mx-3"><i className="fas fa-pencil-alt"></i></span>Write</a></li>
            <li><Link to="#"><span className="mx-3"><i className="far fa-bell"></i></span>Notifications</Link></li>
            <li><Link to="#"><span className="mx-3"><i className="fas fa-cog"></i></span>Account Settings</Link></li>
            <li><Link to="#"><span className="mx-3"><i className="fas fa-hands-helping"></i></span>Help & FAQs</Link></li>
            <li><Link to="#" onClick={this.logout}><span className="mx-3"><i className="fas fa-sign-out-alt"></i></span>Logout</Link></li>
          </ul>
        </nav>
        }
        <nav className="horizontal-nav">
          <ul>
            <li className="float-left"><a href="/dashboard">My Diary</a></li>
            <span className="laptop-display">
              <li className="dropdown  mr-3 ml-5 float-right">
                <Link className="active" to="/dasnoard">Nelson <span><i className="ml-1 fas fa-sort-down"></i></span></Link>
                <div className="dropdown-content text-dark text-left">
                  <Link to="#"><span className="mx-3"><i className="fas fa-cog"></i></span>Account Settings </Link>
                  <Link to="#"><span className="mx-3"><i className="fas fa-hands-helping"></i></span>Help & FAQs</Link>
                  <Link to="#" onClick={this.logout}><span className="mx-3"><i className="fas fa-sign-out-alt"></i></span>Logout</Link>
                </div>
              </li>
              <li className="mr-5 float-right">
                <a href="/entries/new">
                  <span className="mx-3">
                    <i className="fas fa-plus-circle"></i>
                  </span>
                  New Entry
                </a>
              </li>
              <li className="float-right">
                <Link to="/entries">
                  <span className="mx-3">
                    <i className="fas fa-list-ul"></i>
                  </span>
                  View All Entries
                </Link>
              </li>
            </span>
            <span className="mobile-display">
              <li id="bars" className="float-right">
                <Link to="#" onClick={this.toggleSidebar}>
                  <span className="mx-3">
                    <i className="fas fa-bars"></i>
                  </span>
                </Link>
              </li>
            </span>
          </ul>
        </nav>
      </div>
    );
  }
}
Header.propTypes = {
  logout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
  logout: asyncActions(LOGOUT).success
})(withRouter(Header));
