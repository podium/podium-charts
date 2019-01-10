import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Line = styled.div`
  border-bottom: solid 1px #e4e9f0;
`;

const Container = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  justify-content: space-between;
  flex-flow: column;
  box-sizing: border-box;
  padding: 0 24px;
  padding-top: 21px;
  padding-bottom: 48px;

  ${({ summary }) =>
    summary &&
    `
		height: 100px;
		padding-top: 24px;
    padding-bottom: 16px;
	`};
`;

const GhostChart = ({ summary }) => (
  <Container summary={summary}>
    <Line />
    <Line />
    <Line />
    {!summary && (
      <>
        <Line />
        <Line />
      </>
    )}
  </Container>
);

GhostChart.propTypes = {
  summary: PropTypes.bool
};

GhostChart.defaultProps = {
  summary: false
};

export default GhostChart;
