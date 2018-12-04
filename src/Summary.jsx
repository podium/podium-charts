import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'podium-ui';

const SummaryWrapper = styled.div``;

const MonthToDate = styled.div`
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

  return (
    <SummaryWrapper>
      <MonthToDate>Month to Date</MonthToDate>
      <SummaryLabel>{monthToDate()}</SummaryLabel>
      <Space />
      <Last12Months>Last 12 Months</Last12Months>
      <SummaryLabel>{last12Months()}</SummaryLabel>
    </SummaryWrapper>
  );
}

Summary.propTypes = {
  aggType: PropTypes.oneOf(['avg', 'total']),
  data: PropTypes.array.isRequired,
  dataKeys: PropTypes.array.isRequired
};

Summary.defaultProps = {
  aggType: 'total'
};
