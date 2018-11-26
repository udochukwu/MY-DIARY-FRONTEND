import React from 'react';
import PropTypes from 'prop-types';
import './AlertCard.scss';

const AlertCard = (props) => {
  let datas;
  if (typeof props.datas === 'object') {
    const convertedToArray = Object.keys(props.datas).map(key => [props.datas[key]]);
    datas = convertedToArray.map((data, index) => <li key={index} ><small>{data}</small></li>);
  } else if (Array.isArray(props.datas)) {
    datas = props.datas.map((data, index) => <li key={index} ><small>{data}</small></li>);
  } else {
    datas = <li><small>{ props.datas }</small></li>;
  }

  return (
  <div className="alert-card">
    <ul className={props.alertType}>{ datas }</ul>
  </div>
  );
};

AlertCard.propTypes = {
  datas: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  alertType: PropTypes.string
};

export default AlertCard;
