import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@podiumhq/podium-ui';
import Ghost from './Ghost/Ghost';
import Trend from './Trend';

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

export default function ReportSummaryTitle({
  data,
  title,
  summaryType,
  dataKeys,
  formatter,
  granularity,
  trendDirection,
  preferDown,
  loading
}) {
  const summaryHandler = {
    total: periodData =>
      dataKeys.reduce((acc, key) => (periodData[key] || 0) + acc, 0),
    avg: periodData =>
      dataKeys.reduce((acc, key) => (periodData[key] || 0) + acc, 0) /
      dataKeys.length
  };

  const currentValue = () => {
    const currentData = data[data.length - 1];
    return summaryHandler[summaryType](currentData);
  };

  const renderGhostState = () => (
    <SummaryTitleWrapper>
      <Title>{title}</Title>
      <Ghost />
      <MonthToDateLabel>Month To Date</MonthToDateLabel>
    </SummaryTitleWrapper>
  );

  if (loading) return renderGhostState();

  return (
    <SummaryTitleWrapper>
      <Title>{title}</Title>
      <MonthToDate>
        {formatter(currentValue())}
        <Trend direction={trendDirection} preferDown={preferDown} />
      </MonthToDate>
      <MonthToDateLabel>Month To Date</MonthToDateLabel>
    </SummaryTitleWrapper>
  );
}

ReportSummaryTitle.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  summaryType: PropTypes.oneOf(['avg', 'total']),
  dataKeys: PropTypes.array.isRequired,
  trendDirection: PropTypes.oneOf(['up', 'down', 'neutral']),
  loading: PropTypes.bool,
  preferDown: PropTypes.bool
};

ReportSummaryTitle.defaultProps = {
  summaryType: 'total',
  formatter: value => value,
  preferDown: false,
  trendDirection: 'neutral'
};
