import React from 'react';
import PropTypes from 'prop-types';
import { TableHeaderWrapper } from './TableStyledComponents';
export default function TableHeader(_ref) {
  var children = _ref.children;
  return React.createElement(TableHeaderWrapper, null, children);
}
TableHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
TableHeader.defaultProps = {
  children: null
};