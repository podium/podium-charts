import React from 'react';
import PropTypes from 'prop-types';
import { TableRowWrapper } from './TableStyledComponents';

export default function TableRow({ children }) {
  return <TableRowWrapper>{children}</TableRowWrapper>;
}

TableRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

TableRow.defaultProps = {
  children: null
};
