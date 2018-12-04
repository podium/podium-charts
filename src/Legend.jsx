import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'podium-ui';

const LegendWrapper = styled.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.mineShaft};
  text-align: left;
  justify-content: center;
  font-size: 12px;
`;

const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

const ColorLabel = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 2px;
  background-color: ${props => props.color};
  margin-right: 8px;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
`;

export default function Legend({ data, summaryType, config }) {
  const typeHandler = {
    total: dataKey =>
      data.reduce((acc, dataField) => (dataField[dataKey] || 0) + acc, 0),
    avg: dataKey =>
      data.reduce((acc, dataField) => (dataField[dataKey] || 0) + acc, 0) /
      data.length
  };

  const calculateValue = dataKey => {
    return typeHandler[summaryType](dataKey).toFixed(1);
  };

  const renderLegendItem = () => {
    return config.map(legendItem => {
      const { dataKey, color } = legendItem;
      return (
        <ItemWrapper key={dataKey}>
          <Label>
            <ColorLabel color={color} />
            <div>{dataKey.charAt(0).toUpperCase() + dataKey.slice(1)}</div>
          </Label>
          <div>{calculateValue(dataKey)}</div>
        </ItemWrapper>
      );
    });
  };
  return <LegendWrapper>{renderLegendItem()}</LegendWrapper>;
}

Legend.propTypes = {
  data: PropTypes.array.isRequired,
  summaryType: PropTypes.oneOf(['avg', 'total']),
  config: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      dataKey: PropTypes.string
    })
  ).isRequired
};

Legend.defaultProps = {
  summaryType: 'total'
};
