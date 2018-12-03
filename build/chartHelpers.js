"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectChartType = detectChartType;
exports.getStackPositions = getStackPositions;
exports.singleLineChart = singleLineChart;

var _groupBy2 = _interopRequireDefault(require("lodash/groupBy"));

var _react = _interopRequireDefault(require("react"));

var _recharts = require("recharts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function detectChartType(children) {
  var allowedTypes = ['Line', 'Bar'];
  var childrenTypes = [];

  _react.default.Children.forEach(children, function (child) {
    if (!childrenTypes.includes(child.type.name) && allowedTypes.includes(child.type.name)) {
      childrenTypes = _toConsumableArray(childrenTypes).concat([child.type.name]);
    }
  });

  if (childrenTypes.length > 1) return _recharts.ComposedChart;
  if (childrenTypes[0] === 'Bar') return _recharts.BarChart;
  if (childrenTypes[0] === 'Line') return _recharts.LineChart;
  return _recharts.ComposedChart;
}

;

function getStackPositions(children) {
  var stackPosition = [];

  _react.default.Children.forEach(children, function (child) {
    if (child.type.name === 'Bar' && child.props.stackId) {
      stackPosition = stackPosition.concat([{
        stackId: child.props.stackId,
        dataKey: child.props.dataKey
      }]);
    }
  });

  return (0, _groupBy2.default)(stackPosition, 'stackId');
}

function singleLineChart(children) {
  var numberOfLines = 0;
  var lineProps = {};

  _react.default.Children.forEach(children, function (child) {
    if (child.type.name === 'Line') {
      numberOfLines += 1;
      lineProps = child.props;
    }
  });

  return numberOfLines === 1 ? lineProps : false;
}