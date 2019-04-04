import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  colors,
  IconUploadSquareSolid,
  IconDownloadSquareSolid,
  IconMinus
} from '@podiumhq/podium-ui';

const calculateTrendIconColor = (direction, preferDown) => {
  switch (direction) {
    case 'up':
      return preferDown ? colors.poppyRed : colors.podiumBrand;
    case 'down':
      return preferDown ? colors.podiumBrand : colors.poppyRed;
    default:
      return colors.white;
  }
};

const arrowCss = css`
  display: flex;
  height: 24px;
  width: 24px;
`;

const StyledIconUpArrow = styled(IconUploadSquareSolid)`
  ${arrowCss}
`;

const StyledIconDownArrow = styled(IconDownloadSquareSolid)`
  ${arrowCss}
`;

const NeutralTrendWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  background-color: ${colors.iron};
  margin: 2px;
`;

const Trend = ({ direction, preferDown }) => {
  switch (direction) {
    case 'up':
      return (
        <StyledIconUpArrow
          color={calculateTrendIconColor(direction, preferDown)}
        />
      );
    case 'down':
      return (
        <StyledIconDownArrow
          color={calculateTrendIconColor(direction, preferDown)}
        />
      );
    default:
      return (
        <NeutralTrendWrapper>
          <IconMinus color={colors.white} size="small" />
        </NeutralTrendWrapper>
      );
  }
};

Trend.propTypes = {
  direction: PropTypes.string.isRequired,
  preferDown: PropTypes.bool
};

Trend.defaultProps = {
  direction: 'neutral',
  preferDown: false
};

export default Trend;
