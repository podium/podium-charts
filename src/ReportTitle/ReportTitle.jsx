import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { colors } from 'podium-ui';

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

const fullDate = (date) => {
  if (moment(date).isValid) return moment(date).format('MMMM YYYY');
  return date;
}

export default function ReportTitle({data, title}) {
  const renderRangeLabel = () => {
    const start = data[0]['date'];
    const end = data[data.length - 1]['date'];
    return `${fullDate(start)} - ${fullDate(end)}`;
  }

  return (
    <TitleWrapper>
      <Title>{title}</Title>
      <RangeLabel>{renderRangeLabel()}</RangeLabel>
    </TitleWrapper>
  )
}

ReportTitle.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}
