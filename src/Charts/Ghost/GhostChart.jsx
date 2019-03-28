import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Line = styled.div`
  border-bottom: solid 1px #e4e9f0;
`;

const Container = styled.div`
  display: flex;
  height: ${({ height }) => `${height}px`};
  width: 100%;
  justify-content: space-around;
  flex-flow: column;
  box-sizing: border-box;
  padding: 0 24px;
`;

const calculateLines = height => {
  if (height >= 300) return 5;
  return 0;
};

const GhostChart = ({ height }) => {
  const numberOfLines = calculateLines(height);
  const renderLines = () => {
    return [...new Array(numberOfLines)].map((_, i) => <Line key={i} />);
  };

  return <Container height={height}>{renderLines()}</Container>;
};

GhostChart.propTypes = {
  height: PropTypes.number.isRequired
};

GhostChart.defaultProps = {
  height: 300
};

export default GhostChart;
