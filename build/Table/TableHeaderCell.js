import React from 'react';
import PropTypes from 'prop-types';
import { defaultCellWidth } from './constants';
import { TableHeaderCellWrapper } from './TableStyledComponents';
export default function TableHeaderCell(_ref) {
  var active = _ref.active,
      onClick = _ref.onClick,
      sortDirection = _ref.sortDirection,
      children = _ref.children,
      width = _ref.width;
  console.log('WIDTH', width);
  return React.createElement(TableHeaderCellWrapper, {
    active: active,
    onClick: onClick,
    sortDirection: sortDirection,
    width: width
  }, children);
}
TableHeaderCell.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  sortDirection: PropTypes.oneOf([null, 'asc', 'desc']),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  width: PropTypes.string
};
TableHeaderCell.defaultProps = {
  active: false,
  sortDirection: null,
  children: null,
  width: defaultCellWidth,
  onClick: function onClick() {
    return null;
  }
};