import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'podium-ui';
import moment from 'moment';

const SummaryWrapper = styled.div``;

const ToDate = styled.div`
  color: ${colors.steel};
  font-size: 12px;
`;

const Last12Months = styled.div`
  color: ${colors.steel};
  font-size: 12px;
`;

const SummaryLabel = styled.div`
  color: ${colors.mineShaft};
  font-weight: 600;
  font-size: 32px;
`;

const Space = styled.div`
  padding: 8px;
`;

export default function Summary({ data, dataKeys, summaryType }) {
  const typeHandler = {
    total: monthData =>
      dataKeys.reduce((acc, key) => (monthData[key] || 0) + acc, 0),
    avg: monthData =>
      dataKeys.reduce((acc, key) => (monthData[key] || 0) + acc, 0) /
      dataKeys.length
  };

  const monthToDate = () => {
    const monthData = data[data.length - 1];
    return typeHandler[summaryType](monthData).toFixed(1);
  };

  const last12Months = () => {
    return data
      .reduce((acc, monthData) => {
        return typeHandler[summaryType](monthData) + acc;
      }, 0)
      .toFixed(1);
  };

  const granularity = () => {
    const granInMili = moment(data[1].date).diff(moment(data[0].date));
    const duration = moment.duration(granInMili);
    if (duration.years()) return 'Year';
    if (duration.months()) return 'Month';
    if (duration.weeks()) return 'Week';
    if (duration.days()) return 'Day';
    if (duration.hours()) return 'Hour';
    return '';
  };

  return (
    <SummaryWrapper>
      <ToDate>{granularity()} to Date</ToDate>
      <SummaryLabel>{monthToDate()}</SummaryLabel>
      <Space />
      <Last12Months>Last 12 Months</Last12Months>
      <SummaryLabel>{last12Months()}</SummaryLabel>
    </SummaryWrapper>
  );
}

Summary.propTypes = {
  summaryType: PropTypes.oneOf(['avg', 'total']),
  data: PropTypes.array.isRequired,
  dataKeys: PropTypes.array.isRequired
};

Summary.defaultProps = {
  summaryType: 'total'
};
