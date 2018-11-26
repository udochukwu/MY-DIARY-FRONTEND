import React from 'react';
import PropTypes from 'prop-types';
import truncatise from 'truncatise';
import moment from 'moment';

const DisplayEntry = (props) => {
  const options = {
    TruncateLength: 30,
    TruncateBy: 'characters',
    Strict: false,
    StripHTML: true,
    Suffix: '...'
  };
  const handleClick = (e) => {
    e.preventDefault();
    props.onDeleteClicked();
  };

  return (
    <tr>
      <td>
        <h4><a href={`entries/${props.entryid}`}>{props.entrytitle}</a></h4>
        <p>{truncatise(props.entrycontent, options)}</p>
        <small>{ moment(props.datetime).format('dddd, MMMM Do YYYY, h:mm:ss a')}</small>
      </td>
      <td>
        <a className="deleteBtn" href="#" onClick={handleClick}>
          <i className="far fa-trash-alt"></i>
        </a>
      </td>
    </tr>
  );
};

DisplayEntry.propTypes = {
  entryid: PropTypes.integer,
  entrytitle: PropTypes.string,
  entrycontent: PropTypes.string,
  datetime: PropTypes.string,
  onDeleteClicked: PropTypes.func
};

export default DisplayEntry;
