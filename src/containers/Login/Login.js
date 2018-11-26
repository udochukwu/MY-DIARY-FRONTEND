import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlertCard from '../../components/AlertCard/AlertCard';
import { login } from '../../requests/AuthRequests';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();


    this.initialState = { email: '', password: '' };

    this.state = { ...this.initialState };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
    this.redirectToDashboard = this.redirectToDashboard.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  showAlert(alertType, datas = { something: ' ' }) {
    return (
      <AlertCard datas={datas} alertType={alertType} />
    );
  }

  redirectToDashboard() {
    this.props.history.push('/dashboard');
  }

  render() {
    const { email, password } = this.state;
    const {
      errors, failure, success, loading, isAuth
    } = this.props;

    if (isAuth) {
      this.redirectToDashboard();
    }
    let emailError, passwordError = false;
    if (failure) {
      if (errors.errors.email) {
        emailError = true;
      }
      if (errors.errors.password) {
        passwordError = true;
      }
    }

    return (
      <div className="login-modal">
        <div className="my_modal_content">
          <div className="modal-body ">
            <div className="">
            <form onSubmit={this.submit}>
                {failure && this.showAlert('error', this.props.errors.errors)}
                {success && this.showAlert('success', 'Logged in!')}
                <label htmlFor="email"><b>Email</b></label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={this.change}
                  className={emailError ? 'hasError' : ''}
                />

                <label htmlFor="password"><b>Password</b></label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={this.change}
                  className={passwordError ? 'hasError' : ''}
                />

                <button
                  className="login-button"
                  type="submit"
                  value="login" >
                  {loading ? 'Loading...' : 'Login'}
                </button>
                <div className="text-center">
                  <p>
                    <small>Dont have an account? <Link className="no-deco" to="/signup">Signup</Link></small>
                  </p>
                  <small className="mt-4"><Link to="/" className="custom-a"><i className="fas fa-long-arrow-alt-left"></i> Back to home</Link></small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loading: PropTypes.bool,
  success: PropTypes.bool,
  failure: PropTypes.bool,
  isAuth: PropTypes.bool,
  errors: PropTypes.object,
  login: PropTypes.func.isRequired,
  history: PropTypes.object,
};

const mapStateToProps = state => ({
  loading: state.user.loading,
  success: state.user.success,
  failure: state.user.failure,
  errors: state.user.errors,
  isAuth: state.user.isAuth,
});

export default connect(mapStateToProps, { login })(withRouter(Login));
