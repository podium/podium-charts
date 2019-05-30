import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@podiumhq/podium-ui';
import { renderRangeLabel } from './utils/chartHelpers';

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
  title,
  loading,
  timeRange,
  dateStart,
  dateEnd
}) {
  return (
    <TitleWrapper>
      <Title>{title}</Title>
      <RangeLabel>
        {loading ? (
          <DateRangePlaceholder>Date Range</DateRangePlaceholder>
        ) : (
          renderRangeLabel(timeRange, dateStart, dateEnd)
        )}
      </RangeLabel>
    </TitleWrapper>
  );
}

ReportTitle.propTypes = {
  title: PropTypes.node.isRequired,
  timeRange: PropTypes.string,
  dateStart: PropTypes.string,
  dateEnd: PropTypes.string,
  loading: PropTypes.bool
};
