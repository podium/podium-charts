"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectChartType = detectChartType;
exports.getStackPositions = getStackPositions;
exports.singleLineChart = singleLineChart;
exports.getDeselectedColor = exports.renderRangeLabel = exports.fullDate = exports.filterChildren = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash.groupby"));

var _recharts = require("recharts");

var _moment = _interopRequireDefault(require("moment"));

var _skeletonComponents = require("../skeletonComponents");

var _podiumUi = require("@podiumhq/podium-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var DEFAULT_DESELECTED_COLOR = _podiumUi.colors.mystic;

function detectChartType(children) {
  var filteredChildren = filterChildren(children);
  var allowedTypes = new Set([_skeletonComponents.Line, _skeletonComponents.Bar]);
  var childrenTypes = [];

  _react.default.Children.forEach(filteredChildren, function (child) {
    if (!childrenTypes.includes(child.type) && allowedTypes.has(child.type)) {
      childrenTypes = _toConsumableArray(childrenTypes).concat([child.type]);
    }
  });

  if (childrenTypes.length > 1) return _recharts.ComposedChart;
  if (childrenTypes[0] === _skeletonComponents.Bar) return _recharts.BarChart;
  if (childrenTypes[0] === _skeletonComponents.Line) return _recharts.LineChart;
  return _recharts.ComposedChart;
}

function getStackPositions(children) {
  var filteredChildren = filterChildren(children);
  var stackPosition = [];

  _react.default.Children.forEach(filteredChildren, function (child) {
    if (child.type === _skeletonComponents.Bar && child.props.stackId) {
      stackPosition = stackPosition.concat([{
        stackId: child.props.stackId,
        dataKey: child.props.dataKey
      }]);
    }
  });

  return (0, _lodash.default)(stackPosition, 'stackId');
}

function singleLineChart(children) {
  var filteredChildren = filterChildren(children);
  var graphElements = new Set([_skeletonComponents.Line, _skeletonComponents.Bar]);
  var numberOfLines = 0;
  var lineProps = {};

  _react.default.Children.forEach(filteredChildren, function (child) {
    if (child.type === _skeletonComponents.Line) lineProps = child.props;
    if (graphElements.has(child.type)) numberOfLines += 1;
  });

  return numberOfLines === 1 ? lineProps : false;
}

var filterChildren = function filterChildren(children) {
  return _react.default.Children.toArray(children).filter(function (child) {
    return child;
  });
};

exports.filterChildren = filterChildren;

var fullDate = function fullDate(date) {
  var monthFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'MMMM';

  var momentDate = _moment.default.utc(date);

  if (momentDate.isValid()) return momentDate.format("".concat(monthFormat, " D, YYYY"));
  return date;
};

exports.fullDate = fullDate;

var renderRangeLabel = function renderRangeLabel(data) {
  var monthFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'MMMM';
  if (!data || data.length === 0) return null;
  var start = data[0]['date'];
  var end = data[data.length - 1]['date'];
  return "".concat(fullDate(start, monthFormat), " - ").concat(fullDate(end, monthFormat));
};

exports.renderRangeLabel = renderRangeLabel;

var getDeselectedColor = function getDeselectedColor(color) {
  if (color.match(/^#[0-9a-f]{6}$/i)) {
    var r = parseInt(color.substring(1, 3), 16);
    var g = parseInt(color.substring(3, 5), 16);
    var b = parseInt(color.substring(5, 7), 16);
    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", 0.3)");
  } else {
    return DEFAULT_DESELECTED_COLOR;
  }
};

exports.getDeselectedColor = getDeselectedColor;