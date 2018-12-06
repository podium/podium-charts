import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, IconArrow } from 'podium-ui';

const TrendWrapper = styled.div`
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 2px;
  background-color: ${colors.poppyRed};
  ${({ direction }) =>
    direction === 'up' &&
    `
      background-color: ${colors.podiumBrand}
      svg {
        transform: translate(90deg);
      }
    `}
`;

const SummaryTitleWrapper = styled.div`
  padding: 24px 0px 0px 24px;
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

const Trend = ({ direction }) => (
  <TrendWrapper direction={direction}>
    <IconArrow color={colors.white} size="12" direction={direction} />
  </TrendWrapper>
);

export default function ReportSummaryTitle({
  data,
  title,
  summaryType,
  dataKeys,
  formatter,
  granularity
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

  const lastValue = () => {
    const lastData = data[data.length - 2];
    return summaryHandler[summaryType](lastData);
  };

  const compareToLastMonth = () => {
    if (lastValue() - currentValue() < 0) return <Trend direction="up" />;
    return <Trend direction="down" />;
  };

  return (
    <SummaryTitleWrapper>
      <Title>{title}</Title>
      <MonthToDate>
        {formatter(currentValue())} {compareToLastMonth()}
      </MonthToDate>
      <MonthToDateLabel>Month To Date</MonthToDateLabel>
    </SummaryTitleWrapper>
  );
}

ReportSummaryTitle.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  summaryType: PropTypes.oneOf(['avg', 'total']),
  dataKeys: PropTypes.array.isRequired
};

ReportSummaryTitle.defaultProps = {
  summaryType: 'total',
  formatter: value => value
};
