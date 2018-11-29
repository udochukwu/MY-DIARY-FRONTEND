import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Signup.scss';
import AlertCard from '../../components/AlertCard/AlertCard';
import { signup } from '../../requests/AuthRequests';


class Signup extends Component {
  constructor() {
    super();


    this.initialState = { email: '', password: '', confirmPassword: '' };

    this.state = { ...this.initialState };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
    this.redirectToDashboard = this.redirectToDashboard.bind(this);
  }

  redirectToDashboard() {
    this.props.history.push('/dashboard');
  }

  change(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  showAlert(alertType, datas = { something: ' ' }) {
    return (
      <AlertCard datas={datas} alertType={alertType} />
    );
  }

  render() {
    const { email, password, confirmPassword } = this.state;
    const { errors, failure, success, loading } = this.props;
    if (success) {
      setTimeout(this.redirectToDashboard, 5000);
    }
    let emailError, passwordError, confirmPasswordError = false;
    if (failure) {
      if (errors.errors.email) {
        emailError = true;
      }
      if (errors.errors.password) {
        passwordError = true;
      }
      if (errors.errors.confirmPassword) {
        confirmPasswordError = true;
      }
    }
    return (
      <div className="signup-modal">
        <div className="my_modal_content">
          <div className="modal-body ">
            <div>
              <form onSubmit={this.submit}>
               {this.props.failure && this.showAlert('error', this.props.errors.errors)}
               {success && this.showAlert('success', 'Account was successfully created, Redirecting...')}
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

                <label htmlFor="psw"><b>Confirm Password</b></label>
                <input
                  type="password"
                  placeholder="Re-Enter Password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={this.change}
                  className={confirmPasswordError ? 'hasError' : ''}
                />

                <button
                  className="signup-button"
                  type="submit"
                  value="login" >
                  { loading ? 'loading...' : 'Register' }
                </button>
                <div className="text-center">
                  <p>
                    <small>Already have an account? <Link className="no-deco" to="/login">Login</Link></small>
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
Signup.propTypes = {
  loading: PropTypes.bool,
  success: PropTypes.bool,
  failure: PropTypes.bool,
  errors: PropTypes.object,
  signup: PropTypes.func.isRequired,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  loading: state.user.loading,
  success: state.user.success,
  failure: state.user.failure,
  errors: state.user.errors
});

export default connect(mapStateToProps, { signup })(withRouter(Signup));
