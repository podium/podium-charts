import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import { colors } from '@podiumhq/podium-ui';
import Rectangle from './Rectangle';
import { ChartWrapper } from './ChartStyledComponents';
import {
  detectChartType,
  getStackPositions,
  singleLineChart as prepSingleLineChart,
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

const determineDataKey = dataKey => {
  if (typeof dataKey !== 'function') {
    return data => get(data, dataKey.split('.'), null);
  }
  return dataKey;
};

const prepChartConfig = children => {
  const filteredChildren = filterChildren(children);
  const graph = detectChartType(filteredChildren);
  const stackPosition = getStackPositions(filteredChildren);
  const singleLineChart = prepSingleLineChart(filteredChildren);

  return { graph, stackPosition, singleLineChart };
};

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...prepChartConfig(props.children) };
  }

  componentDidUpdate(prevProps) {
    this.setState({ ...prepChartConfig(this.props.children) });
  }

  renderChildren = mapping => {
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

  renderBar = ({ dataKey, ...props }) => (
    <RechartsBar
      maxBarSize={100}
      shape={
        <Rectangle
          {...props}
          dataKey={dataKey}
          stackPosition={this.state.stackPosition}
        />
      }
      fill={props.color}
      dataKey={determineDataKey(dataKey)}
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
      dataKey={determineDataKey(dataKey)}
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
    let cursorSettings = { fill: '#F1F2F4', strokeWidth: 1 };
    if (this.state.singleLineChart) {
      cursorSettings = {
        ...cursorSettings,
        stroke: this.state.singleLineChart.color
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
    const RechartsChartType = this.state.graph;
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
            margin={{ top: 20, right: 20, bottom: 20, left: 25 }}
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
