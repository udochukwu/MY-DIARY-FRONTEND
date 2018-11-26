import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import { createEntry } from '../../requests/EntriesRequests';
import Header from '../Header/Header';
import Footer from '../../components/Footer/Footer';
import AlertCard from '../../components/AlertCard/AlertCard';
import Loader from '../../components/Loader/Loader';
import './NewEntry.scss';

class NewEntry extends Component {
  constructor() {
    super();


    this.initialState = { entryTitle: '', entryContent: '' };

    this.state = {
      ...this.initialState
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
    this.redirectToEntries = this.redirectToEntries.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  showAlert(alertType, errors) {
    return (
      <AlertCard datas={errors} alertType={alertType} />
    );
  }

  submit(e) {
    e.preventDefault();
    this.props.createEntry(this.state);
  }

  redirectToEntries() {
    this.props.history.push('/entries');
  }

  render() {
    const { entryTitle, entryContent } = this.state;
    const { failure, errors, success, loading } = this.props;
    if (success) {
      this.redirectToEntries();
    }

    return (
      <div>
        <Header />
        <section className="row">
          <div className="new-entry bg-white className py-5 className my-5 ">
            <form onSubmit={this.submit}>
            {failure && this.showAlert('error', errors)}
              <input
                className="title"
                placeholder="Entry Title"
                autoFocus
                required
                type="text"
                name="entryTitle"
                value={entryTitle}
                onChange={this.change}
              />
              <h4 className="date">
                <i className="far fa-calendar-alt mr-2"></i>
                { moment().format('dddd, MMMM Do YYYY')}
              </h4>
              <textarea
                rows="4"
                cols="50"
                name="entryContent"
                placeholder="Entry Here"
                value={this.state.entryContent}
                onChange={this.change}
                />

              <button
                id="saveBtn"
                className="className mt-3"
                type="submit"
                value="Save Entry">
               { !loading && <i className="far fa-save mr-2"></i>}
                <span id="saveBtnText">{loading ? <Loader type={'spin'}/> : 'Save'}</span>
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

NewEntry.propTypes = {
  loading: PropTypes.bool,
  success: PropTypes.bool,
  failure: PropTypes.bool,
  isAuth: PropTypes.bool,
  errors: PropTypes.object,
  createEntry: PropTypes.func.isRequired,
  history: PropTypes.object,
};

const mapStateToProps = state => ({
  loading: state.entries.loading,
  success: state.entries.success,
  failure: state.entries.failure,
  errors: state.entries.errors,
  isAuth: state.user.isAuth,
});

export default connect(mapStateToProps, { createEntry })(withRouter(NewEntry));
