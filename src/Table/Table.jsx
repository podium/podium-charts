import React from 'react';
import PropTypes from 'prop-types';
import { TableLoading } from '@podiumhq/podium-ui';
import { TableWrapper } from './TableStyledComponents';

export default function Table({ loading, alternateColors, children }) {
  return loading ? <TableLoading /> : <TableWrapper>{children}</TableWrapper>;
}

Table.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Table.defaultProps = {
  loading: false,
  children: null
};
