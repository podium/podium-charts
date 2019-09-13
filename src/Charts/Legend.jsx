import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@podiumhq/podium-ui';
import get from 'lodash.get';
import Ghost from './Ghost/Ghost';
import formatters from './utils/formatters';
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
  min-width: 16px;
  min-height: 16px;
  border-radius: 2px;
  background-color: ${props => props.color};
  margin-right: 8px;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: ${({ disabled }) => disabled && colors.steel};
`;

export default function Legend({
  loading,
  legendData,
  aggregationOptions,
  displayOptions,
  formatter
}) {
  const getDataKeys = displayOptions => {
    return displayOptions.reduce((acc, option) => {
      return [...acc, option.dataKey];
    }, []);
  };

  const getValue = (legendData, dataKey) => {
    const value = get(legendData, dataKey);
    if (!value) return null;
    return value;
  };

  const createLegendMap = (legendData, dataKeys = []) => {
    return dataKeys.reduce((acc, dataKey) => {
      return { ...acc, [dataKey]: getValue(legendData, dataKey) };
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
    const legendItems = [];
    const filteredItems = [];
    displayOptions.forEach(item => {
      item.disabled ? filteredItems.push(item) : legendItems.push(item);
    });

    return legendItems
      .concat(filteredItems)
      .slice()
      .map(legendItem => {
        const { dataKey, color, name, disabled } = legendItem;
        const formattedValue = formatter(aggMap[dataKey], dataKey);
        return (
          <ItemWrapper
            key={name}
            enabled={!selectedKey || dataKey === selectedKey}
            onMouseEnter={() => onSelectKey(dataKey)}
            onMouseLeave={() => onSelectKey(null)}
          >
            <Label disabled={disabled}>
              <ColorLabel color={disabled ? colors.mystic : color} />
              <div>{name ? name : ''}</div>
            </Label>
            {formattedValue && <div>{formattedValue}</div>}
          </ItemWrapper>
        );
      });
  };

  if (loading) return renderGhostState();

  const dataKeys = getDataKeys(displayOptions);
  const legendMap = createLegendMap(legendData, dataKeys);
  return (
    <ReportCardContext.Consumer>
      {({ selectedKey, onSelectKey }) => (
        <LegendWrapper>
          {renderLegendItems(legendMap, selectedKey, onSelectKey)}
        </LegendWrapper>
      )}
    </ReportCardContext.Consumer>
  );
}

Legend.propTypes = {
  /** An object containing the dataKeys and the associated values to be displayed */
  legendData: PropTypes.object.isRequired,
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
