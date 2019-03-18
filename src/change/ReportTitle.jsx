import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@podiumhq/podium-ui';
import { renderRangeLabel, fullDate } from './utils/chartHelpers';

const TitleWrapper = styled.div`
  margin-bottom: 16px;
`;

const Title = styled.div`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

const RangeLabel = styled.div`
  margin: 0;
  font-size: 12px;
  color: ${colors.steel};
`;

const DateRangePlaceholder = styled.span`
  font-size: 12px;
  color: white;
`;

export default function ReportTitle({
  data,
  title,
  loading,
  timeRange,
  dateStart,
  dateEnd
}) {
  const renderTimeRange = () => {
    if (timeRange === 'custom' && dateStart && dateEnd) {
      return `${fullDate(dateStart)} - ${fullDate(dateEnd)}`;
    } else {
      return renderRangeLabel(data);
    }
  };

  return (
    <TitleWrapper>
      <Title>{title}</Title>
      <RangeLabel>
        {loading ? (
          <DateRangePlaceholder>Date Range</DateRangePlaceholder>
        ) : (
          renderTimeRange()
        )}
      </RangeLabel>
    </TitleWrapper>
  );
}

ReportTitle.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  timeRange: PropTypes.string,
  dateStart: PropTypes.string,
  dateEnd: PropTypes.string,
  loading: PropTypes.bool
};
