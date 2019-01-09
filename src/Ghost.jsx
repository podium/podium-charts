import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const pulsate = keyframes`
	to { background-position: -200% center; }
`;

const GhostState = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  margin: 8px 0;
  background: linear-gradient(
    -90deg,
    rgba(232, 233, 236, 0.3) 0%,
    #e8e9ec 100%
  );

  animation: ${pulsate} 1.5s linear;
  -webkit-animation: ${pulsate} 1.5s linear;
  -webkit-animation-iteration-count: infinite;

  background-size: 200% auto;
  background-clip: text;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin: 8px 0;
`;

const Ghost = ({ height, width, row }, ...props) => {
  return row ? (
    <Row>
      <GhostState height="16px" width="16px" style={{ marginRight: '32px' }} />
      <GhostState height="14px" width="136px" style={{ marginRight: '32px' }} />
      <GhostState height="14px" width="30px" />
    </Row>
  ) : (
    <GhostState height={height} width={width} {...props} />
  );
};

Ghost.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  row: PropTypes.bool
};

Ghost.defaultProps = {
  height: '20px',
  width: '78px'
};

export default Ghost;
