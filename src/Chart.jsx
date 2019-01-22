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

const GRAPHIK = 'Graphik, Helvetica, sans-serif';

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    const filteredChildren = filterChildren(props.children);
    this.graph = detectChartType(filteredChildren);
    this.stackPosition = getStackPositions(filteredChildren);
    this.singleLineChart = singleLineChart(filteredChildren);
  }

  renderChildren = mapping => {
    const { children } = this.props;
    const filteredChildren = filterChildren(children);
    return React.Children.map(filteredChildren, child => {
      const renderComponent = mapping.get(child.type);
      if (renderComponent) return renderComponent(child.props);
    });
  };

  renderXAxis = ({ dataKey, ...props }) => (
    <RechartsXAxis
      axisLine={false}
      tickLine={false}
      stroke={colors.lightSteel}
      fontFamily={GRAPHIK}
      dataKey={data => get(data, dataKey.split('.'), null)}
      {...props}
    />
  );

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

  renderBar = ({ dataKey, ...props }) => (
    <RechartsBar
      shape={
        <Rectangle
          {...props}
          dataKey={dataKey}
          stackPosition={this.stackPosition}
        />
      }
      fill={props.color}
      dataKey={data => get(data, dataKey.split('.'), null)}
      {...props}
    />
  );

  renderLine = ({ dataKey, ...props }) => (
    <RechartsLine
      type="linear"
      stroke={props.color}
      isAnimationActive={true}
      strokeWidth={2}
      activeDot={false}
      dataKey={data => get(data, dataKey.split('.'), null)}
      dot={{ r: 2.5, strokeWidth: 0, fill: props.color }}
      {...props}
    />
  );

  renderSummaryLine = ({ dataKey, ...props }) => (
    <RechartsLine
      type="linear"
      stroke={props.color}
      isAnimationActive={true}
      strokeWidth={2}
      activeDot={false}
      dataKey={data => get(data, dataKey.split('.'), null)}
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
    let cursorSettings = { fill: '#F1F2F4', strokeWidth: 1 };
    if (this.singleLineChart) {
      cursorSettings = {
        ...cursorSettings,
        stroke: this.singleLineChart.color
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
    const { data, width, height, loading } = this.props;
    const RechartsChartType = this.graph;
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
      <ChartWrapper>
        <ResponsiveContainer width={width} height={height}>
          <RechartsChartType
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            barCategoryGap="30%"
          >
            <RechartsCartesianGrid vertical={false} stroke={colors.mystic} />
            {this.renderChildren(mapping)}
          </RechartsChartType>
        </ResponsiveContainer>
      </ChartWrapper>
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
