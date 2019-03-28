import React from 'react';
import PropTypes from 'prop-types';
import { TableLoading } from '@podiumhq/podium-ui';
import { TableWrapper } from './TableStyledComponents';
export default function Table(_ref) {
  var loading = _ref.loading,
      alternateColors = _ref.alternateColors,
      children = _ref.children;
  return loading ? React.createElement(TableLoading, null) : React.createElement(TableWrapper, null, children);
}
Table.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Table.defaultProps = {
  loading: false,
  children: null
};