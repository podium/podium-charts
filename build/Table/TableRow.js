import React from 'react';
import PropTypes from 'prop-types';
import { TableRowWrapper } from './TableStyledComponents';
import { noop } from 'lodash';
export default function TableRow(_ref) {
  var children = _ref.children,
      onRowClick = _ref.onRowClick,
      rowClickable = _ref.rowClickable,
      hoverColor = _ref.hoverColor;
  return React.createElement(TableRowWrapper, {
    onClick: onRowClick,
    rowClickable: rowClickable,
    hoverColor: hoverColor
  }, children);
}
TableRow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func
};
TableRow.defaultProps = {
  children: null,
  onClick: noop
};