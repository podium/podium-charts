import _objectSpread from "/Users/gkkirsch/development/podium-charts/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "/Users/gkkirsch/development/podium-charts/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/gkkirsch/development/podium-charts/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/gkkirsch/development/podium-charts/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/gkkirsch/development/podium-charts/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/gkkirsch/development/podium-charts/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _assertThisInitialized from "/Users/gkkirsch/development/podium-charts/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import React from 'react';
import { colors } from 'podium-ui';
import Rectangle from './Rectangle';
import ChartWrapper from './ChartStyledComponents';
import { detectChartType, getStackPositions, singleLineChart } from './chartHelpers';
import { Bar as RechartsBar, CartesianGrid as RechartsCartesianGrid, Line as RechartsLine, Tooltip as RechartsTooltip, XAxis as RechartsXAxis, YAxis as RechartsYAxis } from 'recharts';

var Chart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Chart, _React$Component);

  function Chart(props) {
    var _this;

    _classCallCheck(this, Chart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chart).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.graph = detectChartType(props.children);
    _this.stackPosition = getStackPositions(props.children);
    _this.singleLineChart = singleLineChart(props.children);
    return _this;
  }

  _createClass(Chart, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          width = _this$props.width,
          height = _this$props.height;
      var RechartsChartType = this.graph;
      var mapping = {
        XAxis: this.renderXAxis,
        YAxis: this.renderYAxis,
        Bar: this.renderBar,
        Line: this.renderLine,
        Tooltip: this.renderTooltip
      };
      return React.createElement(ChartWrapper, null, React.createElement(RechartsChartType, {
        width: width,
        height: height,
        data: data,
        margin: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        },
        barCategoryGap: "30%"
      }, React.createElement(RechartsCartesianGrid, {
        vertical: false,
        stroke: colors.mystic
      }), this.renderChildren(mapping)));
    }
  }]);

  return Chart;
}(React.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.renderChildren = function (mapping) {
    var children = _this2.props.children;
    return React.Children.map(children, function (child) {
      var renderComponent = mapping[child.type.name];
      if (renderComponent) return renderComponent(child.props);
    });
  };

  this.renderXAxis = function (props) {
    return React.createElement(RechartsXAxis, Object.assign({
      axisLine: false,
      tickLine: false,
      stroke: colors.lightSteel,
      fontFamily: "Graphik, Helvetica, sans-serif",
      fontSize: 11
    }, props));
  };

  this.renderYAxis = function (props) {
    return React.createElement(RechartsYAxis, Object.assign({
      stroke: "#ADB6BE",
      axisLine: false,
      tickLine: false,
      orientation: "left",
      fontFamily: "Graphik, Helvetica, sans-serif",
      fontSize: 11
    }, props));
  };

  this.renderBar = function (props) {
    return React.createElement(RechartsBar, Object.assign({
      shape: React.createElement(Rectangle, Object.assign({}, props, {
        stackPosition: _this2.stackPosition
      })),
      fill: props.color
    }, props));
  };

  this.renderLine = function (props) {
    return React.createElement(RechartsLine, Object.assign({
      type: "linear",
      stroke: props.color,
      isAnimationActive: false,
      strokeWidth: 2,
      activeDot: false,
      dot: {
        strokeWidth: 0,
        fill: props.color
      }
    }, props));
  };

  this.renderTooltip = function (props) {
    var cursorSettings = {
      fill: '#F1F2F4',
      strokeWidth: 1
    };

    if (_this2.singleLineChart) {
      cursorSettings = _objectSpread({}, cursorSettings, {
        stroke: _this2.singleLineChart.color
      });
    }

    return React.createElement(RechartsTooltip, Object.assign({
      cursor: cursorSettings,
      isAnimationActive: false,
      offset: 20,
      wrapperStyle: {
        minWidth: '160px',
        borderRadius: '4px',
        backgroundColor: colors.white,
        boxShadow: '0 5px 12px 0 rgba(0,0,0,0.24)',
        padding: '16px 24px'
      }
    }, props));
  };
};

export { Chart as default };
Chart.defaultProps = {
  width: 730,
  height: 250
};