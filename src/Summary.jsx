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

export default function Summary({ data, dataKeys, summaryType, formatter }) {
  const typeHandler = {
    total: monthData =>
      dataKeys.reduce((acc, key) => (monthData[key] || 0) + acc, 0),
    avg: monthData =>
      dataKeys.reduce((acc, key) => (monthData[key] || 0) + acc, 0) /
      dataKeys.length
  };

  const currentData = () => {
    const currentDataObj = data[data.length - 1];
    console.log('Data', currentDataObj);
    return typeHandler[summaryType](currentDataObj);
  };

  const entireData = () => {
    return (
      data.reduce((acc, monthData) => {
        return typeHandler[summaryType](monthData) + acc;
      }, 0) / data.length
    );
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
      <SummaryLabel>{formatter(currentData())}</SummaryLabel>
      <Space />
      <Last12Months>Last 12 Months</Last12Months>
      <SummaryLabel>{formatter(entireData())}</SummaryLabel>
    </SummaryWrapper>
  );
}

Summary.propTypes = {
  summaryType: PropTypes.oneOf(['avg', 'total']),
  data: PropTypes.array.isRequired,
  dataKeys: PropTypes.array.isRequired,
  formatter: PropTypes.func
};

Summary.defaultProps = {
  summaryType: 'total',
  formatter: value => value
};
