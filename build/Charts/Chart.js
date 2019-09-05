function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import { colors } from '@podiumhq/podium-ui';
import { ResponsiveContainer, Bar as RechartsBar, CartesianGrid as RechartsCartesianGrid, Line as RechartsLine, Tooltip as RechartsTooltip, XAxis as RechartsXAxis, YAxis as RechartsYAxis, Dot as RechartsDot } from 'recharts';
import Rectangle from './Rectangle';
import { ChartWrapper } from './ChartStyledComponents';
import { detectChartType, getStackPositions, filterChildren, getDeselectedColor } from './utils/chartHelpers';
import { XAxis, YAxis, Bar, Line, SummaryLine, Tooltip } from './skeletonComponents';
import GhostChart from './Ghost/GhostChart';
import ReportCardContext from './ReportCardContext';
var GRAPHIK = 'Graphik, Helvetica, sans-serif';

var determineDataKey = function determineDataKey(dataKey) {
  if (typeof dataKey !== 'function') {
    return function (data) {
      return get(data, dataKey.split('.'), null);
    };
  }

  return dataKey;
};

var isDeselected = function isDeselected(dataKey, selectedKey) {
  if (!selectedKey) {
    return false;
  }

  var seriesKey = getSeriesKey(dataKey);
  return seriesKey !== selectedKey;
}; // e.g. `facebook.reviewRating` => `facebook`


