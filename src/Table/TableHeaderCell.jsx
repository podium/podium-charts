import React from 'react';
import PropTypes from 'prop-types';
import { defaultCellWidth } from './constants';
import { TableHeaderCellWrapper } from './TableStyledComponents';

export default function TableHeaderCell({
  active,
  onClick,
  sortDirection,
  children,
  width
}) {
  return (
    <TableHeaderCellWrapper
      active={active}
      onClick={onClick}
      sortDirection={sortDirection}
      width={width}
    >
      {children}
    </TableHeaderCellWrapper>
  );
}

TableHeaderCell.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  sortDirection: PropTypes.oneOf([null, 'asc', 'desc']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  width: PropTypes.number
};

TableHeaderCell.defaultProps = {
  active: false,
  sortDirection: null,
  children: null,
  width: defaultCellWidth,
  onClick: () => null
};
