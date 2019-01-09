import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, IconArrow, IconMinus } from '@podiumhq/podium-ui';

const calculateTrendColor = ({ direction, preferDown }) => {
  switch (direction) {
    case 'up':
      return preferDown ? colors.poppyRed : colors.podiumBrand;
    case 'down':
      return preferDown ? colors.podiumBrand : colors.poppyRed;
    default:
      return colors.iron;
  }
};

const TrendWrapper = styled.div`
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 2px;
  background-color: ${props => calculateTrendColor(props)};

  ${({ direction }) =>
    direction === 'up' && `svg { transform: translate(90deg); } `}
`;

const Trend = ({ direction, preferDown }) => (
  <TrendWrapper direction={direction} preferDown={preferDown}>
    {direction === 'neutral' ? (
      <IconMinus color={colors.white} size="12" />
    ) : (
      <IconArrow color={colors.white} size="12" direction={direction} />
    )}
  </TrendWrapper>
);

Trend.propTypes = {
  direction: PropTypes.string.isRequired,
  preferDown: PropTypes.bool
};

Trend.defaultProps = {
  direction: 'neutral',
  preferDown: false
};

export default Trend;
