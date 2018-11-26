import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEntries } from '../../requests/EntriesRequests';
import Header from '../Header/Header';
import Footer from '../../components/Footer/Footer';
import Avatar from '../../assets/images/diary.png';
import './Dashboard.scss';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getEntries();
  }

  render() {
    const {
      loading, success, failure, entries
    } = this.props;
    return (
      <div>
        <Header/>
        <section className="row py-5">
            <div className="summary bg-light text-center py-5">
                <h1>My Diary</h1>
                <img src={Avatar} className="mb-2"/>
                <h2>Entries: <span className="text-success" id="entriesCount"> {success ? entries.length : 'loading..'}</span></h2>
                <div className="row text-center">
                    <div className="col-30">
                      <a className="text-dark" href="/new_entry">
                        <span className="mx-2 ">
                          <i className="fas fa-plus-circle"></i>
                        </span>
                        <span className="sm-hide"><small>New Entry</small></span>
                      </a>
                    </div>
                    <div className="col-30 mx-3">
                      <a className="text-dark" href="/entries">
                        <span className="mx-2"><i className="fas fa-list-ul"></i></span>
                        <span className="sm-hide"><small>View All Entries</small></span>
                      </a>
                    </div>
                    <div className="col-30">
                      <a className="text-dark" href="#">
                        <span className="mx-2"><i className="far fa-bell"></i></span>
                        <span className="sm-hide"><small>Notifications</small></span>
                      </a>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  loading: PropTypes.bool,
  success: PropTypes.bool,
  failure: PropTypes.bool,
  entries: PropTypes.array,
  isAuth: PropTypes.bool,
  getEntries: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: state.entries.loading,
  success: state.entries.success,
  failure: state.entries.failure,
  entries: state.entries.entries,
  isAuth: state.user.isAuth,
});

export default connect(mapStateToProps, { getEntries })(Dashboard);
