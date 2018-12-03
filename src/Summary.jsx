import React from 'react';
import PropTypes from 'prop-types';

export default function Summary() {
  return null;
}

Summary.propTypes = {
  data: PropTypes.array,
  aggType: PropTypes.oneOf(['avg', 'sum'])
};

Summary.defaultProps = {
  aggType: 'sum'
};
