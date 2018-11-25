import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getText } from '../../requests/HomeRequests';
import './Home.scss';

class Home extends Component {
  componentDidMount() {
    this.props.getText();
  }

  render() {
    const { success, text } = this.props;
    return (
      <div>
        <h1 className="theme-color">{ success ? text : 'loading...'}</h1>
      </div>
    );
  }
}

Home.propTypes = {
  loading: PropTypes.bool,
  success: PropTypes.bool,
  failure: PropTypes.bool,
  text: PropTypes.string,
  getText: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: state.home.loading,
  success: state.home.success,
  failure: state.home.failure,
  text: state.home.text,
});

export default connect(mapStateToProps, { getText })(Home);
