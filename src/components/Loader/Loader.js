import React from 'react';
import PropTypes from 'prop-types';
import Bounce from '../../assets/images/ajax-loader-bounce.gif';
import Linear from '../../assets/images/ajax-loader-facebook.gif';
import Spin from '../../assets/images/ajax-loader-spinner.gif';

import './Loader.scss';

const Loader = (props) => {
  let loaderType = Linear;
  if (props.type === 'bounce') {
    loaderType = Bounce;
  }
  if (props.type === 'linear') {
    loaderType = Linear;
  }
  if (props.type === 'spin') {
    loaderType = Spin;
  }
  return (
  <img className="loader-image" src={loaderType}/>
  );
};

Loader.propTypes = {
  type: PropTypes.string
};

export default Loader;
