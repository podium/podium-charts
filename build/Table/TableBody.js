import React from 'react';
import PropTypes from 'prop-types';
import { TableBodyWrapper } from './TableStyledComponents';
export default function TableBody(_ref) {
  var children = _ref.children;
  return React.createElement(TableBodyWrapper, null, children);
}
TableBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
TableBody.defaultProps = {
  children: null
};