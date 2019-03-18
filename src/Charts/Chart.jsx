import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import { colors } from '@podiumhq/podium-ui';
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
import Rectangle from './Rectangle';
import { ChartWrapper } from './ChartStyledComponents';
import {
  detectChartType,
  getStackPositions,
  singleLineChart,
  filterChildren,
  getDeselectedColor
} from './utils/chartHelpers';
import {
  XAxis,
  YAxis,
  Bar,
  Line,
  SummaryLine,
  Tooltip
} from './skeletonComponents';

import GhostChart from './Ghost/GhostChart';
import ReportCardContext from './ReportCardContext';

const GRAPHIK = 'Graphik, Helvetica, sans-serif';

const determineDataKey = dataKey => {
  if (typeof dataKey !== 'function') {
    return data => get(data, dataKey.split('.'), null);
  }
  return dataKey;
};

const isDeselected = (dataKey, selectedKey) => {
  if (!selectedKey) {
    return false;
  }
  const seriesKey = getSeriesKey(dataKey);
  return seriesKey !== selectedKey;
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

/**
 * @typedef RenderContext
 * @property {string | null} selectedKey The series key that is currently selected on the Legend
 * @property {boolean} isFirstRender Whether we are rendering the Chart for the first time
 */

export default class Chart extends React.Component {
  constructor(props) {
    super(props);

    // Keeping out of component state because we don't want to trigger renders
    this.isFirstRender = true;
  }

  /**
   * @param {RenderContext} renderContext
   */
  renderChildren = (mapping, renderContext) => {
    const { children, data } = this.props;
    if (!data || data.length === 0) return null;

    const filteredChildren = filterChildren(children);
    return React.Children.map(filteredChildren, child => {
      const renderComponent = mapping.get(child.type);
      if (renderComponent) return renderComponent(child.props, renderContext);
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

  renderBar = ({ dataKey, ...props }, { selectedKey }) => {
    const filteredChildren = filterChildren(this.props.children);
    const stackPosition = getStackPositions(filteredChildren);
    const color = isDeselected(dataKey, selectedKey)
      ? getDeselectedColor(props.color)
      : props.color;

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

  renderLine = ({ dataKey, ...props }, { selectedKey, isFirstRender }) => {
    const color = isDeselected(dataKey, selectedKey)
      ? getDeselectedColor(props.color)
      : props.color;

    return (
      <RechartsLine
        type="linear"
        stroke={color}
        isAnimationActive={isFirstRender}
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
    const isFirstRender = this.isFirstRender;
    this.isFirstRender = false;
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
                {this.renderChildren(mapping, { selectedKey, isFirstRender })}
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