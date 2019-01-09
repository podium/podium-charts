import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, IconArrow, IconMinus } from '@podiumhq/podium-ui';
import Ghost from './Ghost';

const calculateTrendColor = ({ direction, preferDown }) => {
  console.log(direction, preferDown);
  switch (direction) {
    case 'up':
      return preferDown ? colors.poppyRed : colors.podiumBrand;
    case 'down':
      return preferDown ? colors.podiumBrand : colors.poppyRed;
    default:
      return colors.iron;
  }
};

const TrendWrapper = styled.div`
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 2px;
	
	//background-color: ${colors.podiumBrand}

  ${({ direction }) =>
    direction === 'up' && `svg { transform: translate(90deg); } `}

	background-color: ${props => calculateTrendColor(props)}	;
`;

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

const Trend = ({ direction, preferDown }) => (
  <TrendWrapper direction={direction} preferDown={preferDown}>
    {direction === 'neutral' ? (
      <IconMinus color={colors.white} size="12" />
    ) : (
      <IconArrow color={colors.white} size="12" direction={direction} />
    )}
  </TrendWrapper>
);

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
      {loading ? (
        <Ghost />
      ) : (
        <MonthToDate>
          {formatter(currentValue())}
          {trendDirection ? (
            <Trend direction={trendDirection} preferDown={preferDown} />
          ) : (
            compareToLastMonth()
          )}
        </MonthToDate>
      )}
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
  preferDown: false
};
