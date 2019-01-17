"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _podiumUi = require("@podiumhq/podium-ui");

var _Rectangle = _interopRequireDefault(require("./Rectangle"));

var _ChartStyledComponents = require("./ChartStyledComponents");

var _chartHelpers = require("./chartHelpers");

var _skeletonComponents = require("./skeletonComponents");

var _recharts = require("recharts");

var _GhostChart = _interopRequireDefault(require("./Ghost/GhostChart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var GRAPHIK = 'Graphik, Helvetica, sans-serif';

var Chart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Chart, _React$Component);

  function Chart(props) {
    var _this;

    _classCallCheck(this, Chart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chart).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_assertThisInitialized(_this)));

    var filteredChildren = (0, _chartHelpers.filterChildren)(props.children);
    _this.graph = (0, _chartHelpers.detectChartType)(filteredChildren);
    _this.stackPosition = (0, _chartHelpers.getStackPositions)(filteredChildren);
    _this.singleLineChart = (0, _chartHelpers.singleLineChart)(filteredChildren);
    return _this;
  }

  _createClass(Chart, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          width = _this$props.width,
          height = _this$props.height,
          loading = _this$props.loading;
      var RechartsChartType = this.graph;
      var mapping = new Map([[_skeletonComponents.XAxis, this.renderXAxis], [_skeletonComponents.YAxis, this.renderYAxis], [_skeletonComponents.Bar, this.renderBar], [_skeletonComponents.Line, this.renderLine], [_skeletonComponents.SummaryLine, this.renderSummaryLine], [_skeletonComponents.Tooltip, this.renderTooltip]]);
      if (loading) return _react.default.createElement(_GhostChart.default, {
        height: height
      });
      return _react.default.createElement(_ChartStyledComponents.ChartWrapper, null, _react.default.createElement(_recharts.ResponsiveContainer, {
        width: width,
        height: height
      }, _react.default.createElement(RechartsChartType, {
        data: data,
        margin: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        },
        barCategoryGap: "30%"
      }, _react.default.createElement(_recharts.CartesianGrid, {
        vertical: false,
        stroke: _podiumUi.colors.mystic
      }), this.renderChildren(mapping))));
    }
  }]);

  return Chart;
}(_react.default.Component);

exports.default = Chart;

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.renderChildren = function (mapping) {
    var children = _this2.props.children;
    var filteredChildren = (0, _chartHelpers.filterChildren)(children);
    return _react.default.Children.map(filteredChildren, function (child) {
      var renderComponent = mapping.get(child.type);
      if (renderComponent) return renderComponent(child.props);
    });
  };

  this.renderXAxis = function (props) {
    return _react.default.createElement(_recharts.XAxis, _extends({
      axisLine: false,
      tickLine: false,
      stroke: _podiumUi.colors.lightSteel,
      fontFamily: GRAPHIK
    }, props));
  };

  this.renderYAxis = function (props) {
    return _react.default.createElement(_recharts.YAxis, _extends({
      stroke: "#ADB6BE",
      axisLine: false,
      tickLine: false,
      width: 20,
      orientation: "left",
      fontFamily: GRAPHIK
    }, props));
  };

  this.renderBar = function (_ref) {
    var dataKey = _ref.dataKey,
        props = _objectWithoutProperties(_ref, ["dataKey"]);

    var path = dataKey.split('.');
    return _react.default.createElement(_recharts.Bar, _extends({
      shape: _react.default.createElement(_Rectangle.default, _extends({}, props, {
        dataKey: dataKey,
        stackPosition: _this2.stackPosition
      })),
      fill: props.color,
      dataKey: function dataKey(data) {
        return (0, _lodash.default)(data, path);
      }
    }, props));
  };

  this.renderLine = function (props) {
    return _react.default.createElement(_recharts.Line, _extends({
      type: "linear",
      stroke: props.color,
      isAnimationActive: true,
      strokeWidth: 2,
      activeDot: false,
      dot: {
        r: 2.5,
        strokeWidth: 0,
        fill: props.color
      }
    }, props));
  };

  this.renderSummaryLine = function (props) {
    return _react.default.createElement(_recharts.Line, _extends({
      type: "linear",
      stroke: props.color,
      isAnimationActive: true,
      strokeWidth: 2,
      activeDot: false,
      dot: function dot(data) {
        if (data.index === _this2.props.data.length - 1) {
          return _react.default.createElement(_recharts.Dot, {
            r: 2.5,
            cx: data.cx,
            cy: data.cy,
            stroke: props.color,
            strokeWidth: "2",
            color: props.color,
            fill: _podiumUi.colors.white
          });
        }

        return null;
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

    return _react.default.createElement(_recharts.Tooltip, _extends({
      cursor: cursorSettings,
      isAnimationActive: false,
      offset: 20,
      wrapperStyle: {
        minWidth: '160px',
        borderRadius: '4px',
        backgroundColor: _podiumUi.colors.white,
        boxShadow: '0 5px 12px 0 rgba(0,0,0,0.24)',
        padding: '16px 24px'
      }
    }, props));
  };
};

Chart.propTypes = {
  data: _propTypes.default.array.isRequired,
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  title: _propTypes.default.string,
  loading: _propTypes.default.bool
};
Chart.defaultProps = {
  height: 300
};