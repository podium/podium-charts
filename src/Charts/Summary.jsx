import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, ReportingDatePicker } from '@podiumhq/podium-ui';
import Ghost from './Ghost/Ghost';
import { fullDate } from './utils/chartHelpers';
import { getRowSummaryMetric } from './utils/aggregators';
import formatters from './utils/formatters';

const SummaryWrapper = styled.div``;

const ToDate = styled.div`
  color: ${colors.steel};
  font-size: 12px;
`;

const TimeRange = styled.div`
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

const getLatestSummaryMetric = (data, aggregationOptions) => {
  if (!data) return null;
  const currentDataObj = data[data.length - 1];
  return getRowSummaryMetric(currentDataObj, aggregationOptions);
};

export default function Summary({
  chartData,
  formatter,
  granularity,
  unit,
  loading,
  timeRange,
  dateStart,
  dateEnd,
  aggregationOptions,
  overallSummaryMetric
}) {
  const titleCase = str => {
    return str
      .toLowerCase()
      .split(' ')
      .map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(' ');
  };

  const renderGhostState = () => (
    <SummaryWrapper>
      <Ghost height="14px" width="78px" />
      <Ghost height="27px" width="44px" />
      <Space />
      <Ghost height="14px" width="78px" />
      <Ghost height="27px" width="44px" />
    </SummaryWrapper>
  );

  const renderTimeRange = () => {
    const selectedOption =
      ReportingDatePicker.options.find(option => option.value === timeRange) ||
      {};

    if (timeRange === 'custom' && dateStart && dateEnd) {
      return (
        <TimeRange>{`${fullDate(dateStart, 'MMM')} - ${fullDate(
          dateEnd,
          'MMM'
        )}`}</TimeRange>
      );
    } else {
      return <TimeRange>{selectedOption.label}</TimeRange>;
    }
  };

  const enabledGranularityList = [
    'last12Months',
    'monthToDate',
    'today',
    'weekToDate',
    'yearToDate'
  ];

  const shouldRenderValueToDate = (timeRange, dateEnd) => {
    return (
      enabledGranularityList.includes(timeRange) ||
      (timeRange === 'custom' && dateEnd === formatters.getToday())
    );
  };

  if (loading) return renderGhostState();

  const currentData = getLatestSummaryMetric(chartData, aggregationOptions);

  const currentDataFormatted =
    currentData === null ? 'N/A' : `${formatter(currentData)} ${unit}`;
  const entireDataFormatted =
    overallSummaryMetric === null
      ? 'N/A'
      : `${formatter(overallSummaryMetric)} ${unit}`;

  return (
    <SummaryWrapper>
      {shouldRenderValueToDate(timeRange, dateEnd) && (
        <div>
          <ToDate>{titleCase(granularity)} to Date</ToDate>
          <SummaryLabel>{currentDataFormatted}</SummaryLabel>
          <Space />
        </div>
      )}
      {renderTimeRange()}
      <SummaryLabel>{entireDataFormatted}</SummaryLabel>
    </SummaryWrapper>
  );
}

Summary.propTypes = {
  chartData: PropTypes.array.isRequired,
  aggregationOptions: PropTypes.shape({
    type: PropTypes.oneOf(['avg', 'total', 'weightedAvg']).isRequired,
    dataKeys: PropTypes.array.isRequired,
    options: PropTypes.shape({
      valueKey: PropTypes.string,
      countKey: PropTypes.string,
      overallSummaryMetric: PropTypes.number
    })
  }).isRequired,
  formatter: PropTypes.func,
  loading: PropTypes.bool,
  unit: PropTypes.string,
  timeRange: PropTypes.oneOf([
    'custom',
    'lastMonth',
    'last12Months',
    'lastWeek',
    'lastYear',
    'monthToDate',
    'today',
    'weekToDate',
    'yearToDate',
    'yesterday'
  ]),
  dateStart: PropTypes.string,
  dateEnd: PropTypes.string,
  overallSummaryMetric: PropTypes.number
};

Summary.defaultProps = {
  unit: '',
  formatter: formatters.commatize,
  overallSummaryMetric: null
};
