import React from 'react';
import PropTypes from 'prop-types';
import { colors } from 'podium-ui';
import Rectangle from './Rectangle';
import { ChartWrapper } from './ChartStyledComponents';
import {
  detectChartType,
  getStackPositions,
  singleLineChart
} from './chartHelpers';
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

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.graph = detectChartType(props.children);
    this.stackPosition = getStackPositions(props.children);
    this.singleLineChart = singleLineChart(props.children);
    this.lastIndex = props.data.length - 1;
  }

  renderChildren = mapping => {
    const { children } = this.props;
    return React.Children.map(children, child => {
      const renderComponent = mapping[child.type.name];
      if (renderComponent) return renderComponent(child.props);
    });
  };

  renderXAxis = props => (
    <RechartsXAxis
      axisLine={false}
      tickLine={false}
      stroke={colors.lightSteel}
      fontFamily="Graphik, Helvetica, sans-serif"
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
      fontFamily="Graphik, Helvetica, sans-serif"
      {...props}
    />
  );

  renderBar = props => (
    <RechartsBar
      shape={<Rectangle {...props} stackPosition={this.stackPosition} />}
      fill={props.color}
      {...props}
    />
  );

  renderLine = props => (
    <RechartsLine
      type="linear"
      stroke={props.color}
      isAnimationActive={false}
      strokeWidth={2}
      activeDot={false}
      dot={{ r: 2.5, strokeWidth: 0, fill: props.color }}
      {...props}
    />
  );

  renderSummaryLine = props => (
    <RechartsLine
      type="linear"
      stroke={props.color}
      isAnimationActive={false}
      strokeWidth={2}
      activeDot={false}
      dot={data => {
        if (data.index === this.lastIndex) {
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
    const { data, width, height } = this.props;
    const RechartsChartType = this.graph;
    const mapping = {
      XAxis: this.renderXAxis,
      YAxis: this.renderYAxis,
      Bar: this.renderBar,
      Line: this.renderLine,
      SummaryLine: this.renderSummaryLine,
      Tooltip: this.renderTooltip
    };

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
  title: PropTypes.string
};

Chart.defaultProps = {
  height: 300
};
