import React from 'react';
import PropTypes from 'prop-types';
import { TableBodyWrapper } from './TableStyledComponents';

export default function TableBody({ children }) {
  return <TableBodyWrapper>{children}</TableBodyWrapper>;
}

TableBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

TableBody.defaultProps = {
  children: null
};
