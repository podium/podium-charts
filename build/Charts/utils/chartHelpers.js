function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import React from 'react';
import groupBy from 'lodash.groupby';
import { BarChart as RechartsBarChart, ComposedChart as RechartsComposedChart, LineChart as RechartsLineChart } from 'recharts';
import moment from 'moment';
import { Line, Bar } from '../skeletonComponents';
import { colors } from '@podiumhq/podium-ui';
var DEFAULT_DESELECTED_COLOR = colors.mystic;
export function detectChartType(children) {
  var filteredChildren = filterChildren(children);
  var allowedTypes = new Set([Line, Bar]);
  var childrenTypes = [];
  React.Children.forEach(filteredChildren, function (child) {
    if (!childrenTypes.includes(child.type) && allowedTypes.has(child.type)) {
      childrenTypes = [].concat(_toConsumableArray(childrenTypes), [child.type]);
    }
  });
  if (childrenTypes.length > 1) return RechartsComposedChart;
  if (childrenTypes[0] === Bar) return RechartsBarChart;
  if (childrenTypes[0] === Line) return RechartsLineChart;
  return RechartsComposedChart;
}
export function getStackPositions(children) {
  var filteredChildren = filterChildren(children);
  var stackPosition = [];
  React.Children.forEach(filteredChildren, function (child) {
    if (child.type === Bar && child.props.stackId) {
      stackPosition = stackPosition.concat([{
        stackId: child.props.stackId,
        dataKey: child.props.dataKey
      }]);
    }
  });
  return groupBy(stackPosition, 'stackId');
}
export function singleLineChart(children) {
  var filteredChildren = filterChildren(children);
  var graphElements = new Set([Line, Bar]);
  var numberOfLines = 0;
  var lineProps = {};
  React.Children.forEach(filteredChildren, function (child) {
    if (child.type === Line) lineProps = child.props;
    if (graphElements.has(child.type)) numberOfLines += 1;
  });
  return numberOfLines === 1 ? lineProps : false;
}
export var filterChildren = function filterChildren(children) {
  return React.Children.toArray(children).filter(function (child) {
    return child;
  });
};
export var fullDate = function fullDate(date) {
  var monthFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'MMMM';
  var momentDate = moment.utc(date);
  if (momentDate.isValid()) return momentDate.format("".concat(monthFormat, " D, YYYY"));
  return date;
};
export var renderRangeLabel = function renderRangeLabel(data) {
  var monthFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'MMMM';
  if (!data || data.length === 0) return null;
  var start = data[0]['date'];
  var end = data[data.length - 1]['date'];
  return "".concat(fullDate(start, monthFormat), " - ").concat(fullDate(end, monthFormat));
};
export var getDeselectedColor = function getDeselectedColor(color) {
  if (color.match(/^#[0-9a-f]{6}$/i)) {
    var r = parseInt(color.substring(1, 3), 16);
    var g = parseInt(color.substring(3, 5), 16);
    var b = parseInt(color.substring(5, 7), 16);
    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", 0.3)");
  } else {
    return DEFAULT_DESELECTED_COLOR;
  }
};