import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash.get';
import { colors, ReportingDatePicker } from '@podiumhq/podium-ui';
import Ghost from './Ghost/Ghost';
import { renderRangeLabel } from './chartHelpers';

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

export default function Summary({
  data,
  dataKeys,
  summaryType,
  formatter,
  granularity,
  unit,
  loading,
  timeRange
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
    if (timeRange === 'custom') {
      return <TimeRange>{renderRangeLabel(data, 'MMM')}</TimeRange>;
    } else {
      return <TimeRange>{selectedOption.label}</TimeRange>;
    }
  };

  if (loading) return renderGhostState();

  const currentData = getLatestSummaryMetric(data, dataKeys, summaryType);
  const entireData = getOverallSummaryMetric(data, dataKeys, summaryType);

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
  summaryType: PropTypes.oneOf(['avg', 'total']),
  data: PropTypes.array.isRequired,
  dataKeys: PropTypes.array.isRequired,
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
  summaryType: 'total',
  unit: '',
  formatter: value => value
};

export function getLatestSummaryMetric(
  data,
  dataKeys,
  summaryType,
  options = {}
) {
  const currentDataObj = data[data.length - 1];
  return rowSummaryFunctions[summaryType](currentDataObj, dataKeys, options);
}

export function getOverallSummaryMetric(
  data,
  dataKeys,
  summaryType,
  options = {}
) {
  return datasetSummaryFunctions[summaryType](data, dataKeys, options);
}

// Helpers

const rowTotal = (row, dataKeys) => {
  let sum = 0;
  for (let key of dataKeys) {
    const value = get(row, key, 0);
    if (isNumeric(value)) {
      sum += value;
    }
  }
  return sum;
};

const rowAvg = (row, dataKeys) => {
  let sum = 0;
  let usedKeys = 0;
  for (let key of dataKeys) {
    const value = get(row, key, 0);
    if (isNumeric(value)) {
      sum += value;
      usedKeys++;
    }
  }
  return usedKeys === 0 ? null : sum / usedKeys;
};

const rowWeightedAvg = (row, dataKeys, { valueKey, countKey }) => {
  let sum = 0;
  let totalCount = 0;
  for (let key of dataKeys) {
    const value = get(row, [key, valueKey], null);
    const count = get(row, [key, countKey], null);
    if (isNumeric(value) && isNumeric(count)) {
      sum += value * count;
      totalCount += count;
    }
  }
  return totalCount === 0 ? null : sum / totalCount;
};

const rowSummaryFunctions = {
  total: rowTotal,
  avg: rowAvg,
  weightedAvg: rowWeightedAvg
};

const dataSetTotal = (data, dataKeys) =>
  data.reduce((acc, row) => {
    return rowSummaryFunctions.total(row, dataKeys) + acc;
  }, 0);

const datasetAvg = (data, dataKeys) => {
  let sum = 0;
  let usedKeys = 0;
  for (let row of data) {
    for (let key of dataKeys) {
      const value = get(row, key, 0);
      if (isNumeric(value)) {
        sum += value;
        usedKeys++;
      }
    }
  }
  return usedKeys === 0 ? null : sum / usedKeys;
};

const datasetWeightedAvg = (data, dataKeys, { valueKey, countKey }) => {
  let sum = 0;
  let totalCount = 0;
  for (let row of data) {
    for (let key of dataKeys) {
      const value = get(row, [key, valueKey], null);
      const count = get(row, [key, countKey], null);
      if (isNumeric(value) && isNumeric(count)) {
        sum += value * count;
        totalCount += count;
      }
    }
  }
  return totalCount === 0 ? null : sum / totalCount;
};

const datasetSummaryFunctions = {
  total: dataSetTotal,
  avg: datasetAvg,
  weightedAvg: datasetWeightedAvg
};

function isNumeric(value) {
  return value !== undefined && value !== null;
}
