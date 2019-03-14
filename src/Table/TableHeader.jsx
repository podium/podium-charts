import React from 'react';
import PropTypes from 'prop-types';
import { TableHeaderWrapper } from './TableStyledComponents';

export default function TableHeader({ children }) {
  return <TableHeaderWrapper>{children}</TableHeaderWrapper>;
}

TableHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

TableHeader.defaultProps = {
  children: null
};
