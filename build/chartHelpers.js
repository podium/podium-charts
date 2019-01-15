"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectChartType = detectChartType;
exports.getStackPositions = getStackPositions;
exports.singleLineChart = singleLineChart;
exports.filterChildren = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash.groupby"));

var _recharts = require("recharts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function detectChartType(children) {
  var filteredChildren = filterChildren(children);
  var allowedTypes = ['Line', 'Bar'];
  var childrenTypes = [];

  _react.default.Children.forEach(filteredChildren, function (child) {
    if (!childrenTypes.includes(child.type.name) && allowedTypes.includes(child.type.name)) {
      childrenTypes = _toConsumableArray(childrenTypes).concat([child.type.name]);
    }
  });

  if (childrenTypes.length > 1) return _recharts.ComposedChart;
  if (childrenTypes[0] === 'Bar') return _recharts.BarChart;
  if (childrenTypes[0] === 'Line') return _recharts.LineChart;
  return _recharts.ComposedChart;
}

function getStackPositions(children) {
  var filteredChildren = filterChildren(children);
  var stackPosition = [];

  _react.default.Children.forEach(filteredChildren, function (child) {
    if (child.type.name === 'Bar' && child.props.stackId) {
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
  var graphElements = ['Line', 'Bar'];
  var numberOfLines = 0;
  var lineProps = {};

  _react.default.Children.forEach(filteredChildren, function (child) {
    if (child.type.name === 'Line') lineProps = child.props;
    if (graphElements.includes(child.type.name)) numberOfLines += 1;
  });

  return numberOfLines === 1 ? lineProps : false;
}

var filterChildren = function filterChildren(children) {
  return _react.default.Children.toArray(children).filter(function (child) {
    return child;
  });
};

exports.filterChildren = filterChildren;