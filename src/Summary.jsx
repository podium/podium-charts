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
  formatter,
  granularity,
  unit,
  loading,
  timeRange,
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
    if (timeRange === 'custom') {
      return <TimeRange>{renderRangeLabel(data, 'MMM')}</TimeRange>;
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

export function getLatestSummaryMetric(data, aggregationOptions) {
  const { type, dataKeys, options } = aggregationOptions;

  const currentDataObj = data[data.length - 1];
  return rowSummaryFunctions[type](currentDataObj, dataKeys, options);
}

export function getOverallSummaryMetric(data, aggregationOptions) {
  const { type, dataKeys, options } = aggregationOptions;
  return datasetSummaryFunctions[type](data, dataKeys, options);
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

const isWeightedAvgOptions = options => {
  return options && options.valueKey && options.countKey;
};

const rowWeightedAvg = (row, dataKeys, options) => {
  if (!isWeightedAvgOptions(options)) {
    throw new TypeError('Malformed weighted average options');
  }
  const { valueKey, countKey } = options;
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

const datasetWeightedAvg = (data, dataKeys, options) => {
  if (!isWeightedAvgOptions(options)) {
    throw new TypeError('Malformed weighted average options');
  }
  const { valueKey, countKey } = options;
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
