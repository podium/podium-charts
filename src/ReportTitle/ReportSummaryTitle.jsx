import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { colors } from 'podium-ui';

const SummaryTitleWrapper = styled.div`
  padding: 24px 0px 0px 24px;
`;

const Title = styled.div`
  color: ${colors.mineShaft};
  font-size: 16px;
`;

const MonthToDate = styled.div`
  color: ${colors.mineShaft};
  font-size: 32px;
  font-weight: 600;
`;

const MonthToDateLabel = styled.div`
  color: ${colors.steel};
  font-size: 14px;
`;

export default function ReportSummaryTitle({data, title, summaryType, dataKeys, formatter}) {
  const typeHandler = {
    total: monthData =>
      dataKeys.reduce((acc, key) => (monthData[key] || 0) + acc, 0),
    avg: monthData =>
      (
        dataKeys.reduce((acc, key) => (monthData[key] || 0) + acc, 0) /
        dataKeys.length
      )
  };

  const monthToDateValue = () => {
    const monthData = data[data.length - 1];
    return typeHandler[summaryType](monthData);
  }

  const lastMonthValue = () => {
    const monthData = data[data.length - 2];
    return typeHandler[summaryType](monthData);
  }

  const compareToLastMonth = () => {
    return ((lastMonthValue - monthToDateValue) > 0) ? '+' : '-';
  }

  return (
    <SummaryTitleWrapper>
      <Title>{title}</Title>
      <MonthToDate>{formatter(monthToDateValue())} {compareToLastMonth()}</MonthToDate>
      <MonthToDateLabel>Month To Date</MonthToDateLabel>
    </SummaryTitleWrapper>
  )
}

ReportSummaryTitle.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  summaryType: PropTypes.oneOf(['avg', 'total']),
  dataKeys: PropTypes.array.isRequired
}

ReportSummaryTitle.defaultProps = {
  summaryType: 'total',
  formatter: (value) => value
};
