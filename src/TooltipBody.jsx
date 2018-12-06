import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { colors } from 'podium-ui';

const TooltipBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.mineShaft};
  text-align: left;
  justify-content: center;
  font-size: 12px;
`;

const ColorLabel = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: ${props => props.fill};
  margin-right: 8px;
`;

const TooltipData = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
`;

const LabelValue = styled.div`
  margin-left: 16px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const Summary = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const XAxisLabel = styled.div``;

const summaryHandler = {
  total: payload =>
    payload.reduce((acc, dataField) => (dataField.value || 0) + acc, 0),
  avg: payload =>
    (
      payload.reduce((acc, dataField) => (dataField.value || 0) + acc, 0) /
      payload.length
    ).toFixed(1)
};

const fullDate = date => {
  if (moment(date).isValid) return moment(date).format('MMMM YYYY');
  return date;
};

export default function TooltipBody(props) {
  const renderSummary = () => {
    const { payload, summaryTitle, summaryType } = props;
    const result = summaryHandler[summaryType](payload);
    return `${result} ${summaryTitle}`;
  };

  const renderTooltipData = () => {
    return props.payload.map(dataField => {
      const { dataKey, value, color, name } = dataField;
      return (
        <TooltipData key={dataKey}>
          <Label>
            <ColorLabel fill={color} />
            <div>{name ? name : dataKey}</div>
          </Label>
          <LabelValue>{value}</LabelValue>
        </TooltipData>
      );
    });
  };

  return (
    <TooltipBodyWrapper>
      <Header>
        <XAxisLabel>{fullDate(props.label)}</XAxisLabel>
        {props.summaryType && <Summary>{renderSummary()}</Summary>}
      </Header>
      {renderTooltipData()}
    </TooltipBodyWrapper>
  );
}

TooltipBody.propTypes = {
  summaryType: PropTypes.oneOf(['total', 'avg']),
  summaryTitle: PropTypes.string
};
