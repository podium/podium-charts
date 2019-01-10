import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@podiumhq/podium-ui';
import formatters from './formatters';
import Ghost from './Ghost/Ghost';

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

export default function Legend({
  loading,
  data,
  summaryType,
  config,
  formatter
}) {
  const typeHandler = {
    total: dataKey =>
      data.reduce((acc, dataField) => (dataField[dataKey] || 0) + acc, 0),
    avg: dataKey =>
      data.reduce((acc, dataField) => (dataField[dataKey] || 0) + acc, 0) /
      data.length
  };

  const calculateValue = dataKey => {
    return typeHandler[summaryType](dataKey);
  };

  const renderGhostState = () => (
    <LegendWrapper>
      <Ghost row />
      <Ghost row />
      <Ghost row />
    </LegendWrapper>
  );

  const renderLegendItem = () => {
    return config.map(legendItem => {
      const { dataKey, color, name } = legendItem;
      return (
        <ItemWrapper key={dataKey}>
          <Label>
            <ColorLabel color={color} />
            <div>{name ? name : formatters.capitalize(dataKey)}</div>
          </Label>
          <div>{formatter(calculateValue(dataKey))}</div>
        </ItemWrapper>
      );
    });
  };

  if (loading) return renderGhostState();

  return <LegendWrapper>{renderLegendItem()}</LegendWrapper>;
}

Legend.propTypes = {
  data: PropTypes.array.isRequired,
  summaryType: PropTypes.oneOf(['avg', 'total']),
  config: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
      dataKey: PropTypes.string
    })
  ).isRequired,
  formatter: PropTypes.func,
  loading: PropTypes.bool
};

Legend.defaultProps = {
  summaryType: 'total',
  formatter: value => value
};
