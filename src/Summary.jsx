import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, ReportingDatePicker } from '@podiumhq/podium-ui';
import Ghost from './Ghost/Ghost';
import { fullDate } from './chartHelpers';
import { getRowSummaryMetric, getOverallSummaryMetric } from './aggregators';

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
  data,
  formatter,
  granularity,
  unit,
  loading,
  timeRange,
  dateStart,
  dateEnd,
  aggregationOptions
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
        <TimeRange>{`${fullDate(dateStart)} - ${fullDate(dateEnd)}`}</TimeRange>
      );
    } else {
      return <TimeRange>{selectedOption.label}</TimeRange>;
    }
  };

  if (loading) return renderGhostState();

  const currentData = getLatestSummaryMetric(data, aggregationOptions);
  const entireData = getOverallSummaryMetric(data, aggregationOptions);

  const currentDataFormatted =
    currentData === null ? 'N/A' : `${formatter(currentData)} ${unit}`;
  const entireDataFormatted =
    entireData === null ? 'N/A' : `${formatter(entireData)} ${unit}`;

  return (
    <SummaryWrapper>
      <ToDate>{titleCase(granularity)} to Date</ToDate>
      <SummaryLabel>{currentDataFormatted}</SummaryLabel>
      <Space />
      {renderTimeRange()}
      <SummaryLabel>{entireDataFormatted}</SummaryLabel>
    </SummaryWrapper>
  );
}

Summary.propTypes = {
  data: PropTypes.array.isRequired,
  aggregationOptions: PropTypes.shape({
    type: PropTypes.oneOf(['avg', 'total', 'weightedAvg']).isRequired,
    dataKeys: PropTypes.array.isRequired,
    options: PropTypes.shape({
      valueKey: PropTypes.string,
      countKey: PropTypes.string
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
  ])
};

Summary.defaultProps = {
  unit: '',
  formatter: value => value
};
