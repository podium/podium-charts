import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, ToolTip } from '@podiumhq/podium-ui';
import Ghost from './Ghost/Ghost';
import Trend from './Trend';
import { getOverallSummaryMetric, calculateTrend } from './utils/aggregators';

const SummaryTitleWrapper = styled.div`
  width: 100%;
  padding-top: 8px;
`;

const Title = styled.div`
  color: ${colors.mineShaft};
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const MonthToDate = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.mineShaft};
  font-weight: 600;
  font-size: 32px;

  ${({ smallWidth }) =>
    smallWidth !== 0 &&
    `
    @media (max-width: ${smallWidth}px) {
      font-size: 24px;
    }
  `}
`;

const MonthToDateLabel = styled.div`
  color: ${colors.steel};
  font-size: 14px;
`;

const ToolTipWrapper = styled.div`
  white-space: nowrap;
`;

export default function ReportSummaryTitle({
  data,
  title,
  dataKeys,
  formatter,
  granularity,
  trendDirection,
  preferDown,
  loading,
  tooltip,
  trendData,
  aggregationOptions,
  smallWidth
}) {
  const renderGhostState = () => (
    <SummaryTitleWrapper>
      <Title>{title}</Title>
      <Ghost height="24px" />
      <MonthToDateLabel>Month To Date</MonthToDateLabel>
    </SummaryTitleWrapper>
  );

  const renderToolTip = prevDataValue => {
    return (
      <ToolTipWrapper>
        <div>This time last month:</div>
        <div style={{ textAlign: 'left' }}>
          {prevDataValue === null ? 'N/A' : formatter(prevDataValue)}
        </div>
      </ToolTipWrapper>
    );
  };

  if (loading) return renderGhostState();

  const prevDataValue = trendData
    ? getOverallSummaryMetric(trendData[0], aggregationOptions)
    : 0;
  const currDataValue = trendData
    ? getOverallSummaryMetric(trendData[1], aggregationOptions)
    : 0;

  const currDataFormatted =
    currDataValue === null ? 'N/A' : formatter(currDataValue);

  return (
    <SummaryTitleWrapper>
      <Title>{title}</Title>
      <MonthToDate smallWidth={smallWidth}>
        <span style={{ marginRight: '8px' }}>{currDataFormatted}</span>
        <ToolTip type="arrow" tip={renderToolTip(prevDataValue)} position="top">
          <Trend
            direction={calculateTrend(prevDataValue, currDataValue)}
            preferDown={preferDown}
          />
        </ToolTip>
      </MonthToDate>
      <MonthToDateLabel>Month To Date</MonthToDateLabel>
    </SummaryTitleWrapper>
  );
}

ReportSummaryTitle.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  dataKeys: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  preferDown: PropTypes.bool,
  trendData: PropTypes.array.isRequired,
  aggregationOptions: PropTypes.shape({
    type: PropTypes.oneOf(['avg', 'total', 'weightedAvg']).isRequired,
    dataKeys: PropTypes.array.isRequired,
    options: PropTypes.shape({
      valueKey: PropTypes.string,
      countKey: PropTypes.string
    })
  }).isRequired,
  smallWidth: PropTypes.number
};

ReportSummaryTitle.defaultProps = {
  formatter: value => value,
  preferDown: false,
  smallWidth: 0
};
