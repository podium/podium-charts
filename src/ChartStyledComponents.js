import styled from 'styled-components';
import { colors } from 'podium-ui';

export const ChartWrapper = styled.div`
  border: 1px solid #e8e9ec;
  border-radius: 6px;
  display: inline-block;
  padding: 24px 16px 0 24px;

  .recharts-cartesian-axis-tick-value {
    font-size: 11px;
  }

  .recharts-tooltip-wrapper-left:after {
    content: '';
    position: absolute;
    margin-left: -12px;
    width: 0;
    height: 0;
    top: 60px;
    right: -15px;
    transform: rotate(225deg);
    transform-origin: 0 0;
    box-sizing: border-box;
    border: 8px solid black;
    border-color: transparent transparent ${colors.white} ${colors.white};
    box-shadow: -3px 2px 4px 0 rgba(0, 0, 0, 0.1);
  }

  .recharts-tooltip-wrapper-right:after {
    content: '';
    position: absolute;
    margin-left: -12px;
    width: 0;
    height: 0;
    top: 40px;
    left: 13px;
    transform: rotate(45deg);
    transform-origin: 0 0;
    box-sizing: border-box;
    border: 8px solid black;
    border-color: transparent transparent ${colors.white} ${colors.white};
    box-shadow: -2px 3px 4px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const ChartHeader = styled.div`
  margin-bottom: 16px;
`;

export const ChartTitle = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

export const RangeLabel = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${colors.steel};
`;
