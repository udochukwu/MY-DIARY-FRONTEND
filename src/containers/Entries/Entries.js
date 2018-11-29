import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEntries, deleteEntry } from '../../requests/EntriesRequests';
import Header from '../Header/Header';
import Footer from '../../components/Footer/Footer';
import DisplayEntry from '../../components/DisplayEntry/DisplayEntry';
import Loader from '../../components/Loader/Loader';
import './Entries.scss';

class Entries extends Component {
  componentDidMount() {
    this.props.getEntries();
  }

  showEntries() {
    if (this.props.entries.length > 0) {
      return this.props.entries.map(entry => (
        <DisplayEntry
          key={entry.entryid}
          entryid={entry.entryid}
          entrytitle={entry.entrytitle}
          entrycontent={entry.entrycontent}
          datetime={entry.datetime}
          onDeleteClicked={() => { this.props.deleteEntry(entry.entryid); }}
        />
      ));
    }
    return <tr>
             <td>No entries yet</td>
             <td className="text-right">
               <a className="text-dark" href="/entries/new">
                  <span className="mx-2 ">
                    <i className="fas fa-plus-circle"></i>
                  </span>
              </a>
             </td>
      </tr>;
  }

  render() {
    const {
      loading, success, failure, entries
    } = this.props;
    return (
      <div>
        <Header />
        <section className="row">
          <div className="entries bg-white py-5 my-5 text-center" >
            <table className="text-left">
              <thead>
                <tr>
                  <th><h2>Entries</h2></th>
                  <th>
                  {
                    entries.length
                      ? <a className="text-dark" href="/entries/new">
                          <span className="mx-2 ">
                            <i className="fas fa-plus-circle"></i>
                          </span>
                        </a>
                      : ''
                  }
                  </th>
                </tr>
              </thead>
              <tbody>
                {success ? this.showEntries() : <tr className="center no-tags"><td><Loader/></td><td></td></tr>}
              </tbody>
            </table>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

Entries.propTypes = {
  loading: PropTypes.bool,
  success: PropTypes.bool,
  failure: PropTypes.bool,
  entries: PropTypes.array,
  isAuth: PropTypes.bool,
  getEntries: PropTypes.func.isRequired,
  deleteEntry: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: state.entries.loading,
  success: state.entries.success,
  failure: state.entries.failure,
  entries: state.entries.entries,
  isAuth: state.user.isAuth,
});

export default connect(mapStateToProps, { getEntries, deleteEntry })(Entries);
