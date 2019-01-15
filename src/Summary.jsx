import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@podiumhq/podium-ui';
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
  loading,
  unit,
  timeRange
}) {
  const typeHandler = {
    total: monthData =>
      dataKeys.reduce((acc, key) => (monthData[key] || 0) + acc, 0),
    avg: monthData =>
      dataKeys.reduce((acc, key) => (monthData[key] || 0) + acc, 0) /
      dataKeys.length
  };

  const currentData = () => {
    const currentDataObj = data[data.length - 1];
    return typeHandler[summaryType](currentDataObj);
  };

  const entireDataTypeHandler = {
    total: data =>
      data.reduce((acc, monthData) => {
        return typeHandler[summaryType](monthData) + acc;
      }, 0),
    avg: data =>
      data.reduce((acc, monthData) => {
        return typeHandler[summaryType](monthData) + acc;
      }, 0) / data.length
  };

  const entireData = () => {
    return entireDataTypeHandler[summaryType](data);
  };

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
    if (timeRange === 'custom') {
      return <TimeRange>{renderRangeLabel(data, 'MMM')}</TimeRange>;
    } else {
      return (
        <TimeRange>
          Last {data.length} {titleCase(granularity)}
          {data.length === 1 ? '' : 's'}
        </TimeRange>
      );
    }
  };

  if (loading) return renderGhostState();

  return (
    <SummaryWrapper>
      <ToDate>{titleCase(granularity)} to Date</ToDate>
      <SummaryLabel>{`${formatter(currentData())} ${unit}`}</SummaryLabel>
      <Space />
      {renderTimeRange}
      <SummaryLabel>{`${formatter(entireData())} ${unit}`}</SummaryLabel>
    </SummaryWrapper>
  );
}

Summary.propTypes = {
  summaryType: PropTypes.oneOf(['avg', 'total']),
  data: PropTypes.array.isRequired,
  dataKeys: PropTypes.array.isRequired,
  formatter: PropTypes.func,
  loading: PropTypes.bool,
  unit: PropTypes.string
};

Summary.defaultProps = {
  summaryType: 'total',
  unit: '',
  formatter: value => value
};
