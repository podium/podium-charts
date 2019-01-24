import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, ToolTip } from '@podiumhq/podium-ui';
import Ghost from './Ghost/Ghost';
import Trend from './Trend';
import { getOverallSummaryMetric } from './aggregators';

const SummaryTitleWrapper = styled.div`
  padding-top: 8px;
`;

const Title = styled.div`
  color: ${colors.mineShaft};
  font-size: 16px;
`;

const MonthToDate = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.mineShaft};
  font-size: 32px;
  font-weight: 600;
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
  summaryType,
  dataKeys,
  formatter,
  granularity,
  trendDirection,
  preferDown,
  loading,
  tooltip,
  trendData,
  aggregationOptions
}) {
  const renderGhostState = () => (
    <SummaryTitleWrapper>
      <Title>{title}</Title>
      <Ghost height="24px" />
      <MonthToDateLabel>Month To Date</MonthToDateLabel>
    </SummaryTitleWrapper>
  );

  const calculateTrend = (prevDataValue, currDataValue) => {
    if (currDataValue < prevDataValue) {
      return 'down';
    } else if (currDataValue > prevDataValue) {
      return 'up';
    }
    return 'neutral';
  };

  const renderToolTip = prevDataValue => {
    return (
      <ToolTipWrapper>
        <div>This time last month:</div>
        <div style={{ textAlign: 'left' }}>{formatter(prevDataValue)}</div>
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

  //TODO: Build out different tooltip options
  return (
    <SummaryTitleWrapper>
      <Title>{title}</Title>
      <MonthToDate>
        <span style={{ marginRight: '8px' }}>{formatter(currDataValue)}</span>
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
  summaryType: PropTypes.oneOf(['avg', 'total', 'weightedAvg']).isRequired,
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
  }).isRequired
};

ReportSummaryTitle.defaultProps = {
  summaryType: 'total',
  formatter: value => value,
  preferDown: false
};
