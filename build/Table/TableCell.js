import React from 'react';
import PropTypes from 'prop-types';
import { defaultCellWidth } from './constants';
import { TableCellWrapper } from './TableStyledComponents';
export default function TableCell(_ref) {
  var activeColumn = _ref.activeColumn,
      activeRow = _ref.activeRow,
      width = _ref.width,
      children = _ref.children;
  return React.createElement(TableCellWrapper, {
    width: width,
    "data-active-row": activeRow,
    "data-active-col": activeColumn
  }, children);
}
TableCell.propTypes = {
  activeRow: PropTypes.bool,
  activeColumn: PropTypes.bool,
  width: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
TableCell.defaultProps = {
  activeRow: false,
  activeColumn: false,
  children: null,
  width: defaultCellWidth
};