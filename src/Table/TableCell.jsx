import React from 'react';
import PropTypes from 'prop-types';
import { defaultCellWidth } from './constants';
import { TableCellWrapper } from './TableStyledComponents';

export default function TableCell({
  activeColumn,
  activeRow,
  width,
  children
}) {
  return (
    <TableCellWrapper
      width={width}
      data-active-row={activeRow}
      data-active-col={activeColumn}
    >
      {children}
    </TableCellWrapper>
  );
}

TableCell.propTypes = {
  activeRow: PropTypes.bool,
  activeColumn: PropTypes.bool,
  width: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

TableCell.defaultProps = {
  activeRow: false,
  activeColumn: false,
  children: null,
  width: defaultCellWidth
};
