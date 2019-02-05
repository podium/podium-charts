import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import { colors } from '@podiumhq/podium-ui';
import Rectangle from './Rectangle';
import { ChartWrapper } from './ChartStyledComponents';
import {
  detectChartType,
  getStackPositions,
  singleLineChart,
  filterChildren
} from './chartHelpers';
import {
  XAxis,
  YAxis,
  Bar,
  Line,
  SummaryLine,
  Tooltip
} from './skeletonComponents';

import {
  ResponsiveContainer,
  Bar as RechartsBar,
  CartesianGrid as RechartsCartesianGrid,
  Line as RechartsLine,
  Tooltip as RechartsTooltip,
  XAxis as RechartsXAxis,
  YAxis as RechartsYAxis,
  Dot as RechartsDot
} from 'recharts';
import GhostChart from './Ghost/GhostChart';
import ReportCardContext from './ReportCardContext';

const GRAPHIK = 'Graphik, Helvetica, sans-serif';

const determineDataKey = dataKey => {
  if (typeof dataKey !== 'function') {
    return data => get(data, dataKey.split('.'), null);
  }
  return dataKey;
};

// e.g. `facebook.reviewRating` => `facebook`
const getSeriesKey = dataKey => {
  if (typeof dataKey !== 'function') {
    if (dataKey.indexOf('.') !== -1) {
      return dataKey.split('.')[0];
    } else {
      return dataKey;
    }
  }
  return dataKey;
};

// FIXME: REMOVE
let _selectedKey = null;

export default class Chart extends React.Component {
  renderChildren = (mapping, selectedKey) => {
    _selectedKey = selectedKey;
    const { children, data } = this.props;
    if (!data || data.length === 0) return null;

    const filteredChildren = filterChildren(children);
    return React.Children.map(filteredChildren, child => {
      const renderComponent = mapping.get(child.type);
      if (renderComponent) return renderComponent(child.props);
    });
  };

  renderXAxis = ({ dataKey, ...props }) => {
    return (
      <RechartsXAxis
        axisLine={false}
        tickLine={false}
        stroke={colors.lightSteel}
        fontFamily={GRAPHIK}
        dataKey={determineDataKey(dataKey)}
        {...props}
      />
    );
  };

  renderYAxis = props => (
    <RechartsYAxis
      stroke="#ADB6BE"
      axisLine={false}
      tickLine={false}
      width={20}
      orientation="left"
      fontFamily={GRAPHIK}
      {...props}
    />
  );

  renderBar = ({ dataKey, ...props }) => {
    const filteredChildren = filterChildren(this.props.children);
    const stackPosition = getStackPositions(filteredChildren);
    const seriesKey = getSeriesKey(dataKey);
    const isDeselected = _selectedKey && seriesKey !== _selectedKey;
    const color = isDeselected ? `${props.color}4D` : props.color; // 30% opacity when deselected

    return (
      <RechartsBar
        maxBarSize={100}
        shape={
          <Rectangle
            {...props}
            dataKey={dataKey}
            stackPosition={stackPosition}
          />
        }
        fill={color}
        dataKey={determineDataKey(dataKey)}
        {...props}
      />
    );
  };

  renderLine = ({ dataKey, ...props }) => {
    const seriesKey = getSeriesKey(dataKey);
    const isDeselected = _selectedKey && seriesKey !== _selectedKey;
    const color = isDeselected ? `${props.color}4D` : props.color; // 30% opacity when deselected

    return (
      <RechartsLine
        type="linear"
        stroke={color}
        isAnimationActive={false}
        strokeWidth={2}
        activeDot={false}
        dataKey={determineDataKey(dataKey)}
        dot={{ r: 2.5, strokeWidth: 0, fill: color }}
        {...props}
      />
    );
  };

  renderSummaryLine = ({ dataKey, ...props }) => (
    <RechartsLine
      type="linear"
      stroke={props.color}
      isAnimationActive={true}
      strokeWidth={2}
      activeDot={false}
      dataKey={determineDataKey(dataKey)}
      dot={data => {
        if (data.index === this.props.data.length - 1) {
          return (
            <RechartsDot
              r={2.5}
              cx={data.cx}
              cy={data.cy}
              stroke={props.color}
              strokeWidth="2"
              color={props.color}
              fill={colors.white}
            />
          );
        }
        return null;
      }}
      {...props}
    />
  );

  renderTooltip = props => {
    const filteredChildren = filterChildren(this.props.children);
    const singleLine = singleLineChart(filteredChildren);
    let cursorSettings = { fill: '#F1F2F4', strokeWidth: 1 };
    if (singleLine) {
      cursorSettings = {
        ...cursorSettings,
        stroke: singleLine.color
      };
    }
    return (
      <RechartsTooltip
        cursor={cursorSettings}
        isAnimationActive={false}
        offset={20}
        wrapperStyle={{
          minWidth: '160px',
          borderRadius: '4px',
          backgroundColor: colors.white,
          boxShadow: '0 5px 12px 0 rgba(0,0,0,0.24)',
          padding: '16px 24px'
        }}
        {...props}
      />
    );
  };

  render() {
    const { data, width, height, loading, children } = this.props;
    const filteredChildren = filterChildren(children);
    const graph = detectChartType(filteredChildren);
    const RechartsChartType = graph;
    const mapping = new Map([
      [XAxis, this.renderXAxis],
      [YAxis, this.renderYAxis],
      [Bar, this.renderBar],
      [Line, this.renderLine],
      [SummaryLine, this.renderSummaryLine],
      [Tooltip, this.renderTooltip]
    ]);
    if (loading) return <GhostChart height={height} />;

    return (
      <ReportCardContext.Consumer>
        {({ selectedKey }) => (
          <ChartWrapper>
            <ResponsiveContainer width={width} height={height}>
              <RechartsChartType
                data={data}
                margin={{ top: 20, right: 20, bottom: 20, left: 25 }}
                barCategoryGap="30%"
              >
                <RechartsCartesianGrid
                  vertical={false}
                  stroke={colors.mystic}
                />
                {this.renderChildren(mapping, selectedKey)}
              </RechartsChartType>
            </ResponsiveContainer>
          </ChartWrapper>
        )}
      </ReportCardContext.Consumer>
    );
  }
}

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  loading: PropTypes.bool
};

Chart.defaultProps = {
  height: 300
};
