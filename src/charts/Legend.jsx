import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@podiumhq/podium-ui';
import get from 'lodash.get';
import Ghost from './Ghost/Ghost';
import { getOverallSummaryMetric } from '../utils/aggregators';
import formatters from '../utils/formatters';
import ReportCardContext from './ReportCardContext';

const LegendWrapper = styled.div`
  padding-top: 12px;
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
  padding-top: 4px;
  padding-bottom: 4px;
  cursor: default;

  ${({ enabled }) =>
    !enabled &&
    `
    opacity: 0.3;
  `}
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
  aggregationOptions,
  displayOptions,
  formatter
}) {
  const calculateValue = dataKey => {
    const itemAggregationOptions = {
      type: aggregationOptions.type,
      dataKeys: [dataKey],
      options: aggregationOptions.options
    };
    return getOverallSummaryMetric(data, itemAggregationOptions);
  };

  const createAggMap = (dataKeys = []) => {
    return dataKeys.reduce((acc, dataKey) => {
      return { ...acc, [dataKey]: calculateValue(dataKey) };
    }, {});
  };

  const renderGhostState = () => (
    <LegendWrapper>
      <Ghost row />
      <Ghost row />
      <Ghost row />
    </LegendWrapper>
  );

  const renderLegendItems = (aggMap = {}, selectedKey, onSelectKey) => {
    // TODO: why do we need to reverse the displayOptions?
    // Maybe we want to reverse the rendering of stacked bars instead
    return displayOptions
      .slice()
      .reverse()
      .map(legendItem => {
        const { dataKey, color, name } = legendItem;
        const formattedValue = formatter(aggMap[dataKey], dataKey);
        return (
          <ItemWrapper
            key={name}
            enabled={!selectedKey || dataKey === selectedKey}
            onMouseEnter={() => onSelectKey(dataKey)}
            onMouseLeave={() => onSelectKey(null)}
          >
            <Label>
              <ColorLabel color={color} />
              <div>{name ? name : ''}</div>
            </Label>
            {formattedValue && <div>{formattedValue}</div>}
          </ItemWrapper>
        );
      });
  };

  if (loading) return renderGhostState();

  const dataKeys = get(aggregationOptions, 'dataKeys');
  const aggMap = createAggMap(dataKeys);

  return (
    <ReportCardContext.Consumer>
      {({ selectedKey, onSelectKey }) => (
        <LegendWrapper>
          {renderLegendItems(aggMap, selectedKey, onSelectKey)}
        </LegendWrapper>
      )}
    </ReportCardContext.Consumer>
  );
}

Legend.propTypes = {
  data: PropTypes.array.isRequired,
  aggregationOptions: PropTypes.shape({
    type: PropTypes.oneOf(['avg', 'total', 'weightedAvg']).isRequired,
    dataKeys: PropTypes.array.isRequired,
    options: PropTypes.shape({
      valueKey: PropTypes.string,
      countKey: PropTypes.string
    })
  }),
  displayOptions: PropTypes.arrayOf(
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
  formatter: formatters.commatize
};
