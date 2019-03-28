import React from 'react';
import PropTypes from 'prop-types';
import { TableRowWrapper } from './TableStyledComponents';
export default function TableRow(_ref) {
  var children = _ref.children;
  return React.createElement(TableRowWrapper, null, children);
}
TableRow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
TableRow.defaultProps = {
  children: null
};