import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@podiumhq/podium-ui';
import { renderRangeLabel } from './chartHelpers';

const TitleWrapper = styled.div`
  margin-bottom: 16px;
`;

const Title = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

const RangeLabel = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${colors.steel};
`;

const DateRangePlaceholder = styled.span`
  font-size: 12px;
  color: white;
`;

export default function ReportTitle({ data, title, loading }) {
  return (
    <TitleWrapper>
      <Title>{title}</Title>
      <RangeLabel>
        {loading ? (
          <DateRangePlaceholder>Date Range</DateRangePlaceholder>
        ) : (
          renderRangeLabel(data)
        )}
      </RangeLabel>
    </TitleWrapper>
  );
}

ReportTitle.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool
};