var getSeriesKey = function getSeriesKey(dataKey) {
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
 * @property {function} onSelectKey The callback to change the selectedKey
 * @property {boolean} isFirstRender Whether we are rendering the Chart for the first time
 */


var Chart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Chart, _React$Component);

  function Chart(props) {
    var _this;

    _classCallCheck(this, Chart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chart).call(this, props)); // Keeping out of component state because we don't want to trigger renders

    _initialiseProps.call(_assertThisInitialized(_this));

    _this.isFirstRender = true;
    return _this;
  }
  /**
   * @param {RenderContext} renderContext
   */


  _createClass(Chart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          data = _this$props.data,
          width = _this$props.width,
          height = _this$props.height,
          hideGrid = _this$props.hideGrid,
          loading = _this$props.loading,
          children = _this$props.children;
      var isFirstRender = this.isFirstRender;
      this.isFirstRender = false;
      var filteredChildren = filterChildren(children);
      var graph = detectChartType(filteredChildren);
      var RechartsChartType = graph;
      var mapping = new Map([[XAxis, this.renderXAxis], [YAxis, this.renderYAxis], [Bar, this.renderBar], [Line, this.renderLine], [SummaryLine, this.renderSummaryLine], [Tooltip, this.renderTooltip]]);
      if (loading) return React.createElement(GhostChart, {
        height: height
      });
      return React.createElement(ReportCardContext.Consumer, null, function (_ref) {
        var selectedKey = _ref.selectedKey,
            onSelectKey = _ref.onSelectKey;
        return React.createElement(ChartWrapper, null, React.createElement(ResponsiveContainer, {
          width: width,
          height: height
        }, React.createElement(RechartsChartType, {
          data: data,
          margin: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 25
          },
          barCategoryGap: "30%"
        }, !hideGrid && _this2.renderCartesianGrid(), _this2.renderChildren(mapping, {
          selectedKey: selectedKey,
          onSelectKey: onSelectKey,
          isFirstRender: isFirstRender
        }))));
      });
    }
  }]);

  return Chart;
}(React.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.renderChildren = function (mapping, renderContext) {
    var _this3$props = _this3.props,
        children = _this3$props.children,
        data = _this3$props.data;
    if (!data || data.length === 0) return null;
    var filteredChildren = filterChildren(children);
    return React.Children.toArray(filteredChildren).sort(function (child1, child2) {
      if (child1.type === Bar && child2.type === Bar) {
        // These two children are both Bars, so we want to reverse them so they
        // render top-to-bottom instead of bottom-to-top
        return -1;
      } else {
        // One or both of these children is not a Bar, so we don't want to
        // change this sorting.
        return 0;
      }
    }).map(function (child) {
      var renderComponent = mapping.get(child.type);
      if (renderComponent) return renderComponent(child.props, renderContext);else return null;
    });
  };

  this.renderXAxis = function (_ref2) {
    var dataKey = _ref2.dataKey,
        props = _objectWithoutProperties(_ref2, ["dataKey"]);

    return React.createElement(RechartsXAxis, _extends({
      axisLine: false,
      tickLine: false,
      stroke: colors.lightSteel,
      fontFamily: GRAPHIK,
      dataKey: determineDataKey(dataKey)
    }, props));
  };

  this.renderYAxis = function (props) {
    return React.createElement(RechartsYAxis, _extends({
      stroke: "#ADB6BE",
      axisLine: false,
      tickLine: false,
      width: 20,
      orientation: "left",
      fontFamily: GRAPHIK
    }, props));
  };

  this.renderBar = function (_ref3, _ref4) {
    var dataKey = _ref3.dataKey,
        props = _objectWithoutProperties(_ref3, ["dataKey"]);

    var selectedKey = _ref4.selectedKey,
        onSelectKey = _ref4.onSelectKey;
    var filteredChildren = filterChildren(_this3.props.children);
    var stackPosition = getStackPositions(filteredChildren);
    var color = isDeselected(dataKey, selectedKey) ? getDeselectedColor(props.color) : props.color;
    return React.createElement(RechartsBar, _extends({
      onMouseEnter: function onMouseEnter() {
        return onSelectKey(dataKey);
      },
      onMouseLeave: function onMouseLeave() {
        return onSelectKey(null);
      },
      maxBarSize: 100,
      shape: React.createElement(Rectangle, _extends({}, props, {
        dataKey: dataKey,
        stackPosition: stackPosition
      })),
      fill: color,
      dataKey: determineDataKey(dataKey)
    }, props));
  };

  this.renderLine = function (_ref5, _ref6) {
    var dataKey = _ref5.dataKey,
        props = _objectWithoutProperties(_ref5, ["dataKey"]);

    var selectedKey = _ref6.selectedKey,
        onSelectKey = _ref6.onSelectKey,
        isFirstRender = _ref6.isFirstRender;
    var color = isDeselected(dataKey, selectedKey) ? getDeselectedColor(props.color) : props.color;
    return React.createElement(RechartsLine, _extends({
      onMouseEnter: function onMouseEnter() {
        return onSelectKey(dataKey);
      },
      onMouseLeave: function onMouseLeave() {
        return onSelectKey(null);
      },
      type: "linear",
      stroke: color,
      isAnimationActive: isFirstRender,
      strokeWidth: 2,
      activeDot: false,
      dataKey: determineDataKey(dataKey),
      dot: {
        r: 2.5,
        strokeWidth: 0,
        fill: color
      }
    }, props));
  };

  this.renderSummaryLine = function (_ref7) {
    var dataKey = _ref7.dataKey,
        props = _objectWithoutProperties(_ref7, ["dataKey"]);

    return React.createElement(RechartsLine, _extends({
      type: "linear",
      stroke: props.color,
      isAnimationActive: true,
      strokeWidth: 2,
      activeDot: false,
      dataKey: determineDataKey(dataKey),
      dot: function dot(data) {
        if (data.index === _this3.props.data.length - 1) {
          return React.createElement(RechartsDot, {
            key: data.key,
            r: 2.5,
            cx: data.cx,
            cy: data.cy,
            stroke: props.color,
            strokeWidth: "2",
            color: props.color,
            fill: colors.white
          });
        }

        return null;
      }
    }, props));
  };

  this.renderTooltip = function (props) {
    return React.createElement(RechartsTooltip, _extends({
      cursor: {
        fill: '#F1F2F4',
        strokeWidth: 1
      },
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

  this.renderCartesianGrid = function () {
    return React.createElement(RechartsCartesianGrid, {
      vertical: false,
      stroke: colors.mystic
    });
  };
};

export { Chart as default };
Chart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  loading: PropTypes.bool,
  hideGrid: PropTypes.bool
};
Chart.defaultProps = {
  height: 300,
  hideGrid: false
};