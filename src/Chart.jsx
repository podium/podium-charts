import React from 'react';
import PropTypes from 'prop-types';
import * as colors from './colors';
import Rectangle from './Rectangle';
import ChartWrapper from './ChartStyledComponents';
import {
  detectChartType,
  getStackPositions,
  singleLineChart
} from './chartHelpers';
import {
  Bar as RechartsBar,
  CartesianGrid as RechartsCartesianGrid,
  Line as RechartsLine,
  Tooltip as RechartsTooltip,
  XAxis as RechartsXAxis,
  YAxis as RechartsYAxis
} from 'recharts';

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.graph = detectChartType(props.children);
    this.stackPosition = getStackPositions(props.children);
    this.singleLineChart = singleLineChart(props.children);
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
      fontSize={11}
      {...props}
    />
  );

  renderYAxis = props => (
    <RechartsYAxis
      stroke="#ADB6BE"
      axisLine={false}
      tickLine={false}
      orientation="left"
      fontSize={11}
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
      dot={{ strokeWidth: 0, fill: props.color }}
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
      Tooltip: this.renderTooltip
    };

    return (
      <ChartWrapper>
        <RechartsChartType
          width={width}
          height={height}
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          barCategoryGap="30%"
        >
          <RechartsCartesianGrid vertical={false} stroke={colors.mystic} />
          {this.renderChildren(mapping)}
        </RechartsChartType>
      </ChartWrapper>
    );
  }
}

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

Chart.defaultProps = {
  width: 730,
  height: 250
};
