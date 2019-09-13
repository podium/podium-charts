import React from 'react';
import PropTypes from 'prop-types';
import { TableRowWrapper } from './TableStyledComponents';
import { noop } from 'lodash';

export default function TableRow({
  children,
  onRowClick,
  rowClickable,
  hoverColor
}) {
  return (
    <TableRowWrapper
      onClick={onRowClick}
      rowClickable={rowClickable}
      hoverColor={hoverColor}
    >
      {children}
    </TableRowWrapper>
  );
}

TableRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClick: PropTypes.func
};

TableRow.defaultProps = {
  children: null,
  onClick: noop
};
